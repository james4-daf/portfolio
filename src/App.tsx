import React from 'react';
import './App.css';
import Introduction from './components/Introduction';
import GithubProjects from './components/GithubProjects';

function App() {
  return (
    <div className="App">
      <Introduction />
      <GithubProjects />
    </div>
  );
}

export default App;
