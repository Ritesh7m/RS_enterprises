import React from "react";
import "./Services.css";
import heroImg from "../Assets/primxAqua.jpg";
import serviceImg from "../Assets/service-image.jpg";
import cardImg1 from "../Assets/service1.jpg"; // Replace with your actual image paths
import cardImg2 from "../Assets/service2.jpg";
import cardImg3 from "../Assets/service3.jpg";
import cardImg4 from "../Assets/service4.jpg";
import cardImg5 from "../Assets/service5.jpg";
import cardImg6 from "../Assets/service6.jpg";
import visitingCardImg from "../Assets/visiting-card.jpg";

const Services = () => {
  return (
    <div className="services">
      <div className="hero">
        <div className="hero-left">
          <img src={heroImg} alt="Hero" />
        </div>
        <div className="hero-center">
          <h1>Our Services</h1>
        </div>
        <div className="hero-right">
          <ul>
            <li>Industrial Services</li>
            <li>Domestic - RO + UV + UF + TDS Adjuster + Mineral + Alkaline</li>
            <li>Timely Services Response</li>
            <li>Visit charges 10 km charge ₹350 ,
            10 To 40 KM ₹550</li>
          </ul>
        </div>
      </div>

      <div className="services-content">
        <div className="services-left">
          <h1>Our Services</h1>
          <ul>
            <li>Industrial Services</li>
            <li> Domestic - Ro + UV+UF + TDS Adjuster+Mineral+ Alkaline</li>
            <li>AMC - All Filter Changes</li>
            <li>1 Year Warranty Only Filter</li>
            <li>3 Service Free(Visit Charges Required)*</li>
            <li>Repair and Spare Parts</li>
            <li>Water Testing and Analysis</li>
          </ul>

          <h2>Some Services that we do</h2>
          <div className="cards-section">
            <div className="card">
              <img src={cardImg1} alt="Card 1" />
              <div className="card-content">
                <h3>Domistic RO</h3>
              </div>
            </div>
            <div className="card">
              <img src={cardImg2} alt="Card 2" />
              <div className="card-content">
                <h3>RO Plant</h3>
              </div>
            </div>
            <div className="card">
              <img src={cardImg3} alt="Card 3" />
              <div className="card-content">
                <h3>Comercial plant</h3>
              </div>
            </div>
            <div className="card">
              <img src={cardImg4} alt="Card 4" />
              <div className="card-content">
                <h3>Water Cool</h3>
              </div>
            </div>
            <div className="card">
              <img src={cardImg5} alt="Card 5" />
              <div className="card-content">
                <h3>Industrial Plant</h3>
              </div>
            </div>
            <div className="card">
              <img src={cardImg6} alt="Card 6" />
              <div className="card-content">
                <h3>Hydro pneumatic</h3>
              </div>
            </div>
          </div>
          <h2>Contact Us</h2>
          <div className="card visiting-card">
            <img src={visitingCardImg} alt="Visiting Card" />
          </div>
        </div>

        <div className="services-right">
          <img src={serviceImg} alt="Service" className="service-image" />
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile No</label>
                <input type="text" id="mobile" placeholder="Your Mobile No" />
              </div>
              <div className="form-group">
                <label htmlFor="place">Place</label>
                <input type="text" id="place" placeholder="Your Location" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
