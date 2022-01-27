import React from 'react';
import './styles.css';


import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
      <NavBar/>
      
      <ItemListContainer
        geeting='Nuestro Catalogo' 
      />

    </>
  );
}

export default App;
