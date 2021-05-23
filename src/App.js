import React from 'react';
import "./App.css";

import Hero from "./Hero";
import Service from "./Service";
import Contact from "./Contact";
import Projects from './Projects';
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="App">
      <Hero />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
