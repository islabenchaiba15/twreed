'use client'
import { useState } from "react";
import AllProducts from "@/components/allProducts";
import CategoriesGrid from "@/components/categories";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import NewProducts from "@/components/newProducts";
import Seller from "@/components/seller";
import Services from "@/components/services";
import Image from "next/image";
import CategoryGrid from "@/components/categoryGrid";
import CompanyList from "@/components/companyList";

export default function Home() {
  const [activeTab, setActiveTab] = useState('products');
  return (
    <div>
    <Hero activeTab={activeTab} setActiveTab={setActiveTab}/>
    
    {activeTab === 'products' && (
      <>
        <NewProducts/>
        <CategoriesGrid />
        <AllProducts/>
      </>
    )}
    
    {activeTab === 'services' && (
      <>
        <Services/>
        <AllProducts/>
      </>
    )}

{activeTab === 'atelier' && (
      <>
              <CategoriesGrid />

        <CategoryGrid/>
        <CompanyList/>
      </>
    )}
    
    <Seller/>
  </div>
  );
}
