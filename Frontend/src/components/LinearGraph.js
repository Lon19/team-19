import React, { Component } from "react";
import {
  VictoryChart,
  VictoryScatter,
  VictoryLine,
  VictoryPolarAxis,
  VictoryGroup,
  VictoryArea
} from "victory";

const myBlue = "#75b2ff";

class LinearGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      ready: false,
      selection: "pressure"
    };
  }

  componentDidMount() {
    fetch(
      "http://127.0.0.1:5000/work-self-confidence/overview?username=67611589",
      {
        mode: "cors"
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          data: data.map(a => {
            return { x: new Date(a.date), y: a[this.props.selection] };
          }),
          ready: true
        });
      });
  }

  render() {
    if (!this.state.ready) {
      return null;
    }
    return (
      <VictoryChart scale={{ x: "time" }}>
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" }
          }}
          data={this.state.data}
        />
      </VictoryChart>
    );
  }
}
export default LinearGraph;
