import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-me" element={<Contact />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
