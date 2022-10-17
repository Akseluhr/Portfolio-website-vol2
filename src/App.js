import "./App.css";
import IndexScreen from "./screens/home";
import AboutScreen from "./screens/about";
import ProjectScreen from "./screens/projects";
import ContactScreen from "./screens/contact";

function App() {
  return (
    <div className="appContainer" id="app">
      <section className="first" id="/">
        <IndexScreen id="" />
      </section>

      <section className="second" id="about">
        <AboutScreen />
      </section>
      <section className="third" id="projects">
        <ProjectScreen />
      </section>
      <section className="fourth" id="contact">
        <ContactScreen />
      </section>
    </div>
  );
}

export default App;
