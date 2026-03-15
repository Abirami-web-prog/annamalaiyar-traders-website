// import React from "react";

// function Brands() {
//   return (
//     <section className="brands">

//       <h2 className="section-title">Trusted Brands</h2>

//       <div className="brands-grid">

//         <div className="brand-card">UltraTech Cement</div>
//         <div className="brand-card">Ramco Cement</div>
//         <div className="brand-card">Dalmia Cement</div>
//         <div className="brand-card">High Grade TMT Steel</div>

//       </div>

//     </section>
//   );
// }

// export default Brands;
import React from "react";

import ultratech from "../assets/brands/ultratech.png";
import ramco from "../assets/brands/ramco.png";
import dalmia from "../assets/brands/dalmia.png";
import jsw from "../assets/brands/jsw.png";
import tata from "../assets/brands/tata.png";
import zuari from "../assets/brands/zuari.png";
import coromandel from "../assets/brands/coromandel.png";
import shree from "../assets/brands/shree.png";
import acc from "../assets/brands/acc.png";
import birla from "../assets/brands/birla.png";

function Brands() {
  return (
    <section className="brands">

      <h2 className="section-title">Trusted Brands</h2>

      <div className="logo-slider">

         <div className="logo-track">           

          <img src={ultratech} alt="UltraTech" />
          <img src={ramco} alt="Ramco" />
          <img src={dalmia} alt="Dalmia" />
          <img src={jsw} alt="JSW" />
          <img src={tata} alt="Tata" />
          <img src={zuari} alt="Zuari" />
          <img src={coromandel} alt="Coromandel" />
          <img src={shree} alt="Shree Cement" />
          <img src={acc} alt="ACC Cement" />
          <img src={birla} alt="Birla Cement" />

          {/* duplicate for smooth infinite loop */}

          <img src={ultratech} alt="" />
          <img src={ramco} alt="" />
          <img src={dalmia} alt="" />
          <img src={jsw} alt="" />
          <img src={tata} alt="" />
          <img src={zuari} alt="" />
          <img src={coromandel} alt="" />
          <img src={shree} alt="" />
          <img src={acc} alt="" />
          <img src={birla} alt="" />

        </div>

      </div>

    </section>
  );
}

export default Brands;