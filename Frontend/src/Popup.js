import React from "react";
import "./Popup.scss";
import RadialGraphWorkSelfConfidence from "./components/RadialGraphWorkSelfConfidence";
import LinearGraph from "./components/LinearGraph";
import { Row, Container, Col } from "react-bootstrap";

export default class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: "learning"
    };
  }

  changeSelection = newSelection => {
    console.log(newSelection);
    this.setState({ selection: newSelection });
  };

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <Container>
            <Row>
              <Col>
                <RadialGraphWorkSelfConfidence
                  changeSelection={this.changeSelection}
                  style="position:float-left"
                />
              </Col>
              <Col>
                <LinearGraph
                  selection={this.state.selection}
                  style="position:float-right"
                />
              </Col>
            </Row>
          </Container>
          <button onClick={this.props.closePopup}>Hello, I am a button.</button>
        </div>
      </div>
    );
  }
}
