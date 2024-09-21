import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Services from './components/services/services';
import AboutUs from './components/about-us/about-us';
import ContactUs from './components/contact-us/contact-us';
import Footer from './components/footer/footer';
import ScrollToTop from './components/scroll-to-top';

function App() {
  return (
    <Router>
      <ScrollToTop />  
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
