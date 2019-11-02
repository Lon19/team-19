import React, { Component } from 'react'
import { VictoryChart, VictoryTheme, VictoryStack, VictoryPolarAxis, VictoryGroup, VictoryArea } from 'victory';

const myBlue = "#75b2ff";

class LinearGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            ready: false,
            selection: "pressure"
        };

    this.processData.bind(this);
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
                this.setState({data: this.processData(data.map(a => {
                        console.log({date: a.date, item: a[this.state.selection]});
                        return {date: a.date, item: a[this.state.selection]};
                    })), ready: true });
            });
    }
     processData (data)  {
        const makeDataArray = (d) => {
            return Object.keys(d).map((key) => {
                return { x: key, y: d.item };
            });
        };
        return data.map((datum) => makeDataArray(datum));
    }

    render() {
         if (!this.state.ready) {
             return null;
         }
        return (
            <VictoryChart
                theme={VictoryTheme.material}
                animate={{ duration: 1000 }}
            >
                <VictoryStack
                    colorScale={"blue"}
                >
                    {this.state.data.map((data, i) => {
                        return (
                            <VictoryArea
                                key={i}
                                data={data}
                                interpolation={"basis"}
                            />
                        );
                    })}
                </VictoryStack>
            </VictoryChart>
        );
    }
}
export default LinearGraph
