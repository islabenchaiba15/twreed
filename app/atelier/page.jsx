import AtelierPage from '@/components/atelierPage'
import { BreadcrumbWithCustomSeparator } from '@/components/breadCump'
import Navbar from '@/components/navbar'
import NavbarVtwo from '@/components/navbarVtwo'
import React from 'react'

function page() {
  return (
    <div>
        <NavbarVtwo/>
        <BreadcrumbWithCustomSeparator/>
        <AtelierPage/>
    </div>
  )
}

export default page