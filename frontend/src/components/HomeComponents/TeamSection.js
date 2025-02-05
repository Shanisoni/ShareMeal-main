import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container2">
        <div className="text-center2 mb-20">
          <h1 className="title2">Meet Our Team</h1>
          <p className="description2">Our team drives ShareMeal to fight food waste and nourish communities! 🚀</p>
        </div>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-info">
              <img alt="team" className="member-img" src="/images/abhi.jpg" />
              <div className="member-details">
                <h2 className="member-name">Abhishek Tripathi</h2>
                <p className="member-role">Web Designer</p>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-info">
              <img alt="team" className="member-img" src="/images/shani.jpg" />
              <div className="member-details">
                <h2 className="member-name">Shani Soni</h2>
                <p className="member-role">Web Developer</p>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="member-info">
              <img alt="team" className="member-img" src="/images/mohile.jpg" />
              <div className="member-details">
                <h2 className="member-name">Abhishek Mohile</h2>
                <p className="member-role">Content Manager</p>
              </div>
            </div>
          </div>
          {/* <div className="team-member">
            <div className="member-info">
              <img alt="team" className="member-img" src="/images/manish.jpg" />
              <div className="member-details">
                <h2 className="member-name">Manish Chauhan</h2>
                <p className="member-role">Content Manager</p>
              </div>
            </div>
          </div> */}
          {/* <div className="team-member">
            <div className="member-info">
              <img alt="team" className="member-img" src="/images/prashant.jpg" />
              <div className="member-details">
                <h2 className="member-name">Prashant Pathak</h2>
                <p className="member-role">Content Manager</p>
              </div>
            </div>
          </div> */}
          
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
