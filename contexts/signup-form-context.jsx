"use client";

import { createContext, useContext, useEffect, useState } from "react";

const SignupFormContext = createContext(undefined);

const STEPS = ["auth-method", "email-auth", "email-verification", "username", "purpose", "company-size"];

const initialFormData = {
  email: "",
  password: "",
  username: "",
  accountType: null,
  companySize: null,
  otp: "",
};

export function SignupFormProvider({ children }) {
  const [data, setData] = useState(initialFormData);
  const [currentStep, setCurrentStep] = useState("auth-method");

  const setFormData = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    const currentIndex = STEPS.indexOf(currentStep);
    if (currentIndex < STEPS.length - 1) {
      setCurrentStep(STEPS[currentIndex + 1]);
    }
  };

  const prevStep = () => {
    const currentIndex = STEPS.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(STEPS[currentIndex - 1]);
    }
  };

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  const resetEmail = () => {
    setData((prev) => ({ ...prev, email: "", password: "", otp: "" }));
    setCurrentStep("email-auth");
  };

  return (
    <SignupFormContext.Provider value={{ data, currentStep, setFormData, nextStep, prevStep, goToStep, resetEmail }}>
      {children}
    </SignupFormContext.Provider>
  );
}

export const useSignupForm = () => {
  const context = useContext(SignupFormContext);
  if (!context) throw new Error("useSignupForm must be used within SignupFormProvider");
  return context;
};