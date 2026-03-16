// // import React from "react";

// // function ServiceAreas() {
// //   return (
// //     <section className="areas">

// //       <h2 className="section-title">Service Areas</h2>

// //       <div className="areas-grid">

// //         <div>Chidambaram</div>
// //         <div>Cuddalore</div>
// //         <div>Bhuvanagiri</div>
// //         <div>Parangipettai</div>
// //         <div>Sirkazhi</div>
// //         <div>Mayiladuthurai</div>

// //       </div>

// //     </section>
// //   );
// // }

// // export default ServiceAreas;
// import React from "react";
// import { FaMapMarkerAlt } from "react-icons/fa";

// function ServiceAreas() {
//   return (
//     <section className="areas">

//       <h2 className="section-title">Service Areas</h2>

//       <p className="areas-subtitle">
//         We proudly supply construction materials to the following locations.
//       </p>

//       <div className="areas-grid">

//         <div className="area-card">
//           <FaMapMarkerAlt className="area-icon"/>
//           <h3>Chidambaram</h3>
//         </div>

//         <div className="area-card">
//           <FaMapMarkerAlt className="area-icon"/>
//           <h3>Cuddalore</h3>
//         </div>

//         <div className="area-card">
//           <FaMapMarkerAlt className="area-icon"/>
//           <h3>Bhuvanagiri</h3>
//         </div>

//         <div className="area-card">
//           <FaMapMarkerAlt className="area-icon"/>
//           <h3>Parangipettai</h3>
//         </div>

//         <div className="area-card">
//           <FaMapMarkerAlt className="area-icon"/>
//           <h3>Sirkazhi</h3>
//         </div>

//         <div className="area-card">
//           <FaMapMarkerAlt className="area-icon"/>
//           <h3>Mayiladuthurai</h3>
//         </div>

//       </div>

//     </section>
//   );
// }

// export default ServiceAreas;
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function ServiceAreas() {
  return (
    <section className="services">

      <h2 className="section-title">Service Areas</h2>

      <p className="areas-subtitle">
        We proudly supply construction materials to the following locations.
      </p>

      {/* ADD THIS LINE HERE */}
      <p className="areas-note">
        Serving builders and contractors within a 100km radius from Thiruvannamalai.
      </p>

      <div className="services-grid">

        <div className="services-card">
          <FaMapMarkerAlt className="area-icon"/>
          <h3>Tiruvannamalai</h3>
        </div>

        <div className="services-card">
          <FaMapMarkerAlt className="area-icon"/>
          <h3>Polur</h3>
        </div>

        <div className="services-card">
          <FaMapMarkerAlt className="area-icon"/>
          <h3>Chengam</h3>
        </div>

        <div className="services-card">
          <FaMapMarkerAlt className="area-icon"/>
          <h3>Thindivanam</h3>
        </div>

        <div className="services-card">
          <FaMapMarkerAlt className="area-icon"/>
          <h3>Gingee</h3>
        </div>

        <div className="services-card">
          <FaMapMarkerAlt className="area-icon"/>
          <h3>Vellore</h3>
        </div>

        <div className="services-card">
          <FaMapMarkerAlt className="area-icon"/>
          <h3>Arcot</h3>
        </div>

        <div className="services-card">
          <FaMapMarkerAlt className="area-icon"/>
          <h3>Arani</h3>
        </div>


      </div>

    </section>
  );
}

export default ServiceAreas;