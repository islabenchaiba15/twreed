"use client"
import {
    FlaskConical,
    BriefcaseBusiness,
    Home,
    Gift,
    Package,
    Gem,
    Car,
    Factory,
    Leaf,
    Headphones,
    Gamepad2,
    Cog,
    Target,
    CreditCard,
    Sofa,
    Wrench
  } from "lucide-react"
  const categories = [
    { icon: BriefcaseBusiness, label: "Business Services" },
    { icon: FlaskConical, label: "Apparel & Accessories" },
    { icon: Home, label: "Home & Garden" },
    { icon: Gift, label: "Beauty" },
    { icon: Package, label: "Packaging & Printing" },
    { icon: Gem, label: "Jewelry" },
    { icon: Car, label: "Vehicle Parts & Accessories" },
    { icon: Factory, label: "Industrial Machinery" },
    { icon: Leaf, label: "Environment" },
    { icon: Headphones, label: "Sports & Electronics" },
    { icon: Gamepad2, label: "Sports & Entertainment" },
    { icon: Cog, label: "Equipment & Machinery" },
    { icon: Target, label: "Fitness & Toys" },
    { icon: CreditCard, label: "Sports & Accessories" },
    { icon: Sofa, label: "Furniture" },
    { icon: Wrench, label: "Tools & Hardware" }
  ]
  
 const CategoriesGrid=()=>{
    return (
      <div className="container mx-auto px-4 pb-20 pt-10">
        <h2 className="text-xl font-semibold text-orange-500 mb-6">Catégories proposées</h2>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mb-2">
                  <IconComponent className="w-6 h-6 text-gray-600" />
                </div>
                <span className="text-xs text-gray-600 max-w-[80px]">{category.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  export default CategoriesGrid
