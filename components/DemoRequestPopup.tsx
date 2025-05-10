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
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl max-w-md w-full relative border border-emerald-400/20">
        <button
          id="close-popup"
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-emerald-400 mb-2">
          Sign up for Early Access!
        </h2>
        <p className="text-gray-300 mb-6">
          See how Peppermint empowers dietitians and nutritionists with automated client grocery purchase data.
        </p>

        <form
          action="https://formspree.io/f/xvgoojyy"
          method="POST"
          className="space-y-4"
        >
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            className="bg-gray-800 text-white border-gray-700 rounded-xl"
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Work Email"
            className="bg-gray-800 text-white border-gray-700 rounded-xl"
            required
          />
          <Input
            type="text"
            name="practice_or_company_name"
            placeholder="Practice / Company Name"
            className="bg-gray-800 text-white border-gray-700 rounded-xl"
            required
          />

          <select
            name="professional_role"
            className="w-full bg-gray-800 text-white border-gray-700 rounded-xl py-2 px-3"
            required
          >
            <option value="">I am a...</option>
            <option value="dietitian_nutritionist_practice">Dietitian/Nutritionist (Private Practice/Clinic)</option>
            <option value="dietitian_software_provider">Professional Nutrition Software Provider</option>
            <option value="health_professional_other">Other Health Professional Interested in Nutrition Data</option>
          </select>

          <div>
            <label htmlFor="top_retailer_1" className="block text-sm font-medium text-gray-300 mb-1">
              Top 3 online/loyalty grocery retailers your clients use most:
            </label>
            <Input
              type="text"
              name="top_retailer_1"
              id="top_retailer_1"
              placeholder="1. Primary Retailer (e.g., Walmart)"
              className="bg-gray-800 text-white border-gray-700 rounded-xl mb-2"
              required
            />
            <Input
              type="text"
              name="top_retailer_2"
              placeholder="2. Secondary Retailer"
              className="bg-gray-800 text-white border-gray-700 rounded-xl mb-2"
            />
            <Input
              type="text"
              name="top_retailer_3"
              placeholder="3. Tertiary Retailer"
              className="bg-gray-800 text-white border-gray-700 rounded-xl"
            />
          </div>

          <textarea
            name="additional_comments" // Changed from interest_details
            placeholder="Any additional comments or specific interests? (Optional)"
            className="w-full bg-gray-800 text-white border-gray-700 rounded-xl py-2 px-3 h-20" // Reduced height slightly
          ></textarea>

          <Button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-xl transition-colors"
          >
            Submit
          </Button>

          <p className="text-gray-400 text-sm text-center">
            Our pilot program focuses primarily on Kroger/Smith's. Your retailer input helps guide our expansion!
          </p>
        </form>
      </div>
    </div>
  );
};

export default DemoRequestPopup;