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
    <footer >
      <div className="footer-head">
        {footerSocial.map((item, index) => {
          return <Social {...item} key={index} />
        })}
        <div className="best-deal">
          <h4>GET LATEST DEALS</h4>
          <p>Our best promotions sent to your inbox.</p>
        </div>
        <form action="" onSubmit={handleSubmit} className="form-section">
          <input
            type="email"
            name="email"
            value={email}
            className='subscribe'
            onChange={handleChange}
          />
          <button type="submit" className="btn-submit">Subscribe</button>
      
        </form>
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
    <div className="circle">
    {logo}
    </div>
    <div className="social-connect">
    <p>{title}</p>
    <div className="nav-social">
    {label.map((item,index)=>{
      return(
        <li key={index} ><Link to={redirect} className="link-connect">{item}</Link></li>
        )
      })}
      </div>
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
          
         <li><Link to={links} className="link">{item}</Link></li>
        )
      })}
      </div>
      </Fragment>
      );
    };
    
    export default Footer;