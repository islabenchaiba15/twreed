"use client"
import { ArrowUpRight } from 'lucide-react'
import Link from "next/link"


const FeatureCard=({title, href})=>{
  return (
    <Link 
      href={href || "#"}
      className="group  relative block rounded-lg bg-[#F8F7FA] p-6 transition-colors hover:bg-[#F0EFF3] mx-4 md:mx-1"
    >
      <div className="flex items-start justify-between ">
        <div>
          <p className="text-xs md:text-sm text-muted-foreground">PARCOURIR</p>
          <h3 className="mt-2 md:text-2xl text-xl font-semibold text-slate-900">{title}</h3>
        </div>
        <ArrowUpRight className="h-5 w-5 text-slate-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </Link>
  )
}
export default FeatureCard


