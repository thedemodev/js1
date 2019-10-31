import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Contact from "./Contact";
import "./ContactSection2.scss";

function ContactSection2(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div className="columns">
          <div className="column">
            <iframe
              className="ContactSection2__map has-background-light"
              frameborder={0}
              src={props.embedSrc}
            />
          </div>
          <div className="column">
            <Contact
              parentColor={props.color}
              showNameField={false}
              buttonText={props.buttonText}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ContactSection2;
