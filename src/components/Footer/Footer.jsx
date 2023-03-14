import React,{useState} from "react";
import {footerSocial, other} from "../../data";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import './Footer.css'

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {};

  const handleChange = () => {};

  return (
    <footer>
      <div className="footer-head">
        {footerSocial.map((item, index) => {
          return <Social {...item} key={index} />
        })}
        <div>
          <h4>GET LATEST DEALS</h4>
          <p>Our best promotions sent to your inbox.</p>
        </div>
        <form action="" onSubmit={handleSubmit} className="form-section">
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <input type="submit" className="btn-submit" />
        </form>
      </div>
      <section className="">
        {other.map((item, index) => {
          return <Others {...item} key={index} />;
        })}
      </section>
      <p>created by Magnus $copy 2023</p>
    </footer>
  );
};


const Social = ({ title, redirect, label, Logo }) => {

  return (
    <div className="social">
    <div className="circle">
    </div>
    <div className="social-connect">
    <h1>{title}</h1>
    <Link to={redirect}>{label}</Link>
    </div>
    </div>
    );
  }; 
  
  
  
  const Others = ({ list, title, links }) => {
    return (
      <Fragment>
      <h5>{title}</h5>
      <ul>
      <li>
      <Link to={links}>{list}</Link>
      </li>
      </ul>
      </Fragment>
      );
    };
    
    export default Footer;