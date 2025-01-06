import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'

function ProductsCard({imageUrl,price,minOrder,index}) {
  return (
    <Card className="bg-white cursor-pointer" key={index}>
      <div className="aspect-square relative ">
        <Image
          src={imageUrl}
          alt="Product image"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <CardContent className="p-4">
        <p className="font-medium">{price}</p>
        <p className="text-sm text-muted-foreground">
          Min. order: {minOrder} pieces
        </p>
      </CardContent>
    </Card>
  )
}

export default ProductsCard