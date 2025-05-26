import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-gray-900">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700">ページが見つかりません</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            お探しのページは存在しないか、移動された可能性があります。
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/">
              ホームに戻る
            </Link>
          </Button>
          
          <div className="text-sm text-gray-500">
            <p>または以下のページをご覧ください：</p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Link href="/about" className="text-blue-600 hover:underline">
                会社情報
              </Link>
              <Link href="/services" className="text-blue-600 hover:underline">
                サービス
              </Link>
              <Link href="/portfolio" className="text-blue-600 hover:underline">
                実績・事例
              </Link>
              <Link href="/contact" className="text-blue-600 hover:underline">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 