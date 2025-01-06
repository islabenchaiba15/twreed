'use client'

import Image from 'next/image'
import { Heart, ChevronLeft, ChevronRight, HeartIcon as HeartFilled } from 'lucide-react'
import { useState } from 'react'

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  
  const images = [
    '/slide1.jpg',
    '/slide1.jpg',
    '/slide1.jpg',
    '/slide1.jpg',
    '/slide1.jpg',

  ]

  const colorVariants = [
    { id: 1, color: 'Silver/Blue',img:"/slide1.jpg" },
    { id: 2, color: 'Black' ,img:"/slide1.jpg"},
    { id: 3, color: 'Rose Gold',img:"/slide1.jpg" },
    { id: 4, color: 'Silver',img:"/slide1.jpg" },
    { id: 5, color: 'Brown',img:"/slide1.jpg" },
    { id: 6, color: 'White',img:"/slide1.jpg" },
  ]

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen bg-white container mx-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-xl font-medium mb-2">
            Montre à quartz sur mesure boîtier en acier inoxydable 316L avec BGW9 lumineux sur les aiguilles saphir étanche Date automatique
          </h1>
          
          <div className="flex items-center gap-2 mb-6">
            <div className=" p-1.5 rounded ">
              <Image
                src="/slide1.jpg"
                alt="Shop logo"
                width={45}
                height={45}
                className="rounded aspect-square object-cover"
              />
            </div>
            <span className="font-medium">Zixo Shop</span>
            <span className="text-green-600">✓ Verified</span>
            <span className="text-yellow-400">★★★★★</span>
          </div>

          <div className="text-sm text-gray-500 mb-8">
            Aucun avis pour l&apos;instant
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative">
              <div className="sticky top-0 flex flex-col sm:flex-row gap-4">
                <div className="flex sm:flex-col gap-2 order-2 sm:order-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      className={`border-2 rounded-lg overflow-hidden w-16 h-16 ${
                        selectedImage === idx ? 'border-blue-500' : 'border-transparent'
                      }`}
                      onClick={() => setSelectedImage(idx)}
                    >
                      <Image
                        src={img}
                        alt={`Product view ${idx + 1}`}
                        width={64}
                        height={64}
                        className="object-cover aspect-square"
                      />
                    </button>
                  ))}
                </div>
                
                <div className="relative flex-1 order-1 sm:order-2">
                  <div className="relative group">
                    <Image
                      src={images[selectedImage]}
                      alt="Product main view"
                      width={600}
                      height={600}
                      className="w-full rounded-lg"
                    />
                    <button 
                      className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-lg transition-colors hover:bg-gray-100"
                      onClick={() => setIsFavorite(!isFavorite)}
                      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                    >
                      {isFavorite ? (
                        <HeartFilled className="w-6 h-6 text-red-500" />
                      ) : (
                        <Heart className="w-6 h-6" />
                      )}
                    </button>
                    
                    {/* Navigation Buttons */}
                    <button 
                      onClick={previousImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 border p-6 rounded-lg">
              <div className='border-b pb-2 '>
                <div className="text-sm font-medium mb-1">Minimum:</div>
                <div className="text-lg font-semibold">200 pieces</div>
              </div>

              <div className='border-b pb-4 '>
                <div className="text-sm font-medium mb-3">Prix</div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  <div>
                    <div className="text-sm text-gray-500">10 - 99 pièce</div>
                    <div className="text-xl font-semibold">262,27 DA</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">100 - 499 pièce</div>
                    <div className="text-xl font-semibold">243,12 DA</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">500 - 999998 pièce</div>
                    <div className="text-xl font-semibold">221,02 DA</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{'>='} 999999 pièce</div>
                    <div className="text-xl font-semibold">144,40 DA</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium mb-3">Couleur(21): style1</div>
                <div className="flex gap-2 items-center">
                  {colorVariants.map((variant) => (
                    <div
                      key={variant.id}
                      className="w-10 h-10 cursor-pointer active:scale-110 focus:border-2 focus:border-orange-500 border rounded-lg overflow-hidden flex-shrink-0"
                    >
                      <Image
                        src={variant.img}
                        alt={variant.color}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <span className="text-sm text-gray-500">+14</span>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium mb-2">Livraison</div>
                <div className="space-y-1">
                  <div className="flex justify-start gap-2 text-sm">
                    <span>Yalidine:</span>
                    <span className="font-semibold">1500da</span>
                  </div>
                  <div className="flex justify-start gap-2 text-sm">
                    <span>Kazitour:</span>
                    <span className="font-semibold">1200da</span>
                  </div>
                </div>
              </div>

              <button className="w-fit px-6 bg-[#ff6b00] text-white py-3.5 rounded-full font-medium hover:bg-[#ff5500] transition-colors">
                Contacter le vendeur
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
