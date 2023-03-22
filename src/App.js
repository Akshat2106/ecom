import { useState } from 'react';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import MusicContent from './Components/Layout/MusicContent';
import Navbar from './Components/Layout/NavBar';
import CartProvider from './Store/CartProvider';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import HeaderContent from './Components/Layout/Headercontent';
import Contact from './Components/Pages/Contact';
import { BrowserRouter, Route } from 'react-router-dom';



function App() {
  const [showCart, setShowCart] = useState(false);
  const handleToggleCart = () => {
    if (showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  }
  return (
    <BrowserRouter>
    <CartProvider>
      {showCart && <Cart handleToggleCart={handleToggleCart} />}
      <Navbar handleToggleCart={handleToggleCart} />
      <Route exact path='/'>
        <HeaderContent />
        <Home />
      </Route>
      <Route exact path='/about'>
        <Header />
        <About />
      </Route>
      <Route exact path='/store'>
        <Header />
        <MusicContent handleToggleCart={handleToggleCart} />
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>
      <Footer />
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;