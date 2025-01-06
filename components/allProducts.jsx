import { Allproducts } from '@/lib/constants'
import React from 'react'
import ProductsCard from './productsCard'

function AllProducts() {
  return (
    <div className="p-6 bg-white container mx-auto">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold">all produits</h2>
      <a
        href="#"
        className="text-sm text-black font-medium flex items-center hover:underline"
      >
        Voir plus
        <span className="ml-1">→</span>
      </a>
    </div>
    <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4">
      {Allproducts.map((product, index) => (
          <ProductsCard
          imageUrl={product.imageUrl}
            price={product.price}
            minOrder={product.minOrder}
            index={index}
            key={index}
          />
      ))}
    </div>
  </div>
  )
}

export default AllProducts