"use client"

import { Button } from "@/components/ui/button"
import { useSignupForm } from "@/contexts/signup-form-context"
import { ArrowLeft } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export function PurposeStep() {
  const { data, setFormData, nextStep, prevStep } = useSignupForm()

  return (
    <div className="space-y-6 w-full max-w-lg">
      <Button variant="ghost" className="flex items-center gap-2" onClick={prevStep}>
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">
          {data.username}, your account has been created! What brings you to Twreed?
        </h2>
        <p className="text-sm text-muted-foreground">We want to tailor your experience so you'll feel right at home.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <button
          className={`p-6 border rounded-lg text-left space-y-4 hover:border-orange-500 transition-colors ${
            data.accountType === "buying" ? "border-orange-500" : ""
          }`}
          onClick={() => {
            setFormData({ accountType: "buying" })
            nextStep()
          }}
        >
          <div className="relative">
            <Checkbox checked={data.accountType === "buying"} className="absolute top-1 right-1 h-4 w-4" />
            <div className="w-16 h-16 bg-slate-900 rounded-lg" />
          </div>
          <div>
            <h3 className="font-semibold">Buying products</h3>
            <p className="text-sm text-muted-foreground">I'm looking to purchase products or make custom requests.</p>
          </div>
        </button>
        <button
          className={`p-6 border rounded-lg text-left space-y-4 hover:border-orange-500 transition-colors ${
            data.accountType === "selling" ? "border-orange-500" : ""
          }`}
          onClick={() => {
            setFormData({ accountType: "selling" })
            nextStep()
          }}
        >
          <div className="relative">
            <Checkbox checked={data.accountType === "selling"} className="absolute top-1 right-1 h-4 w-4" />
            <div className="w-16 h-16 bg-slate-900 rounded-lg" />
          </div>
          <div>
            <h3 className="font-semibold">Selling / creating products</h3>
            <p className="text-sm text-muted-foreground">I'm offering products or services to buyers.</p>
          </div>
        </button>
      </div>
    </div>
  )
}

