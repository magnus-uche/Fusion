
import './App.css';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductInfo from './pages/ProductInfo';
import Error from './pages/Error';
import Cart from './pages/Cart';
import ForMen from './pages/ForMen';
import Women from './pages/Women';
import Electronics from './pages/Electronics';
import Jewelery from './pages/Jewelery';
import { useGlobalContext } from './Context';
import SideBar from './components/SideBar';
import Loading from './components/Loading';
import Categories from './components/Categories';
import User from './pages/User';


function App() {
  const {isLoading} = useGlobalContext();
  
  if(isLoading){
    return <div className='loader'>
    <Loading/>
    </div>
   
  };
  // <Categories/>

  // <Nav/>
  return (
    <Router>
    <SideBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='men' element={<ForMen/>}/>
      <Route path='come' element={<Women/>}/>
      <Route path='electronics' element={<Electronics/>}/>
      <Route path='jewelery' element={<Jewelery/>}/>
      <Route  path='about' element={<About/>}/>
      <Route  path='products/:id' element={<ProductInfo/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='user' element={<User/>}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  );
};

export default App;
