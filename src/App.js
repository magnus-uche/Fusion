
import './App.css';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductInfo from './pages/ProductInfo';
import Nav from './components/Nav';
import Error from './pages/Error';
import Cart from './pages/Cart';
import ForMen from './pages/ForMen';
import Women from './pages/Women';
import Electronics from './pages/Electronics';
import Jewelery from './pages/Jewelery';
import { useGlobalContext } from './Context';
import Loading from './components/Loading';

function App() {
 const {isLoading} = useGlobalContext()

  if(isLoading){
    return <div className='loader'>
    <Loading/>
    </div>
   
  }

  return (
    <Router>
    <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='men' element={<ForMen/>}/>
      <Route path='come' element={<Women/>}/>
      <Route path='electronics' element={<Electronics/>}/>
      <Route path='jewelery' element={<Jewelery/>}/>
      <Route  path='about' element={<About/>}/>
      <Route  path='products/:id' element={<ProductInfo/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
