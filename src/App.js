import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Plans from './routes/Plans';
import About from './routes/About';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
