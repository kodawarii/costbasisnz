// Packages
import './App.css';
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route, Redirect} from 'react-router-dom';

// Redux
import store from './store';

// Components and Routes
import AddBroker from './routes/AddBroker';
import SelectAddType from './routes/SelectAddType';
import Edit from './routes/Edit';
import Home from './routes/Home';
import Login from './routes/Login';
import Logout from './routes/Logout';
import Portfolio from './routes/Portfolio';
import Settings from './routes/Settings';
import About from './routes/About';
import Register from './routes/Register';

import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends Component{
  constructor(props){
    super(props);
      this.state ={
        isMenuHidden: true,
        screen: "home",
        brokers: []
      }

    this.updateScreenName = this.updateScreenName.bind(this);
    this.setBrokers = this.setBrokers.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = () => {
    this.setState({isMenuHidden: !this.state.isMenuHidden});
  }

  setBrokers = (brokers) => {
    this.setState({brokers});
  }

  updateScreenName(screen){
    if(this.state.screen !== screen) this.setState({screen});
  }
  
  render(){
    return (
      <Provider store={store}>
        <HashRouter>
            <div className="App">
              
              <Nav 
              screen={this.state.screen}
              isMenuHidden={this.state.isMenuHidden}
              toggleMenu={this.toggleMenu}
              />

              <Switch>
                <Route exact path='/' component = {
                  () => <Home 
                  updateScreenName={this.updateScreenName}
                  brokers={this.state.brokers}
                  setBrokers={this.setBrokers}
                  />
                }/>

                <Route exact path='/Portfolio' component = {
                  () => <Portfolio 
                  updateScreenName={this.updateScreenName}
                  />
                }/>

                <Route exact path='/AddBroker' component = {
                  () => <AddBroker 
                  updateScreenName={this.updateScreenName}
                  />
                }/>

                <Route exact path='/SelectAddType' component = {
                  () => <SelectAddType 
                  updateScreenName={this.updateScreenName}
                  />
                }/>

                <Route exact path='/Login' component = {
                  () => <Login 
                  updateScreenName={this.updateScreenName}
                  />
                }/>

                <Route exact path='/Logout' component = {
                  () => <Logout 
                  updateScreenName={this.updateScreenName}
                  />
                }/>

                <Route exact path='/Edit' component = {
                  () => <Edit 
                  updateScreenName={this.updateScreenName}
                  />
                }/>

                <Route exact path='/Settings' component = {
                  () => <Settings 
                  updateScreenName={this.updateScreenName}
                  />
                }/>

                <Route exact path='/About' component = {
                  () => <About 
                  updateScreenName={this.updateScreenName}
                  />
                }/>

                <Route exact path='/Register' component = {
                  () => <Register 
                  updateScreenName={this.updateScreenName}
                  />
                }/>

                <Redirect from="*" to="/" />
              </Switch>

              <Footer />

            </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
