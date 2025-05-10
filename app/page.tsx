import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  // Keep relevant icons, consider adding/changing based on new focus
  Brain, // AI Engine
  Users, // Client Management / Collaboration
  Salad, // Nutrition (still relevant)
  Leaf, // Natural/Whole Foods
  BarChart2, // Analytics for Dietitians
  Link, // Account Linking
  TrendingUp, // Client Progress
  Briefcase, // Professional Tool
  Stethoscope, // Clinical Application
  Code, // API
  Smartphone, // Client Data Capture App
  Grape, // Nutrition
  Scale, // Measurement/Assessment
  Workflow, // Dietitian Workflow
  Fingerprint, // Personalization/Verification
  Library, // For Practice Management software
} from "lucide-react";
import { Input } from "@/components/ui/input";
import dynamic from "next/dynamic";
import DemoRequestPopup from "@/components/DemoRequestPopup"; // Ensure this popup's copy is also B2B focused
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSpark from "@/components/AnimatedSpark";

// ... (Imports and other components remain the same unless specified)

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10 py-6">
      <div className="container mx-auto px-4 flex md:justify-between items-center justify-center">
        <a href="/">
          <img
            src="/images/peppermint_engineering_logo.png"
            alt="Peppermint Engineering Logo"
            width={280}
          />
        </a>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            <li>
              <a
                href="#solution"
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Our Solution
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
                href="#about"
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-emerald-400 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <Button
                variant="outline"
                id="open-popup-1"
                className="bg-transparent text-emerald-400 border-emerald-400 hover:bg-emerald-400 hover:text-black rounded-full"
              >
                Sign up for Early Access!
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
      {/* YOUR REVISED VERSION BELOW - MUCH BETTER! */}
      <h2 className="text-3xl md:text-5xl text-white mb-4 font-bold">
        Empowering Nutrition Professionals with{" "}
        <span className="text-emerald-400 leading-tight">
          Client Purchase Data
        </span>
      </h2>
      <p className="text-xl md:text-2xl text-gray-300 mt-6 mb-10 max-w-3xl mx-auto">
        Unlock deeper insights for truly <span className="text-emerald-400 leading-tight">personalized care</span> through verified <strong>grocery shopping history</strong> (online & in-store) <AnimatedSpark />
      </p>
      <a href="#solution">
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg py-6 px-10 rounded-full">
          Discover the Solution
        </Button>
      </a>
    </div>
  </section>
);

