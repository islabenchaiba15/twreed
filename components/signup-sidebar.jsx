import { CheckCircle2 } from "lucide-react"

export function SignupSidebar() {
  return (
    <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 text-white p-12">
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-6">Growth starts here</h1>
        <ul className="space-y-4">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="text-orange-500 h-5 w-5" />
            <span>Different product categories</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="text-orange-500 h-5 w-5" />
            <span>Connect with manufacturers</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="text-orange-500 h-5 w-5" />
            <span>Customize your orders</span>
          </li>
        </ul>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url(/slide1.jpg?height=800&width=600)",
        }}
      />
    </div>
  )
}

