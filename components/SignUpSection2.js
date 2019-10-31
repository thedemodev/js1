import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SignUp from "./SignUp";
import { useRouter } from "next/router";
import "./SignUpSection2.scss";

function SignUpSection2(props) {
  const router = useRouter();

  // Go to page after signup
  const onSignup = () => {
    router.push("/dashboard");
  };

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
        <div className="SignUpSection2__box box">
          <SignUp buttonText={props.buttonText} onSignup={onSignup} />
        </div>
      </div>
    </Section>
  );
}

export default SignUpSection2;
