// Packages
import './App.css';
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route, Redirect} from 'react-router-dom';


// Redux
import store from './store';

// Components and Routes
import AddBroker from './routes/AddBroker';
import Edit from './routes/Edit';
import Home from './routes/Home';
import Login from './routes/Login';
import Portfolio from './routes/Portfolio';
import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      screen: "home"
    }
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
              screen={this.state.screen}/>

              <Switch>
                <Route exact path='/' component = {
                  () => <Home 
                  updateScreenName={this.updateScreenName.bind(this)}
                  />
                }/>

                <Route exact path='/Portfolio' component = {
                  () => <Portfolio 
                  updateScreenName={this.updateScreenName.bind(this)}
                  />
                }/>

                <Route exact path='/AddBroker' component = {
                  () => <AddBroker 
                  updateScreenName={this.updateScreenName.bind(this)}
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
