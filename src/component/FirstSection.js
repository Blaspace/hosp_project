import React, { useRef, useState } from "react";

function FirstSection() {
  const [readMore, setReadMore] = useState(false);
  const button = useRef();
  const text =
    "Dafna Consult in partnership with industry profesionals provides comprehensive training and certification programs for individuals seeking to become professional caregivers. The institute offers online classes to learners from different locations . The curriculum is designed to equip caregivers with practical skills, knowledge, and ethical values required for the job. The institute in partnership with industry professionals offer mentorship programs to learners.";
  const newText = text.slice(0, 199);

  const handleRead = () => {
    if (button.current.innerText === "Learn more") {
      setReadMore(true);
    } else {
      setReadMore(false);
    }
  };

  return (
    <section className="first-section">
      <h2>About the program</h2>
      <p>{readMore ? text : newText + "..."}</p>
      <button onClick={() => handleRead()} ref={button}>
        {readMore ? "See less" : "Learn more"}
      </button>
    </section>
  );
}

export default FirstSection;
