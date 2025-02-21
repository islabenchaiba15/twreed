"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function SidebarNav({ className, items, ...props }) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "w-full md:w-[200px]  border-r p-4 rounded-lg shadow-sm",
        className
      )}
      {...props}
    >
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "block rounded-md px-4 py-2 text-sm font-medium transition-all duration-200",
                pathname === item.href
                  ? "bg-[#ff4d00] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
