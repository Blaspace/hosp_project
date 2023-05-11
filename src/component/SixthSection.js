import React from "react";
import img from "../public/image-2.jpg";

function SixthSection() {
  return (
    <div className="sixth-section">
      <img src={img} alt="" />
      <div>
        <h2>Certification</h2>
        <p>
          The institute offers certification programs that are recognized by
          healthcare organisations and regulatory bodies in Europe and UK.
          Learners will have to complete all the required courses and pass the
          assessment to receive a certificate of completion. The institute also
          offers continuing education programs to ensure that learners stay
          updated with the latest trends and developments in the healthcare
          sector.
        </p>
      </div>
    </div>
  );
}

export default SixthSection;
