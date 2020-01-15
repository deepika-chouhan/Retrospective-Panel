import React from 'react';
import Section from './Section'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Retrospective</h1>
      <Section  heading={"What went well"} id={0}/>
      <Section  heading={"What can be improved"} id={1}/>
      <Section  heading={"Start doing"} id={2}/>
      <Section  heading={"Action items"} id={3}/>
      
    </div>
  );
}

export default App;
