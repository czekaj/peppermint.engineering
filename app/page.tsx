import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Brain, Users, Salad } from "lucide-react";
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";

const AnimatedRocket = dynamic(() => import("@/components/AnimatedRocket"), {
  ssr: false,
});

const Header = () => (
  <header className="absolute top-0 left-0 w-full z-10 py-6">
    <div className="container mx-auto px-4 flex md:justify-between items-center justify-center">
      <a href="/">
        <h1 className="text-2xl font-bold text-emerald-400">
          Peppermint<span className="font-extralight ml-1">Engineering</span>
          <Leaf strokeWidth={0.7} className="w-8 h-8 inline ml-0.5" />
        </h1>
      </a>
      <nav className="hidden md:block">
        <ul className="flex space-x-6 items-center">
          <li>
            <a
              href="#vision"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Vision
            </a>
          </li>
          <li>
            <a
              href="#platform"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Platform
            </a>
          </li>
          <li>
            <a
              href="#team"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="#careers"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Careers
            </a>
          </li>
          <li>
            <Button
              variant="outline"
              disabled
              className="bg-transparent text-emerald-400 border-emerald-400 hover:bg-emerald-400 hover:text-black rounded-full"
            >
              Schedule Demo
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-800 via-gray-900 to-black"></div>
    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-70"></div>
    <div className="container mx-auto px-4 text-center relative z-10">
      <p className="md:my-10 mt-0">
        <Salad className="w-40 h-40 inline-block stroke-[0.8] md:stroke-[1.2]" />
      </p>
      <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
        <span className="font-normal leading-tight">Powering</span>{" "}
        <span className="text-emerald-400 leading-tight">Nutrition</span>{" "}
        Intelligence <AnimatedRocket />
      </h2>
      <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-inter">
        We are transforming personal wellness through innovative AI technology
        and <span className="text-emerald-400">grocery habits analysis</span>.
      </p>
      <a href="#platform">
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg py-6 px-10 rounded-full">
          Discover Our Platform
        </Button>
      </a>
    </div>
  </section>
);

const VisionMission = () => (
  <section id="vision" className="py-20 bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-emerald-400 text-center mb-12">
        Our Vision & Mission
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card className="bg-gray-900 border border-emerald-400/20 rounded-lg overflow-hidden">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Vision</h3>
            <p className="text-gray-300">
              We envision a world where everyone has the power to make{" "}
              <span className="text-emerald-400">
                informed, healthier food choices
              </span>{" "}
              effortlessly. By harnessing the potential of AI and real-world
              data, we're creating a future where optimal nutrition is{" "}
              <span className="text-emerald-400">
                accessible and personalized
              </span>{" "}
              for all.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 border border-emerald-400/20 rounded-lg overflow-hidden">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Mission</h3>
            <p className="text-gray-300">
              Our mission is to revolutionize how people{" "}
              <span className="text-emerald-400">
                understand and improve their nutrition
              </span>
              . By analyzing grocery purchase data with advanced AI, we're{" "}
              <span className="text-emerald-400">empowering individuals</span>{" "}
              to take control of their health, one meal at a time.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const PlatformFeature = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <Card className="bg-gray-900 border border-emerald-400/20 rounded-lg overflow-hidden">
    <CardContent className="p-6">
      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </CardContent>
  </Card>
);

const Platform = () => (
  <section id="platform" className="py-20 bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-emerald-400 text-center mb-12">
        Our Platform
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PlatformFeature
          icon={<Leaf className="w-6 h-6 text-white" />}
          title="AI-Powered Insights"
          description="Our advanced algorithms transform your grocery purchases into personalized nutritional recommendations, making healthy choices effortless."
        />
        <PlatformFeature
          icon={<Brain className="w-6 h-6 text-white" />}
          title="Comprehensive Analysis"
          description="We look beyond calorie counting, offering a holistic view of your nutritional habits based on your real-world buying patterns."
        />
        <PlatformFeature
          icon={<Users className="w-6 h-6 text-white" />}
          title="Professional Dashboard"
          description="Empowering nutritionists and healthcare providers with robust tools to monitor and guide their clients effectively, enhancing the quality of care."
        />
      </div>
    </div>
  </section>
);

const Founder = () => (
  <section id="team" className="py-20 bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-emerald-400 text-center mb-12">
        Meet the Founder
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src="images/lucas_czekaj.png"
            alt="Lucas Czekaj"
            className="rounded-full md:w-96 md:h-96 object-cover mx-auto border-0 border-emerald-400/20"
          />
        </div>
        <div className="md:w-2/3 md:pl-12">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Lucas Czekaj
          </h3>
          <p className="text-gray-300 mb-6">
            Lucas brings a unique blend of{" "}
            <span className="text-emerald-400">
              technical expertise and passion
            </span>{" "}
            for improving health and wellness through technology. As a key
            player in launching the{" "}
            <span className="text-emerald-400">Instacart Health</span>{" "}
            initiative, Lucas led the development of Instacart's Fresh Funds
            platform, addressing food insecurity and promoting access to healthy
            nutrition. His innovations were instrumental in securing
            high-profile partnerships with{" "}
            <span className="text-emerald-400">Kaiser Permanente</span> and
            Michelle Obama's Partnership for Healthier America.
          </p>
          <p className="text-gray-300 mb-6">
            With over 15 years of experience in software engineering at industry
            leaders like Instacart and Guidewire, Lucas combines unparalleled
            expertise in{" "}
            <span className="text-emerald-400">
              trailblazing food and nutrition solutions
            </span>{" "}
            with a deep understanding of consumer apps and enterprise software.
          </p>
          <p className="flex md:justify-start justify-center">
            <a href="https://www.linkedin.com/in/lukaszczekaj/" target="_blank">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
                <span>Connect with Lucas</span>
              </Button>
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Careers = () => (
  <section id="careers" className="py-20 bg-gray-900">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-emerald-400 mb-6">
        Join Our Team
      </h2>
      <p className=" text-gray-300 mb-10 max-w-2xl mx-auto">
        Are you passionate about using technology to improve lives? We're
        looking for <span className="text-emerald-400">innovative minds</span>{" "}
        to help us revolutionize the world of nutrition technology.
      </p>
      <Button
        disabled
        className="bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-8 rounded-full"
      >
        View Open Positions
      </Button>
    </div>
  </section>
);

const LeadCapture = () => (
  <section className="py-20 bg-gray-900">
    <div className="container mx-auto px-4 max-w-md text-center">
      <h2 className="text-3xl font-bold text-emerald-400 text-center mb-8">
        Stay in the Loop
      </h2>
      <form
        className="space-y-4"
        action="https://formspree.io/f/mnnapqor"
        method="POST"
      >
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="bg-gray-800 text-white border-gray-700 rounded-full"
        />
        <Button className=" bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-8 rounded-full">
          Get Peppermint Updates
        </Button>
      </form>
    </div>
  </section>
);

const SocialLinks = () => (
  <section className="flex justify-center">
    <div className="social-links">
      <a
        href="https://linkedin.com/company/peppermint-engineering"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 48 48"
        >
          <path
            fill="#0288D1"
            d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
          ></path>
          <path
            fill="#FFF"
            d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
          ></path>
        </svg>
      </a>
    </div>
  </section>
);

const PeppermintWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <VisionMission />
      <Platform />
      <Founder />
      <Careers />
      <LeadCapture />
      <SocialLinks />
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Peppermint Engineering. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PeppermintWebsite;
