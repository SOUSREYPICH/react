import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import Cart from './pages/Cart';
import Product from './pages/Product';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Service' element={<Service/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
          <Route path='/ThankYou' element={<ThankYou/>}/>
          <Route path='/product' element={<Product/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
