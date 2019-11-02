import React from 'react';
import './Popup.scss';
import RadialGraphWorkSelfConfidence from "./components/RadialGraphWorkSelfConfidence";

export default class Popup extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {

        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{this.props.text}</h1>
                    <RadialGraphWorkSelfConfidence/>
                </div>
            </div>
        );
    
    }
  }
