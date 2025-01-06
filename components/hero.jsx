"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';
import { searchTabs } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Navbar from './navbar';

export default function SearchSection({activeTab, setActiveTab}) {
  const [searchQuery, setSearchQuery] = useState('');

  const getPlaceholder = (tab) => {
    const placeholders = {
      products: 'Rechercher un produit',
      atelier: 'Rechercher un atelier',
      services: 'Rechercher un service'
    };
    return placeholders[tab];
  };

  const getContent = (tab) => {
    const content = {
      products: "Découvrez notre sélection de produits exclusifs",
      atelier: "Explorez nos ateliers créatifs et innovants",
      services: "Consultez nos services professionnels"
    };
    return content[tab];
  };

  return (
    <div className="relative ">
    <div className="absolute top-0 left-0 right-0"></div> {/* Use the imported Navbar component */}
    
    <div className="relative h-[500px]">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80')"
        }}
      />
      <Navbar/>
      <div className="absolute inset-0 bg-black opacity-70 z-10" />
      <div className="relative z-20 h-full flex flex-col -mt-10  justify-center px-4">
        <div className="w-full max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            {searchTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-8 py-3 text-white text-lg font-medium transition-all", // Increased text size and padding
                  "hover:text-[#FF6B2C]",
                  activeTab === tab.id
                    ? "border-b-2 border-[#FF6B2C]"
                    : "border-b-2 border-transparent"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={getPlaceholder(activeTab)}
              className="w-full px-6 py-4 pr-12 text-lg rounded-full border-2 border-[#FF6B2C] focus:outline-none focus:ring-2 focus:ring-[#FF6B2C] focus:border-transparent"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#FF6B2C] text-white hover:bg-[#ff5a13] transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  );
}