import React from "react";
import ContactSection2 from "./../components/ContactSection2";

function ContactPage(props) {
  return (
    <ContactSection2
      color="white"
      size="medium"
      title="Contact Us"
      subtitle="We strive to make our customers happy! And no, we didn't know about the similarly titled movie. Please stop asking about that."
      showNameField={true}
      buttonText="Send message"
      embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.176569329384!2d115.64515051624444!3d-33.340336599257625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a2e1d6e1f2832f7%3A0xe4813eb823ccbe30!2sFlorist+Gump!5e0!3m2!1sen!2sus!4v1564947283991!5m2!1sen!2sus"
    />
  );
}

export default ContactPage;
