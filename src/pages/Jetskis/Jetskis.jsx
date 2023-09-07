import { useEffect, useState } from "react";
import "./Jetskis.scss"

const Jetskis = () => {

    const [jetskis,setJetskis] = useState([])

    useEffect(()=>{
        fetch("/api/jetskis")
        .then(res=>res.json())
        .then(data=>setJetskis(data.jetskis))

    },[])

    const jetskisElements = jetskis.map(jetski=>(
        <div key={jetski.id} className="jetski-tile">
            <img src={jetski.imageUrl} />
            <div className="jetski-info">
                <h3>{jetski.name}</h3>
                <p>${jetski.price}<span>/day</span></p>
            </div>
            <i className={`jetski-type ${jetski.type} selected`}>{jetski.type}</i>
        </div>

    ))
    return (
        <div className="jetski-list-container">
            <h1>Explore our Jetski Options</h1>
            <div className="jetski-list">
                {jetskisElements}
            </div>
        </div>
      );
}
 
export default Jetskis;