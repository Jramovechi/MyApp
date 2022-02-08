import React from 'react';
import './styles.css';


import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList';


function App() {
  return (
    <>
      <NavBar/>
      
      <ItemListContainer
        geeting='Nuestro Catalogo' 
      />

      <ItemList />

      <ItemCount
        stock= {10}
        initial= {1}
      />
    </>
  );
}

export default App;
