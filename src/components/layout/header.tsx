"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="bg-black text-white px-3 py-1 rounded text-lg font-semibold">
              cron
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center h-16">
          <div className="flex items-center h-16 space-x-0">
            <Link 
              href="/" 
              className="navigation-link flex items-center justify-center h-16 px-4 text-sm font-medium transition-colors hover:text-primary"
            >
              ホーム
            </Link>
            <Link 
              href="/about" 
              className="navigation-link flex items-center justify-center h-16 px-4 text-sm font-medium transition-colors hover:text-primary"
            >
              会社情報
            </Link>
            <Link 
              href="/services" 
              className="navigation-link flex items-center justify-center h-16 px-4 text-sm font-medium transition-colors hover:text-primary"
            >
              事業内容
            </Link>
            <Link 
              href="/portfolio" 
              className="navigation-link flex items-center justify-center h-16 px-4 text-sm font-medium transition-colors hover:text-primary"
            >
              実績・事例
            </Link>
            <Link 
              href="/downloads" 
              className="navigation-link flex items-center justify-center h-16 px-4 text-sm font-medium transition-colors hover:text-primary"
            >
              資料ダウンロード
            </Link>
          </div>
        </nav>

        {/* Right side icons */}
        <div className="flex items-center space-x-2">
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

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container py-4">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                ホーム
              </Link>
              <Link 
                href="/about" 
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                会社情報
              </Link>
              <Link 
                href="/services" 
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                事業内容
              </Link>
              <Link 
                href="/portfolio" 
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                実績・事例
              </Link>
              <Link 
                href="/downloads" 
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                資料ダウンロード
              </Link>
              <Link 
                href="/contact" 
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
} 