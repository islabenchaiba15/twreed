"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSignupForm } from "@/contexts/signup-form-context"
import { Apple, Facebook } from "lucide-react"

export function AuthStep() {
  const { data, setFormData, nextStep } = useSignupForm()

  const handleSubmit = (e) => {
    e.preventDefault()
    nextStep()
  }

  return (
    <div className="space-y-6 w-full max-w-sm">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">Create a new account</h2>
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <a href="#" className="text-orange-500">
            Sign in
          </a>
        </p>
      </div>
      <div className="grid gap-2">
        <Button variant="outline" className="w-full">
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </Button>
        <Button variant="outline" className="w-full">
          <Apple className="mr-2 h-4 w-4" />
          Continue with Apple
        </Button>
        <Button variant="outline" className="w-full">
          <Facebook className="mr-2 h-4 w-4" />
          Continue with Facebook
        </Button>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setFormData({ email: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setFormData({ password: e.target.value })}
        />
        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
          Continue
        </Button>
      </form>
    </div>
  )
}

