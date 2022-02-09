import React from 'react';
import './styles.css';


import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar/>

      <ItemDetailContainer />
      
      <ItemListContainer
        geeting='Nuestro Catalogo' 
      />

    </>
  );
}

export default App;
