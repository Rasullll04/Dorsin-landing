
import './App.css';
import About from './components/About';
import Card from './conatiner/CardDiv';
import Hero from './components/Hero';
import ScreenDiv from './components/Screen';
import InfoContainer from './conatiner/Info';
import Team from './conatiner/Team';
import Footer from './conatiner/Footer';

function App() {
  return (
    <div>
      <Hero/>
      <ScreenDiv/>
      <About/>
      <Card/>
      <InfoContainer/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
