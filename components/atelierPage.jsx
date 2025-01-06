"use client";

import { useState } from "react";
import { ChevronsUpDown, ChevronUp, StarIcon, XCircle } from "lucide-react";
import CompanyList from "./companyList";
import AteliersItems from "./ateliersItems";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";

function AtelierPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('prix'); // Default selected filter

  const filters = [
    { id: 'pertinence', label: 'Pertinence' },
    { id: 'commandes', label: 'Commandes' },
    { id: 'prix', label: 'Prix' }
  ];
  return (
    <div className="min-h-screen bg-white container mx-auto mt-5">
      {/* Mobile Filter Button */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="bg-[#FF6B2C] text-white px-4 py-2 rounded-full shadow-lg"
        >
          Filtres
        </button>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? 'fixed inset-0 z-50' : 'hidden'
          } lg:relative lg:block lg:w-64 bg-white border-r`}
        >
          {/* Mobile Close Button */}
          <div className="lg:hidden absolute right-4 top-4">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-500"
            >
              <XCircle size={24} />
            </button>
          </div>

          <div className="p-4">
            <h2 className="text-xl font-semibold mb-6">Filtres</h2>

            {/* Rating Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Avis sur la boutique</h3>
              <div className="space-y-2">
                {[4.0, 4.5].map((rating) => (
                  <Label
                  htmlFor="terms" key={rating} className="flex items-center gap-2 roun">
                     <Checkbox id="terms"     className="peer w-4 h-4 rounded-full border-gray-300 text-[#FF6B2C] focus:ring-[#FF6B2C] checked:bg-[#FF6B2C] checked:border-[#FF6B2C]"                     />
                    <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{rating} et plus</span>
                  </Label>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">CATÉGORIE</h3>
              <div className="space-y-3">
                {[
                  "Montres au Quartz",
                  "Montres intelligentes",
                  "Montres mécaniques",
                  "Montres électroniques",
                  "Autres montres"
                ].map((category) => (
                  <Label htmlFor="term" key={category} className="flex items-center gap-2">
                     <Checkbox id="term"className="peer w-4 h-4 rounded-full"                     />
                     <span>{category}</span>
                  </Label>
                ))}
              </div>
            </div>

            {/* Minimum Order Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Commande minimum</h3>
              <input
                type="number"
                placeholder="OK"
                className="w-20 px-2 py-1 border rounded"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:max-w-[calc(100%-16rem)]">
          {/* Sort Header */}
          <div className="bg-white p-4 border-b">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Left side - Filter display text */}
          <span className="text-sm text-gray-500">
            Affichage des détails pour « vos filtres »
          </span>

          {/* Right side - Sort options */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600 mr-2">Trier par:</span>
            <div className="flex items-center space-x-1">
              {filters.map((filter) => (
                <button 
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`
                    px-3 py-1.5 rounded-md flex items-center
                    transition-colors
                    ${selectedFilter === filter.id 
                      ? 'bg-[#FF6B2C]/10 text-[#FF6B2C] border border-[#FF6B2C]' 
                      : 'text-gray-600 hover:bg-gray-100'
                    }
                  `}
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

          {/* Company List */}
          <Link href="/product/1" >
          <AteliersItems  />
          </Link>
          <Link href="/product/1" >
          <AteliersItems  />
          </Link>  <Link href="/product/1" >
          <AteliersItems  />
          </Link>

        </div>
      </div>
    </div>
  );
}

export default AtelierPage;