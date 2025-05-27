import Link from "next/link"

export function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#242528' }}>
      <div className="container max-w-[1680px] py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[80px]">
          {/* 左カラム: ナビゲーション */}
          <div className="space-y-6">
            <nav className="space-y-4">
              <Link href="/" className="block text-white hover:text-gray-300 transition-colors">
                ホーム
              </Link>
              <Link href="/articles" className="block text-white hover:text-gray-300 transition-colors">
                すべての記事
              </Link>
              <Link href="/contact" className="block text-white hover:text-gray-300 transition-colors">
                お問い合わせ
              </Link>
            </nav>
          </div>
          
          {/* 中央カラム: カテゴリとタグ */}
          <div className="space-y-8">
            {/* カテゴリ */}
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-600 text-white">
                インテリア
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-600 text-white">
                デザイン
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-600 text-white">
                ライフスタイル
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-600 text-white">
                カルチャー
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-600 text-white">
                オフィス
              </span>
            </div>
            
            {/* タグ */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-3 text-sm">
                <Link href="/tags/sofa" className="text-gray-300 hover:text-white transition-colors">
                  # ソファ
                </Link>
                <Link href="/tags/chair" className="text-gray-300 hover:text-white transition-colors">
                  # チェア
                </Link>
                <Link href="/tags/table" className="text-gray-300 hover:text-white transition-colors">
                  # テーブル
                </Link>
                <Link href="/tags/bed" className="text-gray-300 hover:text-white transition-colors">
                  # ベッド
                </Link>
                <Link href="/tags/desk" className="text-gray-300 hover:text-white transition-colors">
                  # デスク
                </Link>
                <Link href="/tags/outdoor" className="text-gray-300 hover:text-white transition-colors">
                  # 屋外家具
                </Link>
                <Link href="/tags/stool" className="text-gray-300 hover:text-white transition-colors">
                  # スツール
                </Link>
              </div>
              <div className="flex flex-wrap gap-3 text-sm">
                <Link href="/tags/kids" className="text-gray-300 hover:text-white transition-colors">
                  # 子供用家具
                </Link>
              </div>
            </div>
          </div>
          
          {/* 右カラム: SNSアイコン */}
          <div className="flex justify-start lg:justify-end">
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* 下部: 会社名とフッターリンク */}
        <div className="mt-[80px] pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-gray-400 text-sm">© 2023 example All Right Reserved.</p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                プライバシーポリシー →
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                ご利用規約 →
              </Link>
              <Link href="/company" className="text-gray-400 hover:text-white transition-colors">
                会社概要 →
              </Link>
              <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                サポートセンター →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 