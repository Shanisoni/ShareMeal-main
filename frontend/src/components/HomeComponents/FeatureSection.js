import React from 'react';
import './FeatureSection.css'; // Import the CSS file

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="container1">
        <div className="header1">
          <div className="text-container1">
            <h1 className="title1">Get Started Now !</h1>
            <div className="underline1"></div>
          </div>
          <p className="description1">
          Quickly share or find food by listing your left out food, exploring available meals, and connecting with others. Join us to help reduce food waste and support your community!
          </p>
        </div>
        <div className="card-container1">
          <div className="card1">
            <img className="card-image1" src="/images/upload.jpg" alt="content" />
            
            <h2 className="card-title1">List Your Food</h2>
            <p className="card-description1">Upload details about the food you have available, including type, quantity, and pickup location. It’s simple and quick!</p>
          </div>
          <div className="card1">
            <img className="card-image1" src="/images/meal.jpg" alt="content" />
            
            <h2 className="card-title1"> Find Available Meals</h2>
            <p className="card-description1">Browse through the food listings to find what you need. Check out the details to easily select and request the meals</p>
          </div>
          <div className="card1">
            <img className="card-image1" src="/images/connect.jpg" alt="content" />
            
            <h2 className="card-title1">Connect and Arrange Pickup</h2>
            <p className="card-description1">Connect to the donors and arrange your pickup to collect food from them.</p>
          </div>
          <div className="card1">
            <img className="card-image1" src="/images/join.jpg" alt="content" />
            
            <h2 className="card-title1">Join as an Organization</h2>
            <p className="card-description1">Register your organization to collect surplus food and distribute it to those in need. Make a greater impact on your community.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
