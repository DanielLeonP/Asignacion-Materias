import React from 'react';
import { MainApp } from "./MainApp";
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
