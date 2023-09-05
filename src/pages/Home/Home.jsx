import './Home.scss'
import { Link } from "react-router-dom"

const Home = () => {
    return (
      <div className="home-container">
        <h1>Your Ultimate Jet Ski Adventure Awaits!</h1>
        <p>Feel the wind in your hair, the sun on your skin, and the thrill 
            of the open water as you explore your chosen destination from a whole new perspective. 
            Dive into the adventure and make your day on the water one to remember.
        </p>
        <Link to="vans">Find your van</Link>

      </div>
      );
}
 
export default Home;


