import React from 'react';
import logo from './logo.svg';
import Editor from "rich-markdown-editor";

import './App.css';

function App() {
  return (
    <div className="App">
      <Editor 
        defaultValue="Hello World" />
    </div>
  );
}

export default App;
