import Home from './components/Home';
import Header from './components/Header';
import './components/header.css';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
