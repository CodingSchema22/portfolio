// import { Link } from "react-scroll";
const Nav = () => {
  return (
    <div className="box">
      <div className="img">
        <h2><i>THEPRO</i></h2>
      </div>

      <div className="nav">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#resume">Resume</a>
        <a href="#contat">Contact</a>

        {/* <Link to ="#hero" smooth={true} duration={500}>Home</Link>
        <Link to ="#about" smooth={true} duration={500}>About</Link>
        <Link to ="#services" smooth={true} duration={500}>Services</Link>
        <Link to ="#contat" smooth={true} duration={500}>Contact</Link> */}
      </div>
    </div>
  );
};

export default Nav;





// import React from "react";
// import { Link } from "react-scroll";
// import "../styles.css";

// const Navbar = () => {
//   return (
//     <div className="box">
//       <div className="img">
//         <h2>MyPortfolio</h2>
//       </div>
//       <div className="nav">
//         <Link to="hero" smooth={true} duration={500}>Home</Link>
//         <Link to="about" smooth={true} duration={500}>About</Link>
//         <Link to="services" smooth={true} duration={500}>Services</Link>
//       </div>
//     </div>
//   );
// };
// export default Navbar;
