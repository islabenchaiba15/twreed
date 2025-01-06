"use client"

import Link from "next/link"
import { Check, Globe, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { useState } from "react"
import { languages } from "@/lib/constants"
import { Input } from "./ui/input"

 const NavbarVtwo=()=> {
    const [currentLanguage, setCurrentLanguage] = useState(languages[0])
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
  <div className="container flex h-16 items-center justify-between px-4 mx-auto">
    <Link href="/" className="mr-6 flex items-center space-x-2">
      <span className="text-xl font-bold text-black">TWREED</span>
    </Link>
    
    <div className="flex-grow mx-4 flex items-center justify-center">
      <div className="relative w-1/2">
        <Input
          type="text"
          placeholder="Search"
          className=" px-6 py-5 pr-12 text-lg rounded-full border-2 border-black focus:outline-none focus:ring-2 focus:ring-[black] focus:border-transparent"
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black text-white hover:bg-black transition-colors">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>

    <div className="flex items-center space-x-4 ml-auto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="text-black border-transparent hover:bg-transparent hover:text-black">
            <Globe className="h-4 w-4 mr-2 text-black" />
            {currentLanguage.name}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {languages.map((lang) => (
            <DropdownMenuItem 
              key={lang.code}
              onClick={() => setCurrentLanguage(lang)}
            >
              <span>{lang.name}</span>
              {currentLanguage.code === lang.code && (
                <Check className="h-4 w-4 ml-auto" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Button 
        variant="outline" 
        className="rounded-full border-[#FF6B2C] text-[#FF6B2C] hover:bg-[#FF6B2C]/10 hover:text-[#FF6B2C]"
      >
        Get the App
      </Button>
      <Button 
        className="rounded-full bg-[#FF6B2C] text-white hover:bg-[#ff5a13]"
      >
        Login
      </Button>
    </div>
  </div>
</header>
  )
}
export default NavbarVtwo
