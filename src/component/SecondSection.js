import React from "react";
import img from "../public/image-3.jpg";

function SecondSection() {
  return (
    <div className="second-section">
      <h2>Why do I need caregiver certificate?</h2>
      <section className="second-section-body">
        <p>
          There is an increasing demand for professional caregivers in the UK
          and all over Europe due to the ageing population and the rise in
          chronic illnesses. we take advantage of the opportunity to offer
          high-quality training to individuals interested in working as
          caregivers abroad.
        </p>
        <img src={img} alt="" />
      </section>
    </div>
  );
}

export default SecondSection;
