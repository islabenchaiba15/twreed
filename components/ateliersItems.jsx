"use client";

import { ArrowRight, BadgeCheck } from 'lucide-react';
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { companies } from "@/lib/constants";
import VRImageSlider from "./imageSlideVr";

function AteliersItems() {
  return (
    <div className="container mx-auto p-4">
      {companies.map((company, idx) => (
        <div key={idx} className="bg-white rounded-lg p-4 shadow-sm border border-gray-300 mb-4">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
            {/* Left Section - Company Info */}
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <img 
                  src={company.image} 
                  alt={company.name} 
                  className="w-12 h-12 object-cover rounded-md" 
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold cursor-pointer hover:underline mb-2">
                    {company.name}
                  </h3>
                  
                  {/* Company Stats */}
                  <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1 italic">
                      <BadgeCheck color="blue" size={14}/>verified
                    </span>
                    <span>{company.stats.years}</span>
                    <span>{company.stats.personnel}</span>
                    <span>{company.stats.area}</span>
                    <span>{company.stats.revenue}</span>
                  </div>
                </div>
              </div>

              {/* Rating Section */}
              <div className="mb-4">
                <div className="mb-1">
                  <span className="font-medium">Note et avis</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <span className="font-semibold">{company.rating}/5</span>
                  <span className="text-sm font-medium hover:underline text-gray-500">
                    ({company.reviews})
                  </span>
                </div>
              </div>

              {/* Capabilities */}
              <div>
                <h4 className="font-medium mb-2">Capacités d'usine</h4>
                <ul className="space-y-1">
                  {company.capabilities.map((capability, index) => (
                    <li key={index} className="text-sm font-semibold text-black">
                      • {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Section - Images & Contact Button */}
            <div className="flex flex-col items-end gap-4">
  <div className="w-full flex justify-end">
    <button className="bg-[#FF6B2C] text-white px-6 py-2 rounded-full hover:bg-[#ff5a13] transition-colors">
      Contacter l'atelier
    </button>
  </div>
  
  {/* Product Images Grid - Responsive Layout */}
  <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-2 w-full">
    {company.products.map((product, index) => (
      <div key={index} className="w-full max-w-[150px]">
        {product.isVR ? (
          <div className="aspect-square">
            <VRImageSlider />
          </div>
        ) : (
          <div className="group cursor-pointer">
            <div className="relative aspect-square overflow-hidden rounded-md">
              <img
                src={`/slide1.jpg`}
                alt={product.id}
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
              />
            </div>
            <div className="text-black p-2 text-sm">
              <div className="font-semibold truncate">{product.id}</div>
              {product.minOrder && (
                <div className="text-xs text-gray-500">{product.minOrder}</div>
              )}
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AteliersItems;