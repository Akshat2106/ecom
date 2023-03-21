import { useState } from 'react';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import MusicContent from './Components/Layout/MusicContent';
import Navbar from './Components/Layout/NavBar';
import CartProvider from './Store/CartProvider';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
 
import About from './Components/Pages/About';

function App() {
  const [showCart,setShowCart]=useState(false);
  const handleToggleCart=()=>{
    if(showCart){
      setShowCart(false);
    }else{
      setShowCart(true);
    }
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<>
        <Navbar handleToggleCart={handleToggleCart} />
        <Header/>
        <MusicContent handleToggleCart={handleToggleCart} />
        <Footer />
      </>),
    },
    {
      path: "/about",
      element: <><Navbar handleToggleCart={handleToggleCart} /> <Header/><About/><Footer /></>,
    },
  ]);
  return (
    <CartProvider>
      {showCart && <Cart handleToggleCart={handleToggleCart} />}
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
