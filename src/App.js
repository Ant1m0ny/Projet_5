import {
  Routes,
  Route
} from 'react-router-dom';

import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './pages/Home';
import About from './pages/About/About';
import AnnonceDetails from './pages/AnnonceDetails/AnnonceDetails';
import NotFound from './pages/notFound/NotFound';

function App() {
  return ( <
    div className = "App" >
    <
    Header / >
    <
    main >
    <
    Routes >
    <
    Route path = "/"
    element = {
      < Home / >
    }
    /> <
    Route path = "/about"
    element = {
      < About / >
    }
    /> <
    Route path = "/annonce/:id"
    element = {
      < AnnonceDetails / >
    }
    /> <
    Route path = "*"
    element = {
      < NotFound / >
    }
    /> <
    /Routes> <
    /main> <
    Footer / >
    <
    /div>
  );
}

export default App;