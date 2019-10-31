import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import ChangePass from "./ChangePass";
import "./ChangePassSection.scss";

function ChangePassSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div className="ChangePassSection__box box">
          <ChangePass buttonText={props.buttonText} />
        </div>
      </div>
    </Section>
  );
}

export default ChangePassSection;