const SolutionOverview = () => (
  <section id="solution" className="py-20 bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-emerald-400 text-center mb-12">
        The Future of Personalized Nutrition Guidance
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card className="bg-gray-900 border border-emerald-400/20 rounded-lg overflow-hidden">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">The Challenge for Professionals</h3>
            <p className="text-gray-300 font-bold mb-4">
              Effective nutritional guidance demands accurate insight into clients' real-world food choices.
            </p>
            <p className="text-gray-300 mb-4">
              Yet, dietitians and nutritionists often rely on time-consuming, error-prone food diaries or client recall, missing the full picture of long-term habits and what's truly brought into the home.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 border border-emerald-400/20 rounded-lg overflow-hidden">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold text-white mb-4">The Peppermint Solution</h3>
            <p className="text-gray-300 mb-4 font-bold">
              We provide the critical data bridge: automated, consented access to clients' verified grocery purchase history—both online and in-store (via loyalty).
            </p>
            <p className="text-gray-300">
              Our platform empowers professionals with longitudinal data and AI-augmented insights, enabling more precise, efficient, and impactful personalized nutrition strategies.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const PlatformFeature = ({ // This component is fine structurally
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
        A Dedicated Platform for Nutrition Professionals
      </h2>
      <div className="flex justify-center items-center">
        <img
          src="/images/iphone_ipad_peppermint_demo.png" // Consider updating this image
          alt="Peppermint Professional Platform Demo"
          width={1000}
          className="m-10"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PlatformFeature
          icon={<Stethoscope className="w-6 h-6 text-white" />}
          title="For Dietitians & Nutritionists" // Made more inclusive
          description="Enhance your consultations with objective data. Track client progress, identify patterns, and tailor interventions based on verified grocery purchases (online & in-store)."
        />
        <PlatformFeature
          icon={<Users className="w-6 h-6 text-white" />}
          title="For Practices & Wellness Clinics" // Broadened
          description="Equip your team with a powerful tool to standardize data collection, improve client adherence, and demonstrate measurable outcomes."
        />
        <PlatformFeature
          icon={<Library className="w-6 h-6 text-white" />}
          title="For Professional Software Platforms" // Clarified
          description="Integrate Peppermint's data pipeline via our robust API to enrich your existing practice management, EHR, or client engagement tools with unparalleled grocery intelligence."
        />
      </div>
      <h3 className="text-3xl font-bold text-emerald-400 text-center mt-24 mb-12">
        Key Platform Capabilities
      </h3>
      <div className="text-gray-300 mb-32">
        {/* Use a container for the list to control its max-width and centering */}
        <div className="max-w-2xl mx-auto space-y-4"> {/* Increased space-y for better separation */}

          {/* Capability Item 1 */}
          <div className="grid grid-cols-[auto_1fr] gap-x-3 items-start"> {/* items-start for top alignment */}
            <span className="text-emerald-400 mt-1">•</span> {/* Bullet, mt-1 for slight alignment adjustment if needed */}
            <div>
              <b className="block">Verified Purchase Data</b> {/* block to ensure it takes full width of its column part */}
              <p className="text-gray-400"> {/* Lighter text for description for contrast */}
                Access complete client grocery history (online & in-store via loyalty).
              </p>
            </div>
          </div>

          {/* Capability Item 2 */}
          <div className="grid grid-cols-[auto_1fr] gap-x-3 items-start">
            <span className="text-emerald-400 mt-1">•</span>
            <div>
              <b className="block">Longitudinal Habit Analysis</b>
              <p className="text-gray-400">
                Uncover trends and patterns invisible to traditional dietary recall.
              </p>
            </div>
          </div>

          {/* Capability Item 3 */}
          <div className="grid grid-cols-[auto_1fr] gap-x-3 items-start">
            <span className="text-emerald-400 mt-1">•</span>
            <div>
              <b className="block">AI-Augmented Insights for Pros</b>
              <p className="text-gray-400">
                Leverage AI to flag key items or patterns, assisting your expert review.
              </p>
            </div>
          </div>

          {/* Capability Item 4 */}
          <div className="grid grid-cols-[auto_1fr] gap-x-3 items-start">
            <span className="text-emerald-400 mt-1">•</span>
            <div>
              <b className="block">Secure & Compliant</b>
              <p className="text-gray-400">
                Built with client consent and data privacy at its core.
              </p>
            </div>
          </div>

          {/* Capability Item 5 */}
          <div className="grid grid-cols-[auto_1fr] gap-x-3 items-start">
            <span className="text-emerald-400 mt-1">•</span>
            <div>
              <b className="block">Professional-Grade API</b>
              <p className="text-gray-400">
                Seamlessly integrate Peppermint data into your existing clinical or professional workflows.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-3xl font-bold text-emerald-400 text-center mb-16">
          Why Peppermint for Your Practice?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PlatformFeature
            icon={<BarChart2 className="w-6 h-6 text-white" />}
            title="Data-Driven Decisions"
            description="Move beyond guesswork. Base your nutritional guidance on what clients actually purchase, enabling more targeted and effective strategies."
          />
          <PlatformFeature
            icon={<Workflow className="w-6 h-6 text-white" />}
            title="Enhanced Efficiency"
            description="Reduce time spent on manual data collection and clarification. Focus your expertise on analysis, planning, and client interaction."
          />
          <PlatformFeature
            icon={<TrendingUp className="w-6 h-6 text-white" />}
            title="Improved Client Outcomes"
            description="Empower clients with a clearer understanding of their habits and support them in making sustainable changes with data-backed insights, co-piloted by you."
          />
        </div>
        <div className="flex justify-center items-center mt-24 mb-16">
          <Button
            id="open-popup-2"
            className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg py-6 px-10 rounded-full"
          >
            Sign up for Early Access!
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const AboutUs = () => ( // Changed from Founder to AboutUs
  <section id="about" className="py-20 bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-emerald-400 text-center mb-12">
        About Peppermint Engineering, Inc.
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src="images/lucas_czekaj.jpg"
            alt="Lucas Czekaj, Founder of Peppermint Engineering"
            className="rounded-full md:w-96 md:h-96 object-cover mx-auto border-0 border-emerald-400/20"
          />
        </div>
        <div className="md:w-2/3 md:pl-12">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Lucas Czekaj, Founder
          </h3>
          <p className="text-gray-300 mb-6 text-md">
            Peppermint was born from a vision to bridge the gap between vast amounts of grocery purchase data and meaningful, personalized nutrition guidance for professionals and their clients.
            <br /> <br />
            As the former Tech Lead for Instacart's Fresh Funds platform and a key architect of Instacart Health, Lucas saw firsthand the potential to leverage purchase data for wellness. He led initiatives that secured partnerships with major healthcare players like Kaiser Permanente and collaborated with organizations like Michelle Obama's Partnership for Healthier America.
            <br /> <br />
            With deep expertise in building scalable B2B and consumer-grade platforms at Instacart and Guidewire, Lucas is now focused on creating the essential intelligence layer to empower nutrition professionals and revolutionize how data informs personalized care plans.
          </p>
          <p className="flex md:justify-start justify-center">
            <a href="https://www.linkedin.com/in/lukaszczekaj/" target="_blank">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center space-x-2 py-4 px-4 text-md">
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

const GetInvolved = () => (
  <section id="contact" className="py-20 bg-gray-900">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-emerald-400 mb-6">
        Join Us in Shaping the Future of Nutrition Guidance
      </h2>
      <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
        Peppermint is pioneering the infrastructure for data-driven nutrition. We're building a platform to empower nutrition professionals and enhance client care. We are eager to connect with:
      </p>

      <div className="max-w-xl mx-auto space-y-4 mb-10"> {/* Adjusted max-width slightly */}

        {/* Item 1 */}
        <div className="grid grid-cols-[auto_1fr] gap-x-3 items-start text-left">
          <span className="text-emerald-400 mt-1">•</span>
          <div>
            <b className="block text-white">Dietitians & Nutritionists</b>
            <p className="text-gray-400">
              Interested in early access to innovative tools and providing feedback to shape our platform.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="grid grid-cols-[auto_1fr] gap-x-3 items-start text-left">
          <span className="text-emerald-400 mt-1">•</span>
          <div>
            <b className="block text-white">Professional Nutrition Consultants & Domain Experts</b>
            <p className="text-gray-400">
              Seeking to collaborate or advise on best practices and the evolving needs of the nutrition field.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="grid grid-cols-[auto_1fr] gap-x-3 items-start text-left">
          <span className="text-emerald-400 mt-1">•</span>
          <div>
            <b className="block text-white">Developers of Professional Nutrition Software</b>
            <p className="text-gray-400">
              Exploring opportunities for future integration partnerships to enhance professional toolkits.
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="grid grid-cols-[auto_1fr] gap-x-3 items-start text-left">
          <span className="text-emerald-400 mt-1">•</span>
          <div>
            <b className="block text-white">Passionate Technical Talent</b>
            <p className="text-gray-400">
              Engineers and data scientists excited about building the future of nutrition intelligence (for future team expansion).
            </p>
          </div>
        </div>

      </div>

      <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
        If you're driven by the potential of technology to empower nutrition professionals and improve health outcomes on a broad scale, we would love to connect and explore how we can innovate together.
      </p>
      {/* The main CTA button to Sign Up for Early Access / Request Demo is in the Hero, Platform, and Footer sections */}
    </div>
  </section>
);

const LeadCapture = () => ( // This section is still good for general interest.
  <section className="py-20 bg-gray-900">
    <div className="container mx-auto px-4 max-w-md text-center">
      <h2 className="text-3xl font-bold text-emerald-400 text-center mb-8">
        Stay Updated on Peppermint
      </h2>
      <form
        className="space-y-4"
        action="https://formspree.io/f/mnnapqor" // Make sure this Formspree endpoint is correct
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

const Footer = () => (
  <footer className="bg-gray-800 text-gray-300 py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-emerald-400 mb-4">
            Peppermint Engineering, Inc.
          </h3>
          <p className="text-sm">
            The intelligence layer empowering nutrition professionals with client purchase data.
          </p>
          <p className="mt-4 text-sm">
            Based in Las Vegas, built with Silicon Valley DNA 🌉
          </p>
        </div>
        <div className="lg:ml-10">
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#solution"
                className="hover:text-emerald-400 transition-colors"
              >
                Our Solution
              </a>
            </li>
            <li>
              <a
                href="#platform"
                className="hover:text-emerald-400 transition-colors"
              >
                Platform Details
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-emerald-400 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-emerald-400 transition-colors"
              >
                Get Involved
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
          <p className="text-sm mb-2">
            For pilot program inquiries or partnership discussions:
          </p>
          <p className="text-sm">
            <a href="mailto:%68%65%6c%6c%6f%40%70%65%70%70%65%72%6d%69%6e%74%2e%65%6e%67%69%6e%65%65%72%69%6e%67">
              <span className="email">
                hello@peppermint<b>.example</b>.engineering
              </span>
            </a>
          </p>
          <Button
            variant="outline"
            id="open-popup-4"
            className="mt-6 bg-transparent text-emerald-400 border-emerald-400 hover:bg-emerald-400 hover:text-black rounded-full"
          >
            Request a Demo
          </Button>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Our Journey</h4>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/company/peppermint-engineering"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              <svg /* LinkedIn Icon */ className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Peppermint Engineering, Inc. All
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
      <SolutionOverview />
      <Platform />
      <AboutUs />
      <GetInvolved />
      <LeadCapture />
      <Footer />
    </div>
  );
};

export default PeppermintWebsite;