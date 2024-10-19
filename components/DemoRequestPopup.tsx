"use client";
import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DemoRequestPopup: React.FC = () => {
  return (
    <div
      id="demo-popup"
      className="fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-[9999] hidden"
    >
      <div className="bg-gray-900 p-8 rounded-lg shadow-xl max-w-md w-full relative border border-emerald-400/20">
        <button
          id="close-popup"
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-emerald-400 mb-4">
          Let's Connect!
        </h2>
        <p className="text-gray-300 mb-6">
          Learn how our AI-powered platform can revolutionize nutrition
          management for your organization 🌱
        </p>
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="space-y-4"
        >
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            className="bg-gray-800 text-white border-gray-700"
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Work Email Address"
            className="bg-gray-800 text-white border-gray-700"
            required
          />
          <Input
            type="text"
            name="organization"
            placeholder="Company / Organization"
            className="bg-gray-800 text-white border-gray-700"
          />
          <select
            name="role"
            className="w-full bg-gray-800 text-white border-gray-700 rounded-md py-2 px-3"
            required
          >
            <option value="">Select your role</option>
            <option value="executive">Executive / Decision Maker</option>
            <option value="nutritionist">Nutritionist / Dietitian</option>
            <option value="healthcare_provider">Healthcare Provider</option>
            <option value="wellness_program">Corporate Wellness Manager</option>
            <option value="researcher">Researcher / Academic</option>
            <option value="other">Other</option>
          </select>
          <select
            name="interest"
            className="w-full bg-gray-800 text-white border-gray-700 rounded-md py-2 px-3"
            required
          >
            <option value="">Primary interest in Peppermint</option>
            <option value="b2b_platform">
              B2B Nutrition Management Platform
            </option>
            <option value="integration">
              Integration with Existing Systems
            </option>
            <option value="grocery_habits">Grocery Habits Analytics</option>
            <option value="research">Nutrition Research Capabilities</option>
            <option value="custom_solution">Custom Solution Development</option>
          </select>
          <textarea
            name="message"
            placeholder="Tell us about your organization's nutrition management needs or challenges"
            className="w-full bg-gray-800 text-white border-gray-700 rounded-md py-2 px-3 h-24"
            required
          ></textarea>
          <Button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-full"
          >
            Schedule a Virtual Meeting
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DemoRequestPopup;
