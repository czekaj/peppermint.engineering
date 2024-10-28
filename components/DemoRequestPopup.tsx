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
          Partner with Peppermint
        </h2>
        <p className="text-gray-300 mb-6">
          Access our nutrition intelligence infrastructure and power the next
          generation of personalized wellness solutions 🌱
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
            name="organization"
            placeholder="Company"
            className="bg-gray-800 text-white border-gray-700 rounded-xl"
          />

          <select
            name="partnership_type"
            className="w-full bg-gray-800 text-white border-gray-700 rounded-xl py-2 px-3"
            required
          >
            <option value="">Choose Partnership Interest</option>
            <option value="platform_integration">Platform Integration</option>
            <option value="wellness_provider">Digital Wellness Provider</option>
            <option value="health_tech">Health Tech Company</option>
            <option value="retail_partner">Retail/Grocery Partner</option>
            <option value="venture_capital">Venture Capital</option>
          </select>

          <select
            name="integration_needs"
            className="w-full bg-gray-800 text-white border-gray-700 rounded-xl py-2 px-3"
            required
          >
            <option value="">Choose Primary Integration Need</option>
            <option value="purchase_data">Purchase Data Access</option>
            <option value="nutrition_api">Nutrition Intelligence API</option>
            <option value="ml_insights">ML-Powered Insights</option>
            <option value="white_label">White-Label Solutions</option>
            <option value="custom">Custom Infrastructure</option>
            <option value="other">Other (N/A)</option>
          </select>

          <textarea
            name="message"
            placeholder="Tell us about your platform integration goals"
            className="w-full bg-gray-800 text-white border-gray-700 rounded-xl py-2 px-3 h-24"
            required
          ></textarea>

          <Button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-xl transition-colors"
          >
            Request Early Access
          </Button>

          <p className="text-gray-400 text-sm text-center">
            Currently prioritizing strategic platform partners
          </p>
        </form>
      </div>
    </div>
  );
};

export default DemoRequestPopup;
