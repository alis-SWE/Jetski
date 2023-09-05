import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import About from './pages/About/About'
import Home from './pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#JetLife</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
