import React from 'react';
import './App.scss';
import MenuContainer from './components/MenuContainer';
import RadialGraphMentalHealth from "./components/RadialGraphMentalHealth";
import RadialGraphWorkSelfConfidence from "./components/RadialGraphWorkSelfConfidence";



export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <MenuContainer />
        {/*<RadialGraphMentalHealth/>*/}
        <RadialGraphWorkSelfConfidence/>
      </div>
    );
  }
}



