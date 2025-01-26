"use client"

import { SignupSidebar } from "@/components/signup-sidebar"
import { AuthMethodStep } from "@/components/steps/auth-method-step"
import { CompanySizeStep } from "@/components/steps/company-size-step"
import { EmailAuthStep } from "@/components/steps/email-auth-step"
import { EmailVerificationStep } from "@/components/steps/email-verification-step"
import { PurposeStep } from "@/components/steps/purpose-step"
import { UsernameStep } from "@/components/steps/username-step"
import { SignupFormProvider } from "@/contexts/signup-form-context"
import { useSignupForm } from "@/contexts/signup-form-context"
import { Suspense } from "react"



function StepsContent() {
    const { currentStep } = useSignupForm() || {};
  
    if (!currentStep) return null;
  
    switch (currentStep) {
      case "auth-method":
        return <AuthMethodStep />;
      case "email-auth":
        return <EmailAuthStep />;
      case "email-verification":
        return <EmailVerificationStep />;
      case "username":
        return <UsernameStep />;
      case "purpose":
        return <PurposeStep />;
      case "company-size":
        return <CompanySizeStep />;
      default:
        return null;
    }
  }
  
  export default function SignupPage() {
    return (
      <SignupFormProvider>
        <div className="flex min-h-screen">
          <SignupSidebar />
          <main className="flex-1 flex items-center justify-center p-6">
            <Suspense fallback={<div>Loading...</div>}>
              <StepsContent />
            </Suspense>
          </main>
        </div>
      </SignupFormProvider>
    );
  }