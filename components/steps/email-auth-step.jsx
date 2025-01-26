"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSignupForm } from "@/contexts/signup-form-context"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

export function EmailAuthStep() {
  const { data, setFormData, nextStep, prevStep } = useSignupForm()
  const [email, setEmail] = useState(data.email)
  const [password, setPassword] = useState(data.password)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({ email, password })
    nextStep()
  }

  return (
    <div className="space-y-6 w-full max-w-sm">
      <Button variant="ghost" className="flex items-center gap-2" onClick={prevStep}>
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Continue with your email</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
          Continue
        </Button>
      </form>
    </div>
  )
}

