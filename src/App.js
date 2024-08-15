import './App.css';
import Headere from './components/header/Header';
import Footer from './components/footer/Footer';
import {Cards} from './components/cards/cards';

function App() {
  return (
    <div className="App">
      <Headere />
      <Cards title="titre test"/>
      <Cards title="titre test 2"/>
      <Footer />
    </div>
  );
}

export default App;
