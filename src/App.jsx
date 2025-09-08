import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SkipLink from './components/SkipLink.jsx';
import Home from './routes/Home.jsx';
import Work from './routes/Work.jsx';
import Essays from './routes/Essays.jsx';
import Bookshelf from './routes/Bookshelf.jsx';
import About from './routes/About.jsx';

export default function App() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main" className="container py-8" role="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/essays" element={<Essays />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
