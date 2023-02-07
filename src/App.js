
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


function App() {
 const {isLoading} = useGlobalContext()

  if(isLoading){
    return <div className='loader' >
    <h2>loading..</h2> 
    <p>please wait...</p>
    </div>
  }
  return (
    <Router>
    <Nav/>
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='men' element={<ForMen/>}/>
      
      <Route  path='about' element={<About/>}/>
      <Route  path='products/:id' element={<ProductInfo/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
