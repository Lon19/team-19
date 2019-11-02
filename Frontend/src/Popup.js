import React from 'react';
import './Popup.scss';

export default class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>Hello, I am a button.</button>
                </div>
            </div>
        );
    }
}