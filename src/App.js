// Packages
import './App.css';
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route, Redirect} from 'react-router-dom';

// Redux
import store from './store';

// Components and Routes
import AddBroker from './routes/AddBroker';
import AddTopup from './routes/AddTopup';
import AddWithdraw from './routes/AddWithdraw';
import AddBuy from './routes/AddBuy';
import AddSell from './routes/AddSell';
import AddFX from './routes/AddFX';
import AddFee from './routes/AddFee';
import AddDividend from './routes/AddDividend';
import SelectAddType from './routes/SelectAddType';
import SelectAddTypeTopupWithdrawFX from './routes/SelectAddTypeTopupWithdrawFX';
import SelectAddTypeBuySell from './routes/SelectAddTypeBuySell';
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
        isMenuHidden: true, // TODO Move this into redux store
        screen: "home", // TODO Move this into redux store also and connect each child Component to store
      }

    this.updateScreenName = this.updateScreenName.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = () => {
    this.setState({isMenuHidden: !this.state.isMenuHidden});
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

                <Route exact path='/AddTopup' component = {
                  () => <AddTopup 
                  updateScreenName={this.updateScreenName}
                  />
                }/>

                <Route exact path='/AddWithdraw' component = {
                  () => <AddWithdraw
                  updateScreenName={this.updateScreenName}
                  />
                }/>

                <Route exact path='/AddFX' component = {
                  () => <AddFX
                  updateScreenName={this.updateScreenName}
                  />
                }/>

                <Route exact path='/AddBuy' component = {
                  () => <AddBuy
                  updateScreenName={this.updateScreenName}
                  />
                }/>

                <Route exact path='/AddSell' component = {
                  () => <AddSell
                  updateScreenName={this.updateScreenName}
                  />
                }/>

                <Route exact path='/SelectAddType' component = {
                  () => <SelectAddType 
                  updateScreenName={this.updateScreenName}
                  />
                }/>
                
                <Route exact path='/SelectAddTypeTopupWithdrawFX' component = {
                  () => <SelectAddTypeTopupWithdrawFX 
                  updateScreenName={this.updateScreenName}
                  />
                }/>

                <Route exact path='/SelectAddTypeBuySell' component = {
                  () => <SelectAddTypeBuySell 
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
