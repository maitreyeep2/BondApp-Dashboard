import React from 'react';
import './App.css';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Dashboard</h1>
      </header>
      <Dashboard />
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} DBboard</p>
      </footer>
    </div>
  );
}

export default App;
