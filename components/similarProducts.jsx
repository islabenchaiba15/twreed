'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function SimilarProducts() {
  const products = [
    {
      id: 1,
      title: 'Armoire quatre portes',
      priceRange: '2000dzd - 2400da',
      quantity: '150',
      image: '/slide1.jpg'
    },
    {
      id: 2,
      title: 'Armoire quatre portes',
      priceRange: '2000dzd - 2400da',
      quantity: '150',
      image: '/slide1.jpg'
    },
    {
      id: 3,
      title: 'Armoire quatre portes',
      priceRange: '2000dzd - 2400da',
      quantity: '150',
      image: '/slide1.jpg'
    },
    {
      id: 4,
      title: 'Armoire quatre portes',
      priceRange: '2000dzd - 2400da',
      quantity: '150',
      image: '/slide1.jpg'
    }
  ]

  return (
    <section className="py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Articles similaires</h2>
        <Link 
          href="#" 
          className="text-gray-500 font-semibold hover:text-gray-700 flex items-center gap-1"
        >
          Voir plus
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div 
            key={product.id}
            className="w-full bg-white rounded-lg overflow-hidden"
          >
            <div className="bg-[#0B1A27] aspect-[4/3] relative">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3 space-y-2">
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
              <button className="w-full bg-[#ff6b00] rounded-full text-white py-2 text-sm font-medium hover:bg-[#ff5500] transition-colors">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
