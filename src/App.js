import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
