"use client"

import { AddProductForm } from "@/components/onboarding/add-product-form"
import { LocationForm } from "@/components/onboarding/location-form"
import { MultiStepLayout } from "@/components/onboarding/multi-step-layout"
import { ShippingForm } from "@/components/onboarding/shipping-form"
import { StoreInformationForm } from "@/components/onboarding/store-information-form"
import { FormProvider } from "@/contexts/form-context"
import { useState } from "react"
// import { MultiStepLayout } from "@/components/multi-step-layout"
// import { StoreInformationForm } from "@/components/store-information-form"
// import { AddProductForm } from "@/components/add-product-form"
// import { LocationForm } from "@/components/location-form"
// import { ShippingForm } from "@/components/shipping-form"
// import { FormProvider } from "@/context/form-context"

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4))
  }

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  return (
    <FormProvider>
      <MultiStepLayout currentStep={currentStep}>
        {currentStep === 1 && <StoreInformationForm onNext={handleNext} />}
        {currentStep === 2 && <AddProductForm onNext={handleNext} onPrevious={handlePrevious} />}
        {currentStep === 3 && <LocationForm onNext={handleNext} onPrevious={handlePrevious} />}
        {currentStep === 4 && <ShippingForm onNext={handleNext} onPrevious={handlePrevious} />}
      </MultiStepLayout>
    </FormProvider>
  )
}

