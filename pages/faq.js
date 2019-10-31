import React from "react";
import FaqSection from "./../components/FaqSection";
import ContactSection from "./../components/ContactSection";

function FaqPage(props) {
  return (
    <>
      <FaqSection
        color="white"
        size="medium"
        title="Frequently Asked Questions"
        subtitle=""
      />
      <ContactSection
        color="white"
        size="medium"
        title="Contact Us"
        subtitle=""
        showNameField={true}
        buttonText="Send message"
      />
    </>
  );
}

export default FaqPage;
