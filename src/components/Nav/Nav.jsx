// import "./Nav.css";

// function Nav() {
//   let menuIcon = document.querySelector("#menu-icon");
//   let navbar = document.querySelector(".navbar");

//   menuIcon.onclick = () => {
//     menuIcon.classList.add("bx-x");
//     navbar.classList.add("active");
//   };

//   let sections = document.querySelectorAll("section");
//   let navLinks = document.querySelectorAll("header nav a");

//   window.onscroll = () => {
//     sections.forEach((section) => {
//       let top = window.scrollY;
//       let offset = section.offsetTop - 150;
//       let height = section.offsetHeight;
//       let elementId = section.getAttribute("id");

//       if (top >= offset && top < offset + height) {
//         navLinks.forEach((link) => {
//           link.classList.remove("active");
//           document
//             .querySelector("header nav a[href*=" + elementId + "]")
//             .classList.add("active");
//         });
//       }
//     });
//     menuIcon.classList.remove("bx-x");
//     navbar.classList.remove("active");
//   };
//   return (
//     <div>
//       <header class="header">
//         <a href="#" class="logo">
//           <span>O</span>sama
//         </a>
//         <i id="menu-icon" class="bx bx-menu"></i>
//         <nav class="navbar">
//           <a href="#home" class="active">
//             Home
//           </a>
//           <a href="#about">About</a>
//           <a href="#services">Services</a>
//           <a href="#portfolio">Portfolio</a>
//           <a href="#contact">Contact</a>
//         </nav>
//       </header>
//     </div>
//   );
// }

// export default Nav;

// import React, { useEffect, useState } from 'react';
// import './Nav.css';

// function Nav() {
//   const [activeLink, setActiveLink] = useState('home');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll("section");
//       let currentSectionId = '';

//       sections.forEach(section => {
//         const top = window.scrollY;
//         const offset = section.offsetTop - 150;
//         const height = section.offsetHeight;
//         const elementId = section.getAttribute("id");

//         if (top >= offset && top < offset + height) {
//           currentSectionId = elementId;
//         }
//       });

//       setActiveLink(currentSectionId);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleMenuClick = () => {
//     const navbar = document.querySelector(".navbar");
//     navbar.classList.toggle("active");
//   };

//   return (
//     <div>
//       <header className="header">
//         <a href="#" className="logo">
//           <span>O</span>sama
//         </a>
//         <i id="menu-icon" className="bx bx-menu" onClick={handleMenuClick}></i>
//         <nav className="navbar">
//           <a href="#home" className={activeLink === 'home' ? 'active' : ''}>
//             Home
//           </a>
//           <a href="#about" className={activeLink === 'about' ? 'active' : ''}>
//             About
//           </a>
//           <a href="#services" className={activeLink === 'services' ? 'active' : ''}>
//             Services
//           </a>
//           <a href="#portfolio" className={activeLink === 'portfolio' ? 'active' : ''}>
//             Portfolio
//           </a>
//           <a href="#contact" className={activeLink === 'contact' ? 'active' : ''}>
//             Contact
//           </a>
//         </nav>
//       </header>
//     </div>
//   );
// }

// export default Nav;

import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSectionId = '';

      sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const elementId = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          currentSectionId = elementId;
        }
      });

      setActiveLink(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Run this effect only once after the initial render

  const handleMenuClick = () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
  };

  return (
    <div>
      <header className="header">
        <a href="#home" className="logo">
          <span>O</span>sama
        </a>
        <i id="menu-icon" className="bx bx-menu" onClick={handleMenuClick}></i>
        <nav className="navbar">
          <a href="#home" className={activeLink === 'home' ? 'active' : ''}>
            Home
          </a>
          <a href="#about" className={activeLink === 'about' ? 'active' : ''}>
            About
          </a>
          <a href="#services" className={activeLink === 'services' ? 'active' : ''}>
            Services
          </a>
          <a href="#portfolio" className={activeLink === 'portfolio' ? 'active' : ''}>
            Portfolio
          </a>
          <a href="#contact" className={activeLink === 'contact' ? 'active' : ''}>
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
