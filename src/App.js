import React from 'react';
import { Route, Link } from 'react-router-dom';
import ShopPage from './pages/shoppage.component';
import './App.css';


function App() {
  return (
    <div>
      <Route path='/shop' component={ShopPage} />
    </div>
  )
}



export default App;
