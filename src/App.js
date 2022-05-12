import React from 'react'
import Banner from './components/banner'
import Sidebar from './components/sidebar'
import About from './components/about'
import Experiences from './components/experiences'
import Works from './components/works'
import Contact from './components/contact'


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Banner/>
      <About/>
      <Experiences/>
      <Works/>
      <Contact/>
      
    </div>
  );
}

export default App;
