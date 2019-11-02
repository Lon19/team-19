import React, { Component } from 'react'
import { VictoryChart, VictoryScatter, VictoryLine, VictoryPolarAxis, VictoryGroup, VictoryArea } from 'victory';

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
                this.setState({data: data.map(a => {
                        return {date: new Date(a.date), item: a[this.state.selection]};
                    }), ready: true });
            });
    }
     processData (data)  {
        const makeDataArray = (d) => {
            return Object.keys(d).map((key) => {
                return { x: new Date(d.date), y: d.item };
            });
        };
        return data.map((datum) => makeDataArray(datum));
    }

    render() {
         if (!this.state.ready) {
             return null;
         }
         console.log(this.state.data);
        return (
            <VictoryChart
                scale={{ x: "time" }}
            >
                <VictoryLine
                    style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    data={this.state.date}
                />
            </VictoryChart>
        );
    }
}
export default LinearGraph
