import React, { useState } from 'react';
import './App.css';

import { Facts } from './Facts';



function App() {

  return (
    <div className="App">
      <h1>Literally Facts</h1>
      <blockquote>
        Literally Facts is "literally" a web app that show's you facts. One of those facts is that you should hire me😉, the other's are just random facts, being fetched from this url: https://uselessfacts.jsph.pl/random.json.
      </blockquote>
      <Facts />
    </div>
  );
}

export default App;
