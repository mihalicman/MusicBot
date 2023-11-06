import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbrar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Card from './components/Card'
import Goals from './components/Goals'
import About from './components/About'
import Registration from './components/Registration'
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='separator'></div>
      <About />
      <div className='separator'></div>
      <Goals />
      <div className='separator'></div>
      <Card />
      <div className='separator'></div>
      <Footer />
    </div>
  );
}

export default App
