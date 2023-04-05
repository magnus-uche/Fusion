import react from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { heroImage } from "../../data";
import './heroitem.css'

const HeroItems = () => {
  return (
    <div className="hero-container">
      {heroImage.map((item) => {
        const { image, title, category } = item
        return (
          <Fragment key={item.id}>
          <div>
          <Link to='#'>
          <img src={image} alt={category} />
            </Link>
            <div className="items-description">
            <p>Get up To 10% Off</p>
            <Link to='#'>
            SHOP NOW
            </Link>
            </div>
            </div>
          </Fragment>
        )
      })}
    </div>
  )
};

export default HeroItems;