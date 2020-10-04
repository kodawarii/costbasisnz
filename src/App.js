// Packages
//import './App.css';
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route} from 'react-router-dom';


// Redux
import store from './store';

// Components and Routes
import TestComponent from './components/testcomponent';
import Add from './routes/Add';
import Edit from './routes/Edit';
import Home from './routes/Home';
import Login from './routes/Login';
import Portfolio from './routes/Portfolio';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      a: "b"
    }
  }
  
  render(){
    return (
      <Provider store={store}>
        <HashRouter>
          
          <div className="App">
              
            <header className="App-header">
              app header
              <TestComponent />
              <Add />
            </header>
            <Switch>
              <Route exact path='/' component = {
                () => <Home />
              }/>

              <Route exact path='/portfolio' component = {
                () => <Portfolio />
              }/>
            </Switch>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
