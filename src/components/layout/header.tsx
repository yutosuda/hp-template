"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Company Name</span>
          </Link>
        </div>
        
        <nav className="flex items-center h-16">
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

        <div className="flex items-center space-x-4">
          <Link href="/contact">
            <Button>お問い合わせ</Button>
          </Link>
        </div>
      </div>
    </header>
  )
} 