// import React from "react";

// function About() {
//   return (
//     <section className="about">

//       <h2 className="section-title">About Annamalaiyar Traders</h2>

//       <div className="about-content">

//         <p>
//           Annamalaiyar Traders is a trusted supplier of high-quality
//           construction materials based in Chidambaram. With more than a decade
//           of experience in the building materials industry, we have built a
//           strong reputation for reliability, quality products, and excellent
//           customer service.
//         </p>

//         <p>
//           We provide construction materials to builders, contractors,
//           engineers, and homeowners who want dependable products for their
//           projects. Our goal is to ensure that every customer receives the best
//           materials that contribute to strong, durable, and long-lasting
//           structures.
//         </p>

//         <p>
//           We specialize in supplying premium cement and high-strength steel
//           from leading brands known for their quality and performance. These
//           materials are essential for building safe foundations, strong
//           frameworks, and long-lasting construction.
//         </p>

//         <p>
//           At Annamalaiyar Traders, we believe that successful construction
//           begins with the right materials and trusted suppliers. That is why we
//           carefully source our products from reputed manufacturers and
//           maintain strict quality standards.
//         </p>

//         <p>
//           Our team is committed to providing timely delivery, competitive
//           pricing, and reliable service. Whether you are building a home,
//           managing a commercial project, or purchasing materials in bulk,
//           we ensure that your requirements are fulfilled efficiently.
//         </p>

//         <p>
//           Over the years, we have proudly served customers across
//           Chidambaram and nearby regions including Cuddalore,
//           Bhuvanagiri, Parangipettai, Sirkazhi, and Mayiladuthurai.
//         </p>

//         <p>
//           Customer satisfaction is the foundation of our business.
//           We focus on building long-term relationships by providing
//           honest service, transparent pricing, and consistent product
//           quality.
//         </p>

//       </div>

//     </section>
//   );
// }

// export default About;
import React from "react";
import { FaTruck, FaBuilding, FaHandshake, FaIndustry } from "react-icons/fa";

function About() {
  return (
    <section  id="about"
    className="about">

      <h2 className="section-title">About Annamalaiyar Traders</h2>

      <div className="about-content">

        <div className="about-item">
          <FaBuilding className="about-icon"/>

          <p>
            <span>Annamalaiyar Traders</span> is a trusted supplier of 
            high-quality construction materials based in Chidambaram. 
            With more than <span>10 years of experience</span> in the 
            building materials industry, we have built a strong reputation 
            for reliability and quality service.
          </p>
        </div>

        <div className="about-item">
          <FaIndustry className="about-icon"/>

          <p>
            We specialize in supplying <span>premium cement</span> and 
            <span> high-strength steel</span> from leading brands that ensure 
            durability, strength, and long-lasting construction structures.
          </p>
        </div>

        <div className="about-item">
          <FaTruck className="about-icon"/>

          <p>
            Our team focuses on <span>fast delivery</span>, 
            <span> fair pricing</span>, and reliable material supply for 
            builders, contractors, engineers, and homeowners across 
            Tamil Nadu.
          </p>
        </div>

        <div className="about-item">
          <FaHandshake className="about-icon"/>

          <p>
            We believe in building <span>long-term relationships</span> 
            with our customers by providing trusted products, honest 
            service, and consistent quality for every project.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;