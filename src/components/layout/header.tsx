"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container flex h-[90px] items-center justify-between">
        {/* Logo */}
        <div className="flex items-center pl-5">
          <Link href="/" className="flex items-center">
            <div className="bg-black text-white px-3 py-1 rounded text-lg font-semibold">
              cron
            </div>
          </Link>
        </div>
        


        {/* Right side icons */}
        <div className="flex items-center space-x-2 pr-5">
          {/* Search Icon */}
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <Search className="h-5 w-5" />
            <span className="sr-only">検索</span>
          </Button>
          
          {/* Hamburger Menu */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">メニュー</span>
          </Button>
        </div>
      </div>


    </header>
  )
} 