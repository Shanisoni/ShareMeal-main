import React from "react";
import { Link } from 'react-router-dom';
import "./HeroSection.css";
import backgroundImage from "../../images/bg.jpg"

const HeroSection = () => {
  return (
    <section className="hero-section"style={{ backgroundImage: `url(${backgroundImage})` }} >
      <div className="container">
        <div className="text-content">
          <h1 className="title">
          Share and Support
           <br/>
           <span>Connecting Hearts Through Meals</span>
          </h1>
          <p className="description">
          Join ShareMeal to connect surplus food with those in need. Individuals and organizations alike can easily share and collect meals, helping to reduce food waste and support the community. Start making a difference today!
          </p>
          <div className="button-group">
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
