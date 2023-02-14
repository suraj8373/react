
import './App.css';
import Home from './Home';
import {  Route, Routes,  } from 'react-router-dom';
import Product from './Product';
import Navbar from './Navbar'
import Cat from './Cat';
import 'react-loading-skeleton/dist/skeleton.css'
import Footer from './Footer';


function App() {
  return (
 <>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='product/:id' element={<Product/>}/>
        <Route path='cat/:cid' element={<Cat/>}/>
      </Routes>
      <Footer/>
 </>


  );
}

export default App;
