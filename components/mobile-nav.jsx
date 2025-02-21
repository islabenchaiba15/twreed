import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { SidebarNav } from "./sidebar-nav"
import { sidebarNavItems } from "@/app/settings/layout";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 h-screen bg-white shadow-lg">
        <SheetHeader className="mb-4 border-b pb-2">
          <SheetTitle className="text-lg font-semibold">Settings</SheetTitle>
        </SheetHeader>
        <SidebarNav items={sidebarNavItems} className="p-2" />
      </SheetContent>
    </Sheet>
  );
}
