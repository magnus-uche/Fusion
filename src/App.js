import './App.css';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './pages/home/home.component';
import About from './pages/about/about.component';
import ProductInfo from './pages/productinfo/productinfo.component';
import Error from './pages/error/error.component';
import Cart from './pages/cart/cart.component';
import Adult from './pages/adult/adult.component';
import Kids from './pages/kids/kids.component';
import Phone from './pages/phone/phone.component';
import Electronics from './pages/electronics/electronics.component';
import Computer from './pages/computer/computer.component';
import { useGlobalContext } from './Context';
import SideBar from './components/SideBar';
import Loading from './components/Loading';
import User from './pages/user/user.component';



function App() {
  const {isLoading} = useGlobalContext();
  
  if(isLoading){
    return <div className='loader'>
    <Loading/>
    </div>
   
  };

  return (
    <Router>
    <SideBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Phones' element={<Phone/>}/>
      <Route path='adults' element={<Adult/>}/>
      <Route path='Computer' element={<Computer/>}/>
      <Route path='electronics' element={<Electronics/>}/>
      <Route path='Kids' element={<Kids/>}/>
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
