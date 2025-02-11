import React from "react";
import { Link } from 'react-router-dom';
import "./HeroSection.css";
import backgroundImage from "../../images/bg.jpg"

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }} >
      <div className="container">
        <div className="text-content">
          <h1 className="title">
          Share Meal
           <br/>
           
          </h1>
          <span className="titl" >Connecting Hearts Through Meals</span>
          <p className="description">
          Join ShareMeal to connect surplus food with those in need. <br/>
          Individuals and organizations alike can easily share and collect meals, <br/>
          helping to reduce food waste and support the community. 
          </p>
          <div className="">
            <Link to="/admin/addFood">
            <button className="btn primary-btn">Donate</button>
            </Link>
            <Link to = "/homepage">
            <button className="btn secondary-btn">Collect</button>
            </Link>
          </div>
        </div>
        <div className="image-container">
          <img
            className="hero-image"
            alt="hero"
            src="/images/heroImage.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
