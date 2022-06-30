import './App.css';
import IndexView from './views/indexView';
import AboutView from './views/aboutView';
import ProjectView from './views/projectView';
import ContactView from './views/contactView';

function App() {
  return (
    <div className='appContainer'>
      <section className='first'>
        <IndexView />
      </section>
      <section className='second'>
        <AboutView />
      </section>
      <section className='third'>
        <ProjectView />
      </section>
      <section className='fourth'>
        <ContactView />
      </section>
    </div>
  );
}

export default App;
