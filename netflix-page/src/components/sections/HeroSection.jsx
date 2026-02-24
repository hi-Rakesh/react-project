import Button from "../ui/Button";
import Input from "../ui/Input";
import Container from "../ui/Container";
import Navbar from "../layout/Navbar";
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      className="relative h-[90vh] w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('./src/assets/images/hero-image.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}

      <Navbar />
      <Container className="relative z-10 flex flex-col items-center justify-center text-center h-full">
        
        <h1 className="text-6xl md:text-5xl font-bold leading-15">
          Unlimited movies, <br />
          TV shows and more
        </h1>

        <p className="mt-4 text-lg md:text-xl font-bold">
          Starts at ₹149. Cancel anytime.
        </p>

        <p className="mt-6 text-sm md:text-base">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {/* CTA */}
        <form className="mt-6 flex flex-col md:flex-row items-center gap-3 w-full max-w-xl">
          
          <Input
            type="email"
            placeholder="Email address"
            className="flex-1"
          />

          <Button
            variant="primary"
            size="lg"
            className="w-1/2 md:w-1/2"
          >
            Get Started <ChevronRight  className="ml-2"/>
          </Button>
        </form>

      </Container>
    </section>
  );
};

export default HeroSection;