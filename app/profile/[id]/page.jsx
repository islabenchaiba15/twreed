"use client"
import { useState } from "react";
import { ChevronsUpDown, Star, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import ProfileHeader from "@/components/profileHeader";
import NavbarVtwo from "@/components/navbarVtwo";
import Image from "next/image";

export default function page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('prix');

  const filters = [
    { id: 'pertinence', label: 'Pertinence' },
    { id: 'commandes', label: 'Commandes' },
    { id: 'prix', label: 'Prix' }
  ];

  const products = Array(7).fill({
    id: 1,
    title: "Armoire quatre portes",
    priceRange: "2000dzd - 2400da",
    quantity: "150",
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-4">
        <NavbarVtwo/>
        {/* Profile Section */}
        <ProfileHeader/>

        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 bg-white">
            <div className="p-4">
              {/* Categories */}
              <div className="mb-4">
                <h3 className="text-sm font-medium uppercase mb-2">CATÉGORIE</h3>
                <div className="space-y-2">
                  {[
                    "Montres au Quartz",
                    "Montres intelligentes",
                    "Montres mécaniques",
                    "Montres électroniques",
                    "Autres montres"
                  ].map((category) => (
                    <Label key={category} className="flex items-center gap-2">
                      <Checkbox className="rounded-full" />
                      <span className="text-sm">{category}</span>
                    </Label>
                  ))}
                </div>
              </div>

              {/* Minimum Order */}
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-2">Commande minimum</h3>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="w-20 px-2 py-1 border rounded text-sm"
                    placeholder="Min"
                  />
                  <button className="px-3 py-1 bg-gray-100 rounded text-sm">OK</button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Header */}
            <div className="bg-white p-4 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Affichage des détails pour « vos filtres »
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Trier par:</span>
                  <div className="flex gap-1">
                    {filters.map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => setSelectedFilter(filter.id)}
                        className={`px-3 py-1.5 rounded text-sm flex items-center ${
                          selectedFilter === filter.id
                            ? "bg-orange-50 text-orange-600 border border-orange-600"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {filter.label}
                        {selectedFilter === filter.id && (
                          <ChevronsUpDown className="w-4 h-4 ml-1" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-3 gap-4">
              {products.map((product, index) => (
                <div key={index} className="bg-white p-4 rounded">
                     <div className="bg-[#0B1A27] aspect-[4/3] relative">
                                  <Image
                                    src={"/slide1.jpg"}
                                    alt={"slide"}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                  <div className="aspect-w-4 aspect-h-3 mb-3">
                <div className="text-sm text-gray-500">Modele</div>
                <h3 className="font-semibold text-sm">{product.title}</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className='border-r border-gray-400'>
                    <div className="text-gray-700 ">Prix</div>
                    <div className='font-medium'>{product.priceRange}</div>
                    </div>
                    <div>
                    <div className="text-gray-700">Quantité</div>
                    <div className='font-medium'>{product.quantity}</div>
                    </div>
                </div>
                  </div>
                  <button className="w-full py-2 bg-orange-500 text-white rounded text-sm font-medium">
                    Details
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 rounded flex items-center justify-center ${
                    page === 2 ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}