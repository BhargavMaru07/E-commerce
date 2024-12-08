import React from "react";

function HeroSection() {
  return (
    <div className="w-full relative min-h-[320px] cursor-pointer group overflow-hidden">
      {/* First Image */}
      <img
        src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
        alt="Hero Section Image"
        className="2xl:h-[380px] w-full object-cover object-center"
      />

      {/* Second Image with Slide-in Effect */}
      <img
        src="https://static.vecteezy.com/system/resources/previews/004/299/818/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
        alt="Hero Section Hover Image"
        className="2xl:h-[380px] object-cover object-center w-full absolute top-0 left-0 opacity-0 translate-x-full group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-600 ease-in"
      />
    </div>
  );
}

export default HeroSection;

//scale-x-[-1] for mirror image
// translate-y-[-100%]:

// Moves the image completely off-screen above the container (by 100% of its height).
// The - indicates an upward translation along the Y-axis.
// group-hover:translate-y-0:

// When the parent is hovered, this resets the translate-y property to 0, bringing the image down into view.

//same as in X-axis..