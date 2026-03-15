// import React from "react";

// function FAQ() {
//   return (
//     <section className="faq">

//       <h2 className="section-title">Frequently Asked Questions</h2>

//       <div className="faq-item">
//         <h4>Do you provide bulk materials?</h4>
//         <p>Yes, we supply bulk cement and steel for builders and contractors.</p>
//       </div>

//       <div className="faq-item">
//         <h4>Do you offer delivery?</h4>
//         <p>Yes, we deliver materials directly to construction sites.</p>
//       </div>

//       <div className="faq-item">
//         <h4>Which cement brands are available?</h4>
//         <p>UltraTech, Ramco and Dalmia.</p>
//       </div>

//       <div className="faq-item">
//         <h4>How to place an order?</h4>
//         <p>Contact us through phone or WhatsApp.</p>
//       </div>

//     </section>
//   );
// }

// export default FAQ;
import React, { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Do you supply cement and steel to contractors?",
      answer: "Yes, we supply premium cement and high-strength steel products to contractors, builders, and homeowners."
    },
    {
      question: "Which brands are available?",
      answer: "We provide trusted brands like UltraTech, Ramco, Maha,Priya, Suryadev, JSW Steel and more."
    },
    {
      question: "Do you provide bulk orders?",
      answer: "Yes, bulk orders are available with competitive pricing."
    },
    {
      question: "What areas do you serve?",
      answer: "We supply materials across Thiruvannamalai and within a 100km radius."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>

      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question"
            onClick={() => toggleFAQ(index)}
          >
            {item.question}
          </div>

          {activeIndex === index && (
            <div className="faq-answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
export default FAQ;