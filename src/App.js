import React from 'react';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          app header
        </header>
      </div>
    </Provider>
  );
}

export default App;
