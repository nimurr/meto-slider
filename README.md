# Meto Slider 🚀

**Meto Slider** is a lightweight, easy-to-use slider/carousel component for React applications.  
Easily add beautiful sliding components to your project with minimal setup.

---

## 📦 Installation

Install using npm:

```bash
npm install meto-slider


👨‍🏫 Using Guide

// App.jsx or any component
import React from 'react';
import MetoSlider from 'meto-slider';
const App = () => {
  const slides = [
    <div style={{ backgroundColor: '#FF6F61', height: '300px' }}>Slide 1</div>,
    <div style={{ backgroundColor: '#6B5B95', height: '300px' }}>Slide 2</div>,
    <div style={{ backgroundColor: '#88B04B', height: '300px' }}>Slide 3</div>
  ];

  return (
    <div>
      <h2>Simple React Slider</h2>
      <MetoSlider slides={slides} />
    </div>
  );
};
export default App;



🧑‍💻 Author
Nimur Rahman Nerob
📧 Email: nimurnerob404@gmail.com
