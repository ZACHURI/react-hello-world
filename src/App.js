import React from 'react'; //want to import a react library from npm module
import './App.css';
import HelloWorld from './HelloWorld';
import HelloWorldList from './HelloWorldList';

const App = () => {
  return (                      //reusable, modifiiable components!
  <div className="App">
    <HelloWorldList />
  </div>);

};

export default App;