import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { VictoryBar } from 'victory';
import { VictoryChart, VictoryTheme, VictoryLabel, VictoryPolarAxis, VictoryGroup, VictoryArea } from 'victory';
import axios from 'axios';
import {parseSync} from "@babel/core";

const myBlue = "#75b2ff";
const characterData = [
    {
        "date": "18th August 2019 9:16 am",
        "learning": 2.75,
        "pressure": 2.5,
        "problem_solving": 2.5,
        "role_expectations": 2.5,
        "sensitivity": 3.0,
        "teamwork": 1.75,
        "work_politics": 1.5
    },
];

class RadialGraphWorkSelfConfidence extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            withDateData: [],
            maxima: [],
            ready: false
        };

this.processData.bind(this);
this.getMaxima.bind(this);
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/work-self-confidence/overview?username=67611589", {
            mode: 'cors'
        })
            .then(response => {
                    return response.json()
                }
            )
            .then(data => {
                console.log(data);
                this.setState({data: this.processData(data.map(a => {
                        delete a.date;
                        return a;
                    })), ready: true, withDateData: data });
            });
    }

    getMaxima(data) {
        const groupedData = Object.keys(data[0]).reduce((memo, key) => {
            memo[key] = data.map((d) => d[key]);
            return memo;
        }, {});
        return Object.keys(groupedData).reduce((memo, key) => {
            memo[key] = Math.max(...groupedData[key]);
            return memo;
        }, {});
    }

     processData (data)  {
        const maxByGroup = this.getMaxima(data);
        const makeDataArray = (d) => {
            return Object.keys(d).map((key) => {
                return { x: key, y: d[key] / maxByGroup[key] };
            });
        };
        return data.map((datum) => makeDataArray(datum));
    }

    render() {
         if (!this.state.ready) {
             return null;
         }

        return (
            <VictoryChart polar
                          theme={VictoryTheme.material}
                          domain={{ y: [ 0, 1 ] }}
            >
                <VictoryGroup colorScale={[myBlue]}
                              style={{ data: { fillOpacity: 0.8, strokeWidth: 0 } }}
                >
                    {this.state.data.map((data, i) => {
                        return <VictoryArea key={i} data={data}/>;
                    })}
                </VictoryGroup>
                {
                    Object.keys(this.state.maxima).map((key, i) => {
                        return (
                            <VictoryPolarAxis key={i} dependentAxis
                                              style={{
                                                  axisLabel: { padding: 10 },
                                                  axis: { stroke: "none" },
                                                  grid: { stroke: myBlue, strokeWidth: 0.25, opacity: 0.5 }
                                              }}
                                              tickLabelComponent={
                                                  <VictoryLabel labelPlacement="vertical"/>
                                              }
                                              labelPlacement="vertical"
                                              axisValue={i + 1} label={key}
                                              tickFormat={(t) => Math.ceil(t * this.state.maxima[key])}
                                              tickValues={[0.25, 0.5, 0.75]}
                            />
                        );
                    })
                }
                <VictoryPolarAxis
                    labelPlacement="parallel"
                    tickFormat={() => ""}
                    style={{
                        axis: { stroke: "none" },
                        grid: { stroke: "#75b2ff", opacity: 0.5 }
                    }}
                />

            </VictoryChart>
        );
    }
}
export default RadialGraphWorkSelfConfidence
