import React, { useEffect } from 'react';
import { MainApp } from "./MainApp";
import { BrowserRouter } from 'react-router-dom'

function App() {
  
  useEffect(() => {
    var random = Math.floor(Math.random() * (5 - 0) + 1);
    document.body.classList.add('fondo');
    switch(random){
      case 1:
          document.body.classList.add('fondo1');
          break;
      case 2:
          document.body.classList.add('fondo2');
          break;
      case 3:
          document.body.classList.add('fondo3');
          break;
      case 4:
          document.body.classList.add('fondo4');
          break;
      case 5:
          document.body.classList.add('fondo5');
          break;
      default:
          document.body.classList.add('fondo1');
          break;
    }
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
