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
          Schedule a Demo
        </h2>
        <p className="text-gray-300 mb-6">
          Fill out this short form and we'll reach out to schedule your
          personalized demo.
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
            placeholder="Email Address"
            className="bg-gray-800 text-white border-gray-700"
            required
          />
          <Input
            type="text"
            name="company"
            placeholder="Company"
            className="bg-gray-800 text-white border-gray-700"
            required
          />
          <Button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-full"
          >
            Request Demo
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DemoRequestPopup;
