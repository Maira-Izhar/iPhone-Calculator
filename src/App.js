import React from 'react';
import './App.css';
import Calculator from "./components/Calculator" // Ensure the path and case are correct

function App() {
  return (
    <div className="App">
      <div className="content">
        <Calculator /> {/* Use the component with correct casing */}
      </div>
    </div>
  );
}

export default App;
