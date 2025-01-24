import { BrowserRouter,  Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ParfumeProducts from "./components/ParfumeProduct/ParfumeProducts";
import Cart from "./components/Cart/Cart";
import PrivacyPolicy from "./components/Privacy-Policy/Privacy-Policy";

function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />  
      <Route path="/parfumeproducts" element={<ParfumeProducts/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/privacy" element={<PrivacyPolicy/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
