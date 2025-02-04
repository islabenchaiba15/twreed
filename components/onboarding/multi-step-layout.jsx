"use client";

import { cn } from "@/lib/utils";
import { Check, Store, Package, MapPin, Truck, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const steps = [
  {
    id: 1,
    name: "Add First Product",
    icon: Package,
  },
  {
    id: 2,
    name: "Seller Information",
    icon: Store,
  },
  {
    id: 3,
    name: "Add Location",
    icon: MapPin,
  },
  {
    id: 4,
    name: "Shipping Options",
    icon: Truck,
  },
];

function StepsList({ currentStep }) {
  return (
    <div className="px-4 py-6">
      {steps.map((step) => {
        const Icon = step.icon;
        return (
          <div
            key={step.id}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg mb-2",
              currentStep === step.id ? "bg-gray-100" : "text-gray-500 hover:bg-gray-50"
            )}
          >
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center",
                currentStep > step.id
                  ? "bg-primary text-white"
                  : currentStep === step.id
                  ? "bg-primary/10 text-primary"
                  : "bg-gray-100"
              )}
            >
              {currentStep > step.id ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
            </div>
            <span className="text-sm font-medium">{step.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export function MultiStepLayout({ currentStep, children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Mobile Sidebar */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b p-4">
          <div className="flex items-center justify-between">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99%C3%A9cran%202025-02-03%20080557-PNgGkKOZeMo7KU2tP4u4dYFTF7EiOp.png"
              alt="Logo"
              className="h-8"
            />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0">
                <SheetHeader className="p-6 border-b">
                  <SheetTitle>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99%C3%A9cran%202025-02-03%20080557-PNgGkKOZeMo7KU2tP4u4dYFTF7EiOp.png"
                      alt="Logo"
                      className="h-8"
                    />
                  </SheetTitle>
                </SheetHeader>
                <StepsList currentStep={currentStep} />
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 min-h-screen border-r bg-white">
          <div className="p-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99%C3%A9cran%202025-02-03%20080557-PNgGkKOZeMo7KU2tP4u4dYFTF7EiOp.png"
              alt="Logo"
              className="h-8"
            />
          </div>
          <StepsList currentStep={currentStep} />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-h-screen">
          <div className="max-w-3xl mx-auto py-8 px-4 lg:py-12">
            <div className="mt-16 lg:mt-0">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
