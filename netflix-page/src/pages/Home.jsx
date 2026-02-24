import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/sections/HeroSection";
import TrendingSection from "../components/sections/TrendingSection";
// import FeaturesSection from "../components/sections/FeaturesSection";
import FAQSection from "../components/sections/FAQSection";
//import CTASection from "../components/sections/CTASection";

const Home = () => {
  return (
    <>
        <HeroSection />

<div
  className="w-full h-1 bg-gradient-to-r from-purple-500 via-red-500 to-purple-500 rounded-full"
></div>
        <section className="mt-8 px-30 md:px-30">

          <TrendingSection />
        </section>

        <section className="mt-12 px-4 md:px-10">
          {/* <FeaturesSection /> */}
        </section>

        <section className="mt-12 px-4 md:px-10">
          <FAQSection />
        </section>

        <section className="mt-12 px-4 md:px-10">
          {/* <CTASection /> */}
        </section>

      <Footer />
    </>
  );
};

export default Home;