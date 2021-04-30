import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Categories } from './components/Categories/Categories';
import {Navbar} from './components/Navbar/Navbar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer'

function App() {
  

  return (
    <div className = "container-fluid justify-content-center m-0 p-0">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/'>         
            <ItemListContainer/>
          </Route>
          <Route path='/category'>         
            <Categories/>
          </Route>
          <Route path='/item/:id'>         
            <ItemDetailContainer/>
          </Route>
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;

