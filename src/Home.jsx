// Home.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "./Home.css";

function Home() {

  /* =========================
      SLIDER IMAGES
  ========================= */

  const images = [

    "https://t3.ftcdn.net/jpg/02/23/53/12/360_F_223531281_m16EWReyp0a7tgL6sFW7vJVk7DlvtgiV.jpg",

    "https://img.magnific.com/free-photo/top-view-table-full-food_23-2149209253.jpg?semt=ais_hybrid&w=740&q=80",

    "https://as1.ftcdn.net/v2/jpg/02/68/78/28/1000_F_268782859_fmLoMazNerGOYNUwwLDZStYyaHOLQvyv.jpg",

    "https://as1.ftcdn.net/v2/jpg/02/48/92/96/1000_F_248929619_JkVBYroM1rSrshWJemrcjriggudHMUhV.jpg",

    "https://images.unsplash.com/photo-1521305916504-4a1121188589"

  ];

  /* =========================
      CURRENT IMAGE STATE
  ========================= */

  const [currentImage, setCurrentImage] =
    useState(0);

  /* =========================
      AUTO SLIDE
  ========================= */

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage(
        (prev) =>
          (prev + 1) % images.length
      );

    }, 3000);

    return () =>
      clearInterval(interval);

  }, [images.length]);

  return (

    <div className="home-container">

      {/* =========================
          HERO SECTION
      ========================= */}

      <div
        className="hero-section"

        style={{
          backgroundImage: `url(${images[currentImage]})`
        }}
      >

        <div className="overlay"></div>

        <div className="hero-content">
          <div className="hero-buttons">

            <Link to="/veg" className="hero-btn veg-btn">
              <i className="fas fa-leaf"></i>Explore Veg</Link>

            <Link to="/nonveg" className="hero-btn nonveg-btn"> 
              <i className="fas fa-utensils"></i>Explore Non-Veg</Link>

          </div>

          {/* =========================
              DOTS
          ========================= */}

          <div className="slider-dots">

            {images.map((_, index) => (

              <span

                key={index}

                className={
                  currentImage === index
                    ? "dot active"
                    : "dot"
                }

                onClick={() =>
                  setCurrentImage(index)
                }
              ></span>

            ))}

          </div>

        </div>

      </div>

      {/* =========================
          CATEGORY SECTION
      ========================= */}

      <div className="category-section">

        <h2>Popular Categories</h2>

        <div className="category-grid">

          <Link
            to="/veg"
            className="category-card"
          >
            <i className="fas fa-seedling"></i>
            <h3>Veg Items</h3>
          </Link>

          <Link
            to="/nonveg"
            className="category-card"
          >
            <i className="fas fa-drumstick-bite"></i>
            <h3>Non-Veg</h3>
          </Link>

          <Link
            to="/chocolate"
            className="category-card"
          >
            <i className="fas fa-candy-cane"></i>
            <h3>Chocolate</h3>
          </Link>

          <Link
            to="/drink"
            className="category-card"
          >
            <i className="fas fa-glass-water"></i>
            <h3>Drinks</h3>
          </Link>

        </div>

      </div>

      {/* =========================
          FEATURES
      ========================= */}

      <div className="feature-section">

        <h2>Why Choose Us?</h2>

        <div className="feature-grid">

          <div className="feature-card">

            <i className="fas fa-burger"></i>

            <h3>Tasty Food</h3>

            <p>
              Fresh and delicious food
              items everyday.
            </p>

          </div>

          <div className="feature-card">

            <i className="fas fa-shipping-fast"></i>

            <h3>Fast Delivery</h3>

            <p>
              Quick delivery at your
              location.
            </p>

          </div>

          <div className="feature-card">

            <i className="fas fa-tags"></i>

            <h3>Best Prices</h3>

            <p>
              Affordable prices with
              great quality.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;