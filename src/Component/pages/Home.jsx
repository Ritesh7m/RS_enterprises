import React from "react";
import "./Home.css";
import homeImage from "../Assets/homeImage.jpg"; // Make sure to add your image in the correct path

const Home = () => {
  return (
    <div className="home">
      <section className="home-container">
        <div className="left-section">
          <h1>Welcome to RS Enterprises</h1>
          <p>
            At Rs Enterprises Ro systems we are dedicated to providing
            top-quality water purification solutions to ensure your family’s
            health and well-being. We offer a wide range of the best water
            purifiers tailored to meet your specific needs. Our expert services
            include installation, repairs, and maintenance, ensuring your water
            purifier operates at peak performance. With a commitment to
            excellence and customer satisfaction, Rs Enterprises Ro System is
            your trusted partner for clean and safe drinking water.
            <hr />
            Water purifiers are essential devices designed to improve the
            quality of drinking water by removing impurities and contaminants.
            They come in various types, including reverse osmosis systems,
            activated carbon filters, and UV purifiers. When choosing a water
            purifier, consider factors like water quality, budget, and
            maintenance requirements to ensure you get the right product for
            your needs. Regular maintenance and filter replacement are crucial
            to ensure the purifier continues to provide clean and
            safe drinking water.
          </p>
        </div>

        <div className="right-section">
          <img src={homeImage} alt="Water Purifier" />
          {/* New section added */}
          <div className="visit-us-text">
            <p>Visit us to explore our products and services, and experience the difference in water purity today</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
