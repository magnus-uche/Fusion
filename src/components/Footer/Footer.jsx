import React,{useState} from "react";
import {footerSocial, other} from "../../data";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import './Footer.css';
import {FaPhone, FaWhatsapp} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {};

  const handleChange = () => {};

  return (
    <footer  >
      <div className="footer-head">
        
        <div className="social-container">
        {footerSocial.map((item, index) => {
          return <Social {...item} key={index} />
        })}
        </div>
        <div className="best-deal">
           <div className="best-deal-desc">
           <h4>GET LATEST DEALS</h4>
           <p>Our best promotions sent to your inbox.</p>
           </div>
           <form action="" onSubmit={handleSubmit} className="form-section">
          <input
          type="email"
          name="email"
          value={email}
          placeholder="email"
          className='subscribe'
          onChange={handleChange}
          />
          <button type="submit" className="btn-submit">Subscribe</button>
          </form>
          </div>
      </div>
      <section className="footer-other">
        {other.map((item, index) => {
          return <Others {...item} key={index} />;
        })}
      </section>
      <p>created by Magnus &copy 2023</p>
    </footer>
  );
};

const Social = ({ title, redirect, label, logo }) => {

  return (
    <div className="social">
    <div className="nav-social">
    <span style={{paddingRight: 10}}>{logo}</span><p>{title}</p>
    {label.map((item,index)=>{
      return(
        <li key={index} ><Link to={redirect} className="link-connect">{item}</Link></li>
        )
      })}
      </div>
    </div>
    );
  }; 
  
const Others = ({ list, title, links }) => {
    return (
      <Fragment >
      <div className='others'>
      <h5>{title}</h5>
      {list.map((item, index)=>{
        return (
         <li key={index}><Link to={links} className="link">{item}</Link></li>
        )
      })}
      </div>
      </Fragment>
      );
    };
    
    export default Footer;