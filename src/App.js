import logo from './logo.svg';
import './App.css';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Services from './components/services/Services'
import Testimonial from './components/testimonials/Testimonial'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
function App() {
  return (
    <>
      <Header />
      < Nav />
      <About/>
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;
