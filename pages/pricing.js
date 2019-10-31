import React from "react";
import Announcement from "./../components/Announcement";
import PricingSection from "./../components/PricingSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import StatsSection from "./../components/StatsSection";
import ContactSection from "./../components/ContactSection";
import { useRouter } from "next/router";

function PricingPage(props) {
  const router = useRouter();

  return (
    <>
      <Announcement
        color="white"
        size="normal"
        text="An important announcement!"
        buttonText="Get Started"
        buttonOnClick={() => {
          router.push("/signup");
        }}
      />
      <PricingSection color="white" size="medium" title="Pricing" subtitle="" />
      <TestimonialsSection
        color="white"
        size="medium"
        title="Here's what people are saying"
        subtitle=""
      />
      <StatsSection
        color="white"
        size="medium"
        items={[
          {
            title: "Tweets",
            stat: "3,456"
          },
          {
            title: "Following",
            stat: "123"
          },
          {
            title: "Followers",
            stat: "456k"
          },
          {
            title: "Likes",
            stat: "789"
          }
        ]}
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

export default PricingPage;
