import './App.css';
import IndexView from './views/indexView';
import AboutView from './views/aboutView';
import ProjectView from './views/projectView';
import ContactView from './views/contactView';
import LoadingView from './views/loadingView';
import { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import { loadFull } from "tsparticles";

function App() {
  const[isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  return (
    <>
    {isLoading === false ? (
      
    <div className='appContainer' id='app'>

      <section className='first' id='/'>
        <IndexView id=''/>
      </section>

      <section className='second' id='about'>

          <AboutView />

      </section>
      <section className='third' id='projects'>
        <ProjectView />
      </section>
      <section className='fourth' id='contact'>
        <ContactView />
      </section>
    </div>) : (
      <LoadingView />
    )}
    </>
  );
}

export default App;
