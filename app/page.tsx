import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Users, Salad, Leaf } from "lucide-react";
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
import AnimatedSparkle from "@/components/AnimatedSparkle";
import DemoRequestPopup from "@/components/DemoRequestPopup";
import { Card, CardContent } from "@/components/ui/card";

const AnimatedRocket = dynamic(() => import("@/components/AnimatedRocket"), {
  ssr: false,
});

const Header = () => {
  return (
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
                id="open-popup-1"
                className="bg-transparent text-emerald-400 border-emerald-400 hover:bg-emerald-400 hover:text-black rounded-full"
              >
                Schedule Demo
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      <DemoRequestPopup />
    </header>
  );
};

const Hero = () => (
  <section className="relative z-0 min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-800 via-gray-900 to-black"></div>
    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-70"></div>
    <div className="container mx-auto px-4 text-center relative z-10">
      <p className="md:my-10 mt-20">
        <Salad className="w-40 h-40 inline-block stroke-[0.8] md:stroke-[1.2]" />
      </p>
      <h2 className="text-5xl md:text-7xl font-bold text-white mb-0">
        <span className="font-normal leading-tight">Powering</span>{" "}
        <span className="text-emerald-400 leading-tight">Nutrition</span>{" "}
        Intelligence <AnimatedSparkle />
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
              We envision a world where everyone has the power to make informed,{" "}
              <span className="text-emerald-400">
                healthier food choices effortlessly
              </span>
              . By harnessing the potential of AI and real-world data, we're
              creating a future where optimal nutrition is{" "}
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
              Our mission is to revolutionize how people understand and{" "}
              <span className="text-emerald-400">improve their nutrition</span>.
              By analyzing grocery purchase data with advanced AI, we're{" "}
              <span className="text-emerald-400">
                empowering individuals to take control
              </span>{" "}
              of their health, one meal at a time.
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
        The Peppermint Platform 🌱
      </h2>
      <div className="flex justify-center items-center">
        <img
          src="/images/iphone_ipad_peppermint_demo.png"
          alt="Platform"
          width={1000}
          className="m-10"
        />
      </div>
      <div className="flex justify-center items-center mt-6 mb-16">
        <Button
          id="open-popup-2"
          className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg py-6 px-10 rounded-full"
        >
          Schedule a Demo
        </Button>
      </div>

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
            src="images/lucas_czekaj.jpg"
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
            expertise in trailblazing{" "}
            <span className="text-emerald-400">
              food and nutrition solutions
            </span>{" "}
            with a deep understanding of consumer{" "}
            <span className="text-emerald-400">
              apps and enterprise software
            </span>
            .
          </p>
          <p className="flex md:justify-start justify-center">
            <a href="https://www.linkedin.com/in/lukaszczekaj/" target="_blank">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center space-x-2 py-4 px-6">
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
        Join Our Mission
      </h2>
      <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
        Are you excited about the intersection of nutrition, AI, and personal
        health? We'd love to hear from you. We're open to various forms of
        collaboration, including:
      </p>
      <ul className="text-gray-300 mb-6 max-w-md mx-auto text-left list-none">
        <li className="flex items-center mb-2">
          <span className="text-emerald-400 mr-2">•</span>
          Advisory roles
        </li>
        <li className="flex items-center mb-2">
          <span className="text-emerald-400 mr-2">•</span>
          Consulting opportunities
        </li>
        <li className="flex items-center mb-2">
          <span className="text-emerald-400 mr-2">•</span>
          Knowledge sharing
        </li>
        <li className="flex items-center mb-2">
          <span className="text-emerald-400 mr-2">•</span>
          Potential future partnerships
        </li>
      </ul>
      <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
        While we're not currently hiring for full-time positions, we believe in
        the power of collaboration to drive innovation. If you have insights,
        expertise, or ideas that could contribute to our mission, we'd be
        thrilled to start a conversation.
      </p>
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
        <Button className=" bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-6 rounded-full">
          <span>Get Peppermint Updates</span>
          <span className="ml-2">🚀</span>
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

const Footer = () => (
  <footer className="bg-gray-800 text-gray-300 py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-emerald-400 mb-4">
            Peppermint Engineering, Inc.
          </h3>
          <p className="text-sm">
            A Delaware-based company, rewriting the rules of nutrition
            technology through AI and grocery habits analysis.
          </p>
          <p className="mt-4 text-sm">
            Coming to you from the fabulous{" "}
            <span className="text-emerald-400">Las Vegas</span>, NV 🎰
          </p>
        </div>
        <div className="lg:ml-10">
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#vision"
                className="hover:text-emerald-400 transition-colors"
              >
                Vision
              </a>
            </li>
            <li>
              <a
                href="#platform"
                className="hover:text-emerald-400 transition-colors"
              >
                Platform
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="hover:text-emerald-400 transition-colors"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#careers"
                className="hover:text-emerald-400 transition-colors"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <p className="text-sm">
            <a href="mailto:%68%65%6c%6c%6f%40%70%65%70%70%65%72%6d%69%6e%74%2e%65%6e%67%69%6e%65%65%72%69%6e%67">
              <span className="email">
                hello@peppermint<b>.example</b>.engineering
              </span>
            </a>
          </p>
          <Button
            variant="outline"
            id="open-popup-3"
            className="mt-6 bg-transparent text-emerald-400 border-emerald-400 hover:bg-emerald-400 hover:text-black rounded-full"
          >
            Request a Consultation
          </Button>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/company/peppermint-engineering"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* Add more social media icons as needed */}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Peppermint Engineering, Inc. All
          rights reserved.
        </p>
      </div>
    </div>
  </footer>
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
      <Footer />
    </div>
  );
};

export default PeppermintWebsite;
