
import Footer from "../components/Footer"
import Header from "../components/Header"
import MenProducts from "./MenProducts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WomenProducts from "./WomenProducts";
import Home from "./Home"
import Bag from "./Bag"
import Wishlist from "./Wishlist";
import Profile from "./Profile";

function App() {

  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/men" element={<MenProducts/>} />
        <Route path="/women" element={<WomenProducts/>} />
        <Route path="/bag" element={<Bag/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
