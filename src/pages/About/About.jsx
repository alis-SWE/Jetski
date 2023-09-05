import './About.scss'
import about from "../../images/about-logo.jpg"
import { Link } from "react-router-dom"

const About = () => {
    return ( 
        <div className="about-page-container">
            <img src={about} alt='about-logo' className='about-hero-image'/>
            <div className="about-page-content">
                <h1>Enjoy your time to the fullest by renting our top-quality jet skis.</h1>
                <p>Whether you're a seasoned rider or a first-timer, our jet skis offer an exhilarating experience that will leave you with unforgettable memories.</p>
                <p>All our fleets are safe and secure with perfect balance, shape, and control.We guarantee a perfect day for you and your family on water. </p>
            </div>
            <div className="about-page-cta">
                <h2>Your adventure is waiting.<br />Your jet ski is ready.</h2>
                <Link className="link-button" to="/vans">Explore our Jet Ski</Link>
            </div>
    </div>
     );
}
 
export default About;