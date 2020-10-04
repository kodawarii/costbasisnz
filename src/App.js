import React, {Component} from 'react';
import { Provider } from 'react-redux';

import store from './store';

import TestComponent from './components/testcomponent';

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
        <div className="App">
          <header className="App-header">
            app header
            <TestComponent />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
