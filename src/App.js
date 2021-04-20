import React from 'react';
import { Categories } from './components/Categories/Categories';
import {Navbar} from './components/Navbar/Navbar'
import {Saludo} from './components/saludo'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'

function App() {
  

  return (
    <div className = "container-fluid justify-content-center m-0 p-0">
      <Navbar/>
      <Categories/>
      <ItemListContainer/>
    </div>
  );
}

export default App;

