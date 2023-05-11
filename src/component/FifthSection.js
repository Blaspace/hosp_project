import React from "react";
import img from "../public/image-4.jpg";

function FifthSection() {
  return (
    <div className="fifth-section">
      <img src={img} alt="" />
      <div>
        <h2>Delivery Method</h2>
        <p>
          The institute offers online classes through our dedicated website,
          which will provide learners with access to course materials, online
          forums, and virtual classrooms. Learners will be able to interact with
          instructors and peers through the website's chat and discussion
          forums. We also have a section for mentorship programs, where learners
          can connect with industry professionals for guidance and support.
        </p>
      </div>
    </div>
  );
}

export default FifthSection;
