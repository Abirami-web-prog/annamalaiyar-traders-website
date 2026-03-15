import React from "react";

function Contact() {
return (
    <section  id="contact"className="contact">

    <div className="contact-left">

        <h2>Contact Us</h2>

        <p>📞 Phone:9442973450</p>

        <p>💬 WhatsApp: 9092208303</p>

        <p>✉ Email: annamalaiyartraders1@gmail.com</p>

    </div>

    <div className="contact-right">

        {/* <iframe
        title="map"
        src="https://www.google.com/maps/search/?api=1&query=VOC+Nagar+4th+Street+Tiruvannamalai"
        /> */}
        <iframe
        title="map"
  src="https://maps.google.com/maps?q=VOC%20Nagar%204th%20Street%20Thiruvannamalai&t=&z=15&ie=UTF8&iwloc=&output=embed">
  
</iframe>

    </div>

    </section>
);
}

export default Contact;