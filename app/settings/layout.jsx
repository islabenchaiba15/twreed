import { MobileNav } from "@/components/mobile-nav"
import NavbarVtwo from "@/components/navbarVtwo"
import { SidebarNav } from "@/components/sidebar-nav"

export const sidebarNavItems = [
  {
    title: "Account",
    href: "/settings",
  },
  {
    title: "Security",
    href: "/settings/security",
  },
  {
    title: "Seller Information",
    href: "/settings/seller",
  },
  {
    title: "Location",
    href: "/settings/location",
  },
  {
    title: "Shipping options",
    href: "/settings/shipping",
  },
]

export default function SettingsLayout({ children }) {
  return (
    <div className="flex flex-col h-screen container mx-auto">
      {/* Navbar */}
      <NavbarVtwo />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex shrink-0 border-r bg-white">
          <SidebarNav items={sidebarNavItems} className="py-6 px-4" />
        </aside>

        {/* Mobile Sidebar (Burger Menu) */}
        <div className="md:hidden">
          <MobileNav />
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
