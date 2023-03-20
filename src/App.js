import { Fragment, useState } from 'react';
import Cart from './Components/Cart/Cart';
import Footer from './Components/layout/Footer';
import Header from './Components/layout/Header';
import MusicContent from './Components/layout/MusicContent';
import Navbar from './Components/layout/NavBar';


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
    <Fragment>
      {showCart && <Cart handleToggleCart={handleToggleCart}/>}
      <Navbar handleToggleCart={handleToggleCart}/>
      <Header/>
      <MusicContent/>
      <Footer/>
    </Fragment>
  );
}

export default App;