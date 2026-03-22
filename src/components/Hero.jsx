import React, { useState, useEffect } from "react";
import hero from "../assets/hero.jpeg";
import img2 from "../assets/steel1.jpeg";   // your 1st new image
import img3 from "../assets/concrete.jpeg"; // your 2nd new image

function Hero() {
  const images = [hero, img2, img3];
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${images[current]}) `}}
    >
        <div className="hero slide"></div>
      <div className="hero-content">
        <h1>Building Materials You Can Trust</h1>

        <p>
          Annamalaiyar Traders supplies premium cement and steel
          products for construction projects across Tamil Nadu.
        </p>

        <a href="#products">
          <button>Explore Products</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;






// import React from "react";
// import hero from "../assets/hero.jpeg";

// function Hero() {
// return (
//     <section  id="home"
//     className="hero" style={{backgroundImage: `url(${hero})`}}>
//     <div className="hero-content">
//         <h1>Building Materials You Can Trust</h1>

//         <p>
//         Annamalaiyar Traders supplies premium cement and steel
//         products for construction projects across Tamil Nadu.
//         </p>
//         <a href="#products">
//         <button  >Explore Products</button>
//         </a>
//     </div>
//     </section>
// );
// }

// export default Hero;