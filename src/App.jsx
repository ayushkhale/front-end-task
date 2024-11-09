import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Subscribe from './pages/Subscribe';
import Header from './components/Header';
import Footer from './components/Footer';
import Blogpost from './components/Blog/Blogpost';
import Business from './components/Blog/Business/Business';
import BlogUser from './pages/BlogUser';
import Privacy from './components/Privacypolicy/Privacy';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="blog/about" element={<About />} />
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="blog/Contact" element={<Contact/>} />
      <Route path="blog/blogpost" element={<Blogpost/>} />
      <Route path="/business" element={<Business/>} />
      <Route path="blog/business" element={<Business/>} />
      <Route path="blog/bloguser" element={<BlogUser/>} />
      <Route path="privacy" element={<Privacy/>} />
      <Route path="blog/privacy" element={<Privacy/>} />
      <Route path="/subscribe" element={<Subscribe/>} />
    </Routes>
    <Footer />
  </Router>
);

export default App;

