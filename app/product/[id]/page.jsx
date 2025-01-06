import { BreadcrumbWithCustomSeparator } from '@/components/breadCump'
import NavbarVtwo from '@/components/navbarVtwo'
import { ProductDescription } from '@/components/productDescreption'
import { ProductDetails } from '@/components/productDetails'
import ProductPage from '@/components/productPage'
import { SimilarProducts } from '@/components/similarProducts'
import React from 'react'

function page() {
  return (
    <div>
        <NavbarVtwo/>
        <BreadcrumbWithCustomSeparator/>
        <ProductPage/>
        <div className="container mx-auto ">
        <SimilarProducts/>
        <ProductDescription/>
        <ProductDetails/>
        </div>
    </div>
  )
}

export default page