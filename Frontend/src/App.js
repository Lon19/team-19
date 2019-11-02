
import React from 'react';
import { Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import './App.scss';
import MenuContainer from './components/MenuContainer';
import Login from './LoginScreen';
import RadialGraphMentalHealth from "./components/RadialGraphMentalHealth";
import RadialGraphWorkSelfConfidence from "./components/RadialGraphWorkSelfConfidence";
import LinearGraph from "./components/LinearGraph";



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
    this.PrivateRoute = this.PrivateRoute.bind(this);
  }

  render() {
    return (
      <div className='App'>
        <div>
          <p>Josh</p>
        </div>
        <Link to="/">Home</Link>{' '}
        <Link to={{ pathname: '/login' }}>Login</Link>{' '}
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={MenuContainer} />
        </Switch>
        <MenuContainer />
        {/*<RadialGraphMentalHealth/>*/}
        <RadialGraphWorkSelfConfidence/>
        <LinearGraph/>
      </div>
    );
  }
}

const PrivateRoute = ({ component, ...options }) => {
  const finalComponent = this.state.loggedIn ? component : Login;

  return <Route {...options} component={finalComponent} />;
}






