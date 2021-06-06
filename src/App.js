import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Navbar} from './components/Navbar/Navbar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer'
import {Banner} from './components/Banner/Banner'
import { CategoryId } from './components/Category/CategoryId/CategoryId';
import {Cart} from './components/Cart/Cart';
import {CartProvider} from './components/context/CartContext'
import { Footer } from './components/Footer/Footer';

function App() {
  

  return (
    <div className = "container-fluid justify-content-center m-0 p-0">
      <BrowserRouter>
      <CartProvider>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Banner/>         
            <ItemListContainer/>
          </Route>
          <Route path='/categoryid/:category'>         
            <CategoryId/>
          </Route>
          <Route path='/item/:id'>         
            <ItemDetailContainer/>
          </Route>
          <Route path='/cart'>         
            <Cart/>
          </Route>
        </Switch>
        <Footer/>
        </CartProvider>
      </BrowserRouter> 
    </div>
  );
}

export default App;

