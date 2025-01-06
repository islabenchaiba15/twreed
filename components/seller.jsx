"use client"
import React, { useState } from 'react'
import SellerToggle from './sellerToggle'
import TrustedSellerCard from './trustedSellerCard'

function Seller() {
    const [isSeller, setIsSeller] = useState(true)

    return (
      <main className="min-h-screen bg-[#0A1929] text-white px-6 py-12 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-orange-500 font-medium mb-4">POURQUOI TWREED ?</h2>
            <h1 className="text-3xl md:text-4xl font-semibold mb-8">
              Une plateforme pour tous vos besoins
            </h1>
            <SellerToggle isSeller={isSeller} setIsSeller={setIsSeller} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 7 }).map((_, index) => (
              <TrustedSellerCard key={index} type={isSeller ? "Seller" : "Buyer"} />
            ))}
          </div>
        </div>
      </main>
    )
}

export default Seller