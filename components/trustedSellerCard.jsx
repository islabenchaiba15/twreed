import { Square } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

 const TrustedSellerCard=({type})=>{
  return (
    <Card className="bg-white hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="mb-4">
          <Square className="h-6 w-6 text-gray-800" />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800">Trusted {type}s</h3>
        <p className="text-sm text-gray-600">
          Connect with verified {type.toLowerCase()}s for secure transactions
        </p>
      </CardContent>
    </Card>
  )
}
  export default TrustedSellerCard