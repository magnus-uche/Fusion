import react from "react";
import { Link } from "react-router-dom";
// import './heroitem.styles.css'
// import './heroitem/heroitem.css';
import './hero.css'

const HeroItems = () =>{

  
    return (
      <div>
      <Link to='#'>
      <div className="container">
    <img src="https://www.istockphoto.com/photo/three-mannequins-dressed-in-kids-wear-gm1310788780-400079885" alt="iamge" />
    <div className="items-description">
    <h3>For Kids</h3>
    <p>Get up To 1s0% Off</p>
    <Link to='#'>
    SHOP NOW 
    </Link>
    </div>
    </div>
      </Link>
      </div>
    )
  };
  
  export default  HeroItems;