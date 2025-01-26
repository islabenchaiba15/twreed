"use client";

import { Button } from "@/components/ui/button";
import { useSignupForm } from "@/contexts/signup-form-context";
import { ArrowLeft, Building, Building2, Home, Users } from "lucide-react";

const COMPANY_SIZES = [
  { value: "just-me", label: "Just me", icon: Home },
  { value: "2-10", label: "2 - 10", icon: Building },
  { value: "11-50", label: "11 - 50", icon: Building2 },
  { value: "51-500", label: "51 - 500", icon: Building },
  { value: "500-plus", label: "500+", icon: Users },
];

export function CompanySizeStep() {
  const { data, setFormData, prevStep } = useSignupForm();

  const handleSubmit = (size) => {
    setFormData({ companySize: size });
    
    console.log("Form submitted:", { ...data, companySize: size });
  };

  return (
    <div className="space-y-6 w-full max-w-lg">
      <div className="flex justify-between items-center">
        <Button variant="ghost" className="flex items-center gap-2" onClick={prevStep}>
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button variant="ghost" onClick={() => handleSubmit(null)}>
          Skip
        </Button>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">How many people work at your company?</h2>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
        {COMPANY_SIZES.map(({ value, label, icon: Icon }) => (
          <button
            key={value}
            className={`p-4 border rounded-lg text-center space-y-2 hover:border-orange-500 transition-colors ${
              data.companySize === value ? "border-orange-500" : ""
            }`}
            onClick={() => handleSubmit(value)}
          >
            <div className="mx-auto w-12 h-12 flex items-center justify-center">
              <Icon className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium block">{label}</span>
          </button>
        ))}
      </div>
      <p className="text-xs text-red-500 text-right">If selected turns to finish</p>
    </div>
  );
}