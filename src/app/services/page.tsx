import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* ページヘッダー */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">事業内容・サービス</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          お客様のニーズに合わせた多様なサービスで、ビジネスの成功をサポートします
        </p>
      </div>

      {/* サービス一覧 */}
      <div className="space-y-16">
        {/* サービス A */}
        <section>
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 lg:p-12">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white text-2xl font-bold">A</span>
                    </div>
                    <h2 className="text-3xl font-bold text-blue-900">サービス A</h2>
                    <p className="text-blue-700 mt-2">包括的ソリューション</p>
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold mb-4">お客様の課題を解決する包括的なソリューション</h3>
                <p className="text-muted-foreground mb-6">
                  詳細な現状分析から戦略立案、実行支援まで、一貫したサポートを提供します。
                  お客様の事業特性を深く理解し、最適な解決策をご提案いたします。
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">主な特徴</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>徹底した現状分析と課題抽出</li>
                      <li>カスタマイズされた戦略立案</li>
                      <li>実行フェーズでの継続的サポート</li>
                      <li>成果測定と改善提案</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">対象業界</h4>
                    <p className="text-muted-foreground">製造業、IT業界、サービス業、小売業など</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button>お問い合わせ</Button>
                  </Link>
                  <Link href="/downloads">
                    <Button variant="outline">資料ダウンロード</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* サービス B */}
        <section>
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 lg:p-12 lg:order-2">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white text-2xl font-bold">B</span>
                    </div>
                    <h2 className="text-3xl font-bold text-green-900">サービス B</h2>
                    <p className="text-green-700 mt-2">業務改善・最適化</p>
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-12 lg:order-1">
                <h3 className="text-2xl font-bold mb-4">効率的な業務改善とプロセス最適化</h3>
                <p className="text-muted-foreground mb-6">
                  現状の業務プロセスを詳細に分析し、無駄を排除して効率性を向上させます。
                  デジタル化やシステム導入による業務改善もサポートいたします。
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">提供内容</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>業務プロセスの可視化と分析</li>
                      <li>ボトルネックの特定と改善案提示</li>
                      <li>システム導入支援</li>
                      <li>従業員研修とチェンジマネジメント</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">期待効果</h4>
                    <p className="text-muted-foreground">作業時間短縮、コスト削減、品質向上</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button>お問い合わせ</Button>
                  </Link>
                  <Link href="/downloads">
                    <Button variant="outline">資料ダウンロード</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* サービス C */}
        <section>
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 lg:p-12">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white text-2xl font-bold">C</span>
                    </div>
                    <h2 className="text-3xl font-bold text-purple-900">サービス C</h2>
                    <p className="text-purple-700 mt-2">成長戦略支援</p>
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold mb-4">長期的な成長戦略の立案と実行支援</h3>
                <p className="text-muted-foreground mb-6">
                  市場分析から競合調査、新規事業開発まで、持続可能な成長を実現するための
                  戦略立案と実行をトータルでサポートします。
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">サポート領域</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>市場分析と競合調査</li>
                      <li>事業戦略の策定</li>
                      <li>新規事業開発支援</li>
                      <li>マーケティング戦略立案</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">実績</h4>
                    <p className="text-muted-foreground">売上向上率平均30%、新規顧客獲得数2倍</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button>お問い合わせ</Button>
                  </Link>
                  <Link href="/downloads">
                    <Button variant="outline">資料ダウンロード</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>

      {/* 料金体系 */}
      <section className="mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">料金体系</h2>
          <p className="text-muted-foreground">
            お客様のご予算とニーズに合わせて、柔軟な料金プランをご提案いたします
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>ベーシックプラン</CardTitle>
              <CardDescription>小規模プロジェクト向け</CardDescription>
              <div className="text-3xl font-bold mt-4">¥500,000〜</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✓ 現状分析</li>
                <li>✓ 基本的な改善提案</li>
                <li>✓ 月1回の進捗確認</li>
                <li>✓ メールサポート</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-primary">
            <CardHeader className="text-center">
              <CardTitle>スタンダードプラン</CardTitle>
              <CardDescription>中規模プロジェクト向け</CardDescription>
              <div className="text-3xl font-bold mt-4">¥1,500,000〜</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✓ 詳細な現状分析</li>
                <li>✓ カスタマイズ戦略立案</li>
                <li>✓ 実行支援</li>
                <li>✓ 月2回の進捗確認</li>
                <li>✓ 電話・メールサポート</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <CardTitle>プレミアムプラン</CardTitle>
              <CardDescription>大規模プロジェクト向け</CardDescription>
              <div className="text-3xl font-bold mt-4">¥3,000,000〜</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✓ 包括的な分析・戦略立案</li>
                <li>✓ 専任チームによる支援</li>
                <li>✓ 継続的な実行サポート</li>
                <li>✓ 週1回の進捗確認</li>
                <li>✓ 24時間サポート</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            ※ 料金は案件の規模や内容により変動いたします。詳細はお問い合わせください。
          </p>
          <Link href="/contact">
            <Button size="lg">無料相談を申し込む</Button>
          </Link>
        </div>
      </section>
    </div>
  );
} 