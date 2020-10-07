import React from 'react'; //want to import a react library from npm module
import './App.css';
import HelloWorld from './HelloWorld';

const App = () => {
  return (                      //reusable, modifiiable components!
  <div className="App">
    <HelloWorld name="Jim"/>    
    <HelloWorld name="Sally"/>
  </div>);

};

export default App;