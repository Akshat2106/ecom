import { useState } from 'react';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import MusicContent from './Components/Layout/MusicContent';
import Navbar from './Components/Layout/NavBar';

import CartProvider from './Store/CartProvider';


function App() {
  const [showCart,setShowCart]=useState(false);
  const handleToggleCart=()=>{
    if(showCart){
      setShowCart(false);
    }else{
      setShowCart(true);
    }
  }
  return (
    <CartProvider>
      {showCart && <Cart handleToggleCart={handleToggleCart}/>}
      <Navbar handleToggleCart={handleToggleCart}/>
      <Header/>
      <MusicContent handleToggleCart={handleToggleCart}/>
      <Footer/>
    </CartProvider>
  );
}

export default App;