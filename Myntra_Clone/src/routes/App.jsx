
import Footer from "../components/Footer"
import Header from "../components/Header"
import MenProducts from "./MenProducts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WomenProducts from "./WomenProducts";
import Home from "./Home"

function App() {

  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/men" element={<MenProducts/>} />
        <Route path="/women" element={<WomenProducts/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
