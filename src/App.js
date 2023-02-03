import logo from './logo.svg';
import './App.css';
import { Router,Routes,Route  } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductInfo from './pages/ProductInfo';
import Nav from './components/Nav';
import Error from './pages/error';

function App() {
  if(loading){
    return <div>
    <h2>loading..</h2>
    <p>please wait...</p>
    </div>
  }
  return (
    <Router>
    <Nav/>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route  path='about' element={<About/>}/>
      <Route  path='product/:id' element={<ProductInfo/>}/>
      <Route path='cart/:id' element={<Cart/>}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
