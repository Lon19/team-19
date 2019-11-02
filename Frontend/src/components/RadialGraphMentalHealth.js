import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { VictoryBar } from 'victory';
import { VictoryChart, VictoryTheme, VictoryLabel, VictoryPolarAxis, VictoryGroup, VictoryArea } from 'victory';

const myBlue = "#75b2ff";
const characterData = [
    { Depression: 5, Anxiety: 2, Stress: 7 },
    { Depression: 4, Anxiety: 3, Stress: 4 },
    { Depression: 2, Anxiety: 1, Stress: 9 },
    { Depression: 8, Anxiety: 1, Stress: 9 },
    { Depression: 5, Anxiety: 2, Stress: 1 },
];

class RadialGraphMentalHealth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.processData(characterData),
            maxima: {Depression: 36, Anxiety: 42, Stress: 42}
        };
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

    processData(data) {
        const maxByGroup = this.getMaxima(data);
        const makeDataArray = (d) => {
            return Object.keys(d).map((key) => {
                return { x: key, y: d[key] / maxByGroup[key] };
            });
        };
        return data.map((datum) => makeDataArray(datum));
    }

    render() {
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
export default RadialGraphMentalHealth
