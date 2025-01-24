import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h3 style={headingStyle}>Floral Dreams</h3>
          <p style={paragraphStyle}>Fresh flowers delivered with love.</p>
        </div>
        <div style={columnStyle}>
          <h3 style={headingStyle}>Follow Us</h3>
          <div style={socialIconsStyle}>
            <a href="https://www.facebook.com" style={iconStyle}><FaFacebook size={30} /></a>
            <a href="https://www.instagram.com" style={iconStyle}><FaInstagram size={30} /></a>
            <a href="https://www.twitter.com" style={iconStyle}><FaTwitter size={30} /></a>
            <a href="https://www.pinterest.com" style={iconStyle}><FaPinterest size={30} /></a>
          </div>
        </div>
      </div>
      <div style={bottomStyle}>
        <p style={bottomTextStyle}>© 2025 Floral Dreams. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#94744e",
  color: "#07202B",
  padding: "40px 0",
  fontSize: "16px",
  textAlign: "center",
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: "wrap", // Ensures columns stack on smaller screens
  marginBottom: "20px",
  padding: "0 10px",
};

const columnStyle = {
  flex: "1 1 250px", // Flex property allows columns to grow/shrink with flexible base size
  margin: "0 20px",
  minWidth: "200px", // Minimum width for each column to maintain readability
};

const headingStyle = {
  fontSize: "20px",
  marginBottom: "10px",
  fontWeight: "bold",
  letterSpacing: "1px",
};

const paragraphStyle = {
  fontSize: "14px",
  color: "#07202B",
};

const socialIconsStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  width: "200px",
  margin: "0 auto", 
};

const iconStyle = {
  color: "#07202B",
  transition: "color 0.3s",
  "&:hover": {
    color: "#1abc9c", // Light green hover effect for interaction
  },
};

const bottomStyle = {
  backgroundColor: "#a99175",
  padding: "10px 0",
};

const bottomTextStyle = {
  margin: 0,
  fontSize: "14px",
  color: "#07202B",
};

export default Footer;
