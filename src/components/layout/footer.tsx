import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company Name</h3>
            <p className="text-sm text-muted-foreground">
              お客様のビジネスを成功に導くパートナーとして、
              最高品質のサービスを提供いたします。
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">サイトマップ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  会社情報
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  事業内容
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  実績・事例
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">サービス</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/downloads" className="text-muted-foreground hover:text-foreground transition-colors">
                  資料ダウンロード
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">お問い合わせ</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>〒000-0000</p>
              <p>東京都○○区○○ 1-2-3</p>
              <p>TEL: 03-0000-0000</p>
              <p>Email: info@company.com</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 