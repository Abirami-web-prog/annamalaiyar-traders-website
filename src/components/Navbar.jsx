// import React from "react";

// function Navbar() {
// return (
//     <nav className="navbar">
//     <h2>Annamalaiyar Traders</h2>

//     <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Products</li>
//         <li>Contact</li>
//     </ul>
//     </nav>
// );
// }

// export default Navbar;
// import React from "react";
// import logo from "../assets/logo.png";

// function Navbar() {
//   return (
//     <nav className="navbar">

//       <div className="logo-container">
//         <img src={logo} alt="logo" className="logo"/>
//         <h2>Annamalaiyar Traders</h2>
//       </div>

//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Products</li>
//         <li>Contact</li>
//       </ul>

//     </nav>
//   );
// }

// export default Navbar;


// import React from "react";
// import logo from "../assets/logo.png";






// function Navbar() {
//   return (
//     <nav className="navbar">

//       <div className="logo-container">
//         <img src={logo} alt="logo" className="logo"/>
//         <h2>Annamalaiyar Traders</h2>
//       </div>

//       <ul>
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#products">Products</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
     

//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState } from "react";
// import logo from "../assets/logo.png";

// function Navbar() {

//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">

//       <div className="logo-container">
//         <img src={logo} alt="logo" className="logo"/>
//         <h2>Annamalaiyar Traders</h2>
//       </div>

//       {/* Hamburger Menu Icon */}
//       <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         ☰
//       </div>

//       <ul className={menuOpen ? "active" : ""}>
//         <li><a href="#home" onClick={()=>setMenuOpen(false)}>Home</a></li>
//         <li><a href="#about" onClick={()=>setMenuOpen(false)}>About</a></li>
//         <li><a href="#products" onClick={()=>setMenuOpen(false)}>Products</a></li>
//         <li><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></li>
//       </ul>

//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import logo1 from "../assets/logo1.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">

        {/* LOGO */}
        <div className="logo-container">
          <img src={logo1} alt="logo" className="logo"/>
          <h2>Annamalaiyar Traders</h2>
        </div>

        {/* HAMBURGER */}
        <div
          className={menuOpen ? "menu-icon open" : "menu-icon"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* OVERLAY */}
        <div
          className={menuOpen ? "overlay active" : "overlay"}
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* MENU */}
        <ul className={menuOpen ? "active" : ""}>
          <li><a href="#home" onClick={()=>setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={()=>setMenuOpen(false)}>About</a></li>
          <li><a href="#products" onClick={()=>setMenuOpen(false)}>Products</a></li>
          <li><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></li>
        </ul>

      </nav>
    </>
  );
}

export default Navbar;