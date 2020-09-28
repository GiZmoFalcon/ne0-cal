import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import GlobalContext from './contexts/GlobalContext';


function App(props) {

  const GlobalState = { prop: 0 };

  return (
    <GlobalContext.Provider value={GlobalState}>
        <div className="App">
          <header className="App-header">
            <Calculator/>
          </header>
        </div>
    </GlobalContext.Provider>
  );
}

export default App;
