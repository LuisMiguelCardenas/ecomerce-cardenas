import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Category } from './components/Category/Category';
import {Navbar} from './components/Navbar/Navbar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer'
import {Banner} from './components/Banner/Banner'
import { CategoryId } from './components/Category/CategoryId/CategoryId';

function App() {
  

  return (
    <div className = "container-fluid justify-content-center m-0 p-0">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Banner/>         
            <ItemListContainer/>
          </Route>
          <Route path='/category'>         
            <Category/>
          </Route>
          <Route path='/categoryid/:category'>         
            <CategoryId/>
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

