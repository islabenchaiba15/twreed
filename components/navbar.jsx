"use client"

import Link from "next/link"
import { Check, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { useState } from "react"
import { languages } from "@/lib/constants"

 const Navbar=()=> {
    const [currentLanguage, setCurrentLanguage] = useState(languages[0])
  return (
    <header className="relative z-50 w-full bg-transparent">
      <div className="container flex h-16 items-center px-4 mx-auto">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold text-white">TWREED</span>
        </Link>
        <NavigationMenu className="hidden md:flex ml-10">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <Link href="#" className="text-sm font-medium text-white transition-colors  hover:font-semibold">
                Accueil
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" className="text-sm font-medium text-white transition-colors hover:font-semibold">
                Produits
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" className="text-sm font-medium text-white transition-colors hover:font-semibold ">
                Ateliers
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" className="text-sm font-medium text-white transition-colors hover:font-semibold ">
                Services
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" className="text-sm font-medium text-white transition-colors hover:font-semibold ">
                Enchères
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4 ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className=" text-white border-transparent hover:bg-transparent hover:text-white">
                <Globe className="h-4 w-4 mr-2 text-white" />
                {currentLanguage.name}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code}
                  onClick={() => setCurrentLanguage(lang)}
                  className=""
                >
                  <span className="">{lang.name}</span>
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
export default Navbar
