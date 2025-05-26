import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DownloadsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* ページヘッダー */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">資料ダウンロード</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          弊社のサービスや実績に関する資料を無料でダウンロードいただけます。
          ご検討の際にお役立てください。
        </p>
      </div>

      {/* 資料一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 会社案内 */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">PDF</span>
            </div>
            <CardTitle>会社案内</CardTitle>
            <CardDescription>
              弊社の概要、理念、サービス内容をまとめた総合的な会社案内資料です。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p>• 会社概要・沿革</p>
                <p>• 企業理念・ビジョン</p>
                <p>• 主要サービス紹介</p>
                <p>• 代表メッセージ</p>
              </div>
              <Button asChild className="w-full">
                <a href="/documents/company-profile.pdf" download>
                  ダウンロード
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* サービス資料 */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">PDF</span>
            </div>
            <CardTitle>サービス詳細資料</CardTitle>
            <CardDescription>
              各サービスの詳細内容、料金体系、導入事例をまとめた資料です。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p>• サービス詳細説明</p>
                <p>• 料金プラン</p>
                <p>• 導入フロー</p>
                <p>• よくあるご質問</p>
              </div>
              <Button asChild className="w-full">
                <a href="/documents/service-details.pdf" download>
                  ダウンロード
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 事例集 */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">PDF</span>
            </div>
            <CardTitle>導入事例集</CardTitle>
            <CardDescription>
              実際のプロジェクト事例と成果をまとめた事例集です。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p>• 業界別事例紹介</p>
                <p>• 課題と解決策</p>
                <p>• 具体的な成果</p>
                <p>• お客様の声</p>
              </div>
              <Button asChild className="w-full">
                <a href="/documents/case-studies.pdf" download>
                  ダウンロード
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 料金表 */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">PDF</span>
            </div>
            <CardTitle>料金表</CardTitle>
            <CardDescription>
              各サービスの詳細な料金体系とオプション料金をまとめた資料です。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p>• 基本料金プラン</p>
                <p>• オプション料金</p>
                <p>• 割引制度</p>
                <p>• 支払い条件</p>
              </div>
              <Button asChild className="w-full">
                <a href="/documents/pricing.pdf" download>
                  ダウンロード
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 技術資料 */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">PDF</span>
            </div>
            <CardTitle>技術資料</CardTitle>
            <CardDescription>
              弊社の技術的なアプローチや方法論をまとめた専門資料です。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p>• 技術的アプローチ</p>
                <p>• 方法論・フレームワーク</p>
                <p>• ツール・システム</p>
                <p>• 品質管理体制</p>
              </div>
              <Button asChild className="w-full">
                <a href="/documents/technical-overview.pdf" download>
                  ダウンロード
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* セミナー資料 */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2m-9 0V4" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">PDF</span>
            </div>
            <CardTitle>セミナー資料</CardTitle>
            <CardDescription>
              過去に開催したセミナーの資料をまとめたものです。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <p>• 業界トレンド分析</p>
                <p>• 成功事例の紹介</p>
                <p>• 実践的なノウハウ</p>
                <p>• Q&Aセッション</p>
              </div>
              <Button asChild className="w-full">
                <a href="/documents/seminar-materials.pdf" download>
                  ダウンロード
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 注意事項 */}
      <div className="mt-16">
        <Card>
          <CardHeader>
            <CardTitle>ダウンロードに関する注意事項</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground">
              <h4 className="font-semibold text-foreground mb-2">利用規約</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>ダウンロードした資料は、お客様の社内検討目的でのみご利用ください。</li>
                <li>資料の内容を無断で複製、転載、配布することは禁止されています。</li>
                <li>資料の内容は予告なく変更される場合があります。</li>
                <li>最新の情報については、直接お問い合わせください。</li>
              </ul>
            </div>
            <div className="text-sm text-muted-foreground">
              <h4 className="font-semibold text-foreground mb-2">技術的な要件</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>PDFファイルの閲覧には、Adobe Acrobat Reader等のPDFビューアが必要です。</li>
                <li>ファイルサイズは1〜5MB程度です。</li>
                <li>ダウンロードに問題がある場合は、お問い合わせください。</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <Card className="bg-muted/50">
          <CardContent className="pt-8 pb-8">
            <h2 className="text-2xl font-bold mb-4">
              資料についてご質問がございますか？
            </h2>
            <p className="text-muted-foreground mb-6">
              資料の内容についてご不明な点や、より詳細な情報をご希望の場合は、
              お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-3">
                  お問い合わせ
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  サービス詳細を見る
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 