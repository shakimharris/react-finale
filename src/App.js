import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shoppage.component';
import Header from './components/header/header.component';
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}



export default App;
