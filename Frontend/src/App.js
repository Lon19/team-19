import React from 'react';
import './App.scss';
import MenuContainer from './components/MenuContainer';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='App'>
                <MenuContainer />
            </div>
        );
    }
}