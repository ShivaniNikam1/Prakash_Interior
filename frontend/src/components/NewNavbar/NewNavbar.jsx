// import React, { useRef } from "react";
// import "./NewNavbar.css";
// import { FaBars, FaTimes } from "react-icons/fa";

// const NewNavbar = () => {
//   const navRef = useRef();

//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_navbar");
//   };
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="brand">
//           <a href="/">Prakash Interior</a>
//         </div>
//         <div ref={navRef} className="navbar-links">
//           <a href="/">Home</a>
//           <a href="/">Services</a>
//           <a href="/">Our Work</a>
//           <a href="/">Enquiry</a>
//         </div>
//         <button className="navbar_btn navbar_close" onClick={showNavbar}>
//             <FaBars />
//           </button>
//       </div>
//       {/* <button className="navbar_btn" onClick={showNavbar}>
//         <FaTimes />
//       </button> */}
//     </nav>
//   );
// };

// export default NewNavbar;
import React, { useState } from "react";
import "./NewNavbar.css";
import { FaBars } from "react-icons/fa";

const NewNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">
          <a href="/" className="logo-link">
            <img src="/images/logo_pk.png" alt="Logo" className="logo" />
            PRAKASH INTERIOR
          </a>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FaBars />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a href="/" className="link_option">
                HOME
              </a>
            </li>
            <li>
              <a href="#services-section" className="link_option">
                SERVICES
              </a>
            </li>
            <li>
              <a href="/gallery" className="link_option">
                GALLERY
              </a>
            </li>
            <li>
              <a href="#contact-section">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NewNavbar;
