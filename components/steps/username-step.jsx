"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSignupForm } from "@/contexts/signup-form-context"
import { ArrowLeft } from "lucide-react"

export function UsernameStep() {
  const { data, setFormData, nextStep, prevStep } = useSignupForm()

  const handleSubmit = (e) => {
    e.preventDefault()
    nextStep()
  }

  return (
    <div className="space-y-6 w-full max-w-sm">
      <Button variant="ghost" className="flex items-center gap-2" onClick={prevStep}>
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Get your profile started</h2>
        <p className="text-sm text-muted-foreground">
          Add a username that's unique to you, this is how you'll appear to others. You can't change your username, so
          choose wisely.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Choose a username</label>
          <Input
            placeholder="john_smith"
            value={data.username}
            onChange={(e) => setFormData({ username: e.target.value })}
          />
          <p className="text-xs text-muted-foreground">Build trust by using your full name or business name</p>
        </div>
        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
          Create my account
        </Button>
      </form>
    </div>
  )
}

