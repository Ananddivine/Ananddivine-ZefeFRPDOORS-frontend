import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Products from './Pages/Products';
import Progress from './Pages/Progress';
import Location from './Pages/Location';
import Doors from './Components/Doors/Doors';
import Windows from './Components/Windows/Windows';
import FloatingWhatsAppButton from './Components/FloatingWhatsAppButton/FloatingWhatsApp';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/location' element={<Location />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Shop' element={<ShopCategory category="shop"/>}/>
          <Route path='/Pvc' element={<ShopCategory category="pvc"/>}/>
          <Route path='/Upvc' element={<ShopCategory category="upvc"/>}/>
          <Route path='/doors' element={<Doors />} />
          <Route path='/windows' element={<Windows />} />
          <Route path='/product' element={<Product/>}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/loginsignup' element={<LoginSignup />} />
          <Route path='/progress' element={<Progress />}/>
        </Routes>
        <FloatingWhatsAppButton />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
