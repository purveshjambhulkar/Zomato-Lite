import "../App.css"; // Or use a separate Footer.css if you split styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top max-width">
        <div className="footer-logo-section">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="Zomato logo"
            className="footer-logo"
          />
          <div className="footer-language-country">
            <span>🌐 India</span>
            <span>🇬🇧 English</span>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>About Zomato</h4>
            <ul>
              <li>Who We Are</li>
              <li>Blog</li>
              <li>Work With Us</li>
              <li>Investor Relations</li>
              <li>Report Fraud</li>
              <li>Press Kit</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4>Zomaverse</h4>
            <ul>
              <li>Zomato</li>
              <li>Blinkit</li>
              <li>District</li>
              <li>Feeding India</li>
              <li>Hyperpure</li>
              <li>Zomato Live</li>
              <li>Zomaland</li>
              <li>Weather Union</li>
            </ul>
          </div>

          <div>
            <h4>For Restaurants</h4>
            <ul>
              <li>Partner With Us</li>
              <li>Apps For You</li>
            </ul>
          </div>

          <div>
            <h4>Learn More</h4>
            <ul>
              <li>Privacy</li>
              <li>Security</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom max-width">
        <p>&copy; 2025 ZomatoLite. Built for mock interview practice. All rights reserved.</p>
        <div className="footer-social">
          <img src="/facebook.png" alt="Facebook" />
          <img src="/twitter.png" alt="Twitter" />
          <img src="/instagram.png" alt="Instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
