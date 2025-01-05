import React from "react";
let Ending = () => {
    return (
      <footer className="footer">
        <div className="footer-top">
          <img src="pixabay-removebg-preview.png" alt="" />
          <p className="tagline">Over 5.2 million+ high-quality stock images, videos, and music shared
            by our talented community.</p>
          <div className="social-icons">
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
  
        <div className="footer-sections">
          <div className="footer-column">
            <h3>Discover</h3>
            <ul>
              <li><a href="#">Editor's Choice</a></li>
              <li><a href="#">Curated Collections</a></li>
              <li><a href="#">Pixabay Radio </a></li>
              <li><a href="#">Popular Images</a></li>
              <li><a href="#">Popular Videos</a></li>
              <li><a href="#">Popular Music</a></li>
              <li><a href="#">Popular Searches</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Community</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Forum</a></li>
              <li><a href="#">Creators</a></li>
              <li><a href="#">Cameras</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>About</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">License Summary</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookies Policy</a></li>
              <li><a href="#">Digital Services Act</a></li>
              <li><a href="#">Report Content</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Ending;