import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import About from './pages/About/About'
import Home from './pages/Home/Home'
import "./server"
import Jetskis from "./pages/Jetskis/Jetskis";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#JetLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/jetskis">Jetskis</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jetskis" element={<Jetskis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
