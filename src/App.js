import { Fragment } from 'react';
import Footer from './Components/Products/Footer';
import Header from './Components/Products/Header';
import MusicContent from './Components/Products/MusicContent';
import Navbar from './Components/Products/NavBar';


function App() {
  return (
    <Fragment>
      <Navbar/>
      <Header/>
      <MusicContent/>
      <Footer/>
    </Fragment>
  );
}

export default App;