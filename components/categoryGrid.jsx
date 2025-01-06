'use client';

import { useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { categoriestwo } from '@/lib/constants';
import Image from 'next/image';

function CategoryGrid() {
  const [activeTab, setActiveTab] = useState('best-sellers');

  const tabs = [
    { id: 'best-sellers', label: 'Best sellers' },
    { id: 'best-rating', label: 'Best rating' },
    { id: 'trending', label: 'Trending' }
  ];

  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return 'bg-amber-400';
      case 2:
        return 'bg-gray-300';
      case 3:
        return 'bg-amber-600';
      default:
        return 'bg-gray-200';
    }
  };

  const filteredCategories = useMemo(() => {
    return categoriestwo.map(category => {
      let sortedItems = [...category.items];
      
      switch (activeTab) {
        case 'best-sellers':
          sortedItems.sort((a, b) => b.sales - a.sales);
          break;
        case 'best-rating':
          sortedItems.sort((a, b) => {
            const ratingA = parseFloat(a.rating);
            const ratingB = parseFloat(b.rating);
            return ratingB - ratingA;
          });
          break;
        case 'trending':
          sortedItems = sortedItems.filter(item => item.trending);
          sortedItems.sort((a, b) => b.sales - a.sales);
          break;
      }

      sortedItems = sortedItems.map((item, index) => ({
        ...item,
        rank: index + 1
      }));

      return {
        ...category,
        items: sortedItems
      };
    });
  }, [activeTab]);

  return (
    <div className="container mx-auto p-6">
      {/* Tabs */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Par catégorie</h2>
        <Link 
          href="#" 
          className="text-[#FF6B2C] flex items-center no-underline hover:underline"
        >
          Voir plus <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
      <div className="mb-6">
        <div className="flex gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full border-none cursor-pointer font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#FF6B2C] text-white'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Header */}
      

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredCategories.map((category, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg p-4 shadow">
            <h3 className="font-semibold mb-4 pb-4 border-b border-gray-200">{category.title}</h3>
            <div className="space-y-3">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className={`flex items-center gap-3 transition-opacity duration-300 ${
                  activeTab === 'trending' && !item.trending ? 'opacity-50' : 'opacity-100'
                }`}>
                  <div className="relative">
                    <Image src={"/slide1.jpg"} alt={item.name} width={70} height={70} className="rounded-lg aspect-square" />
                    <div className={`absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-semibold ${getRankColor(item.rank)}`}>
                      #{item.rank}
                    </div>
                  </div>
                  <div>
                    <p className="text-md">{item.name}</p>
                    <p className="text-md text-gray-500">
                      {item.rating}
                      {activeTab === 'best-sellers' && ` • ${item.sales} sales`}
                      {item.trending && activeTab === 'trending' && ' • 🔥 Trending'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryGrid;

