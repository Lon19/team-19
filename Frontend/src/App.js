
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
  }

  logIn(){
    this.setState({
      loggedIn: true,
    });
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
          <Route path="/login" component={Login} login={this.logIn} />
          <PrivateRoute path="/" component={MenuContainer} state={this.state.loggedIn} />
        </Switch>
        <MenuContainer />
        {/*<RadialGraphMentalHealth/>*/}
        <RadialGraphWorkSelfConfidence/>
        <LinearGraph/>
      </div>
    );
  }
}

const PrivateRoute = ({ component, ...options, state }) => {
  const finalComponent = state ? component : Login;

  return <Route {...options} component={finalComponent} />;
}






