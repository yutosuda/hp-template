import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* ページヘッダー */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">実績・事例</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          これまでに手がけたプロジェクトの成果と、お客様からいただいた評価をご紹介します
        </p>
      </div>

      {/* 実績概要 */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <Card>
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <p className="text-muted-foreground">プロジェクト完了数</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">顧客満足度</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">4年</div>
              <p className="text-muted-foreground">平均事業歴</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-primary mb-2">30%</div>
              <p className="text-muted-foreground">平均売上向上率</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* プロジェクト事例 */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">プロジェクト事例</h2>
          <p className="text-muted-foreground">
            様々な業界でのプロジェクト成功事例をご紹介します
          </p>
        </div>

        <div className="space-y-12">
          {/* 事例1 */}
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8">
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">製造業A社</h3>
                  <p className="text-blue-100 mb-4">業務プロセス改善プロジェクト</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>期間:</span>
                      <span>6ヶ月</span>
                    </div>
                    <div className="flex justify-between">
                      <span>規模:</span>
                      <span>従業員200名</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 p-8">
                <h4 className="text-xl font-bold mb-4">課題と解決策</h4>
                <div className="space-y-4 mb-6">
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">課題</h5>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>生産ラインでの無駄な待機時間が多発</li>
                      <li>品質管理プロセスが非効率</li>
                      <li>在庫管理の精度が低い</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-600 mb-2">解決策</h5>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>生産ライン全体の可視化とボトルネック特定</li>
                      <li>品質管理システムの導入と標準化</li>
                      <li>リアルタイム在庫管理システムの構築</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-600 mb-2">成果</h5>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>生産効率25%向上</li>
                      <li>品質不良率50%削減</li>
                      <li>在庫コスト20%削減</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* 事例2 */}
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 lg:order-3">
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">IT企業B社</h3>
                  <p className="text-green-100 mb-4">新規事業開発支援</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>期間:</span>
                      <span>12ヶ月</span>
                    </div>
                    <div className="flex justify-between">
                      <span>規模:</span>
                      <span>従業員50名</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 p-8 lg:order-1">
                <h4 className="text-xl font-bold mb-4">課題と解決策</h4>
                <div className="space-y-4 mb-6">
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">課題</h5>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>既存事業の成長が頭打ち</li>
                      <li>新規事業のアイデアはあるが戦略が不明確</li>
                      <li>市場参入のタイミングと方法が分からない</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-600 mb-2">解決策</h5>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>市場調査と競合分析の実施</li>
                      <li>事業計画の策定とロードマップ作成</li>
                      <li>段階的な市場参入戦略の立案</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-600 mb-2">成果</h5>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>新規事業で初年度売上1億円達成</li>
                      <li>市場シェア15%獲得</li>
                      <li>全社売上40%向上</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* 事例3 */}
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-8">
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">小売業C社</h3>
                  <p className="text-purple-100 mb-4">デジタル変革プロジェクト</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>期間:</span>
                      <span>8ヶ月</span>
                    </div>
                    <div className="flex justify-between">
                      <span>規模:</span>
                      <span>店舗数30店</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 p-8">
                <h4 className="text-xl font-bold mb-4">課題と解決策</h4>
                <div className="space-y-4 mb-6">
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">課題</h5>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>オンライン販売への対応が遅れている</li>
                      <li>顧客データの活用ができていない</li>
                      <li>店舗間での情報共有が非効率</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-600 mb-2">解決策</h5>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>ECサイト構築とオムニチャネル戦略</li>
                      <li>CRMシステム導入と顧客分析</li>
                      <li>統合POSシステムの導入</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-600 mb-2">成果</h5>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>オンライン売上が全体の30%に</li>
                      <li>顧客単価20%向上</li>
                      <li>業務効率35%改善</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">お客様の声</h2>
          <p className="text-muted-foreground">
            プロジェクトを通じてお客様からいただいた評価をご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <blockquote className="text-lg mb-4">
                &ldquo;期待以上の成果を得ることができました。専門的なアドバイスと迅速な対応に感謝しています。&rdquo;
              </blockquote>
              <footer className="text-sm text-muted-foreground">
                <strong>製造業A社</strong><br />
                代表取締役 田中様
              </footer>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <blockquote className="text-lg mb-4">
                &ldquo;新規事業が想定以上の成功を収めました。戦略立案から実行まで一貫したサポートが素晴らしかったです。&rdquo;
              </blockquote>
              <footer className="text-sm text-muted-foreground">
                <strong>IT企業B社</strong><br />
                事業部長 佐藤様
              </footer>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <blockquote className="text-lg mb-4">
                &ldquo;デジタル化により業務が大幅に効率化されました。従業員の満足度も向上しています。&rdquo;
              </blockquote>
              <footer className="text-sm text-muted-foreground">
                <strong>小売業C社</strong><br />
                店舗運営部 鈴木様
              </footer>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <blockquote className="text-lg mb-4">
                &ldquo;プロジェクトの進行がスムーズで、結果も素晴らしいものでした。また依頼したいと思います。&rdquo;
              </blockquote>
              <footer className="text-sm text-muted-foreground">
                <strong>サービス業D社</strong><br />
                マネージャー 高橋様
              </footer>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <blockquote className="text-lg mb-4">
                &ldquo;コストパフォーマンスが非常に良く、投資対効果を実感できました。&rdquo;
              </blockquote>
              <footer className="text-sm text-muted-foreground">
                <strong>商社E社</strong><br />
                取締役 山田様
              </footer>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <blockquote className="text-lg mb-4">
                &ldquo;チーム全体のスキルアップにもつながり、長期的な価値を感じています。&rdquo;
              </blockquote>
              <footer className="text-sm text-muted-foreground">
                <strong>建設業F社</strong><br />
                部長 伊藤様
              </footer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 業界別実績 */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">業界別実績</h2>
          <p className="text-muted-foreground">
            様々な業界でのプロジェクト実績をご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardHeader>
              <CardTitle>製造業</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">45</div>
              <p className="text-muted-foreground">プロジェクト</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle>IT・通信</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">38</div>
              <p className="text-muted-foreground">プロジェクト</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle>小売・サービス</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">42</div>
              <p className="text-muted-foreground">プロジェクト</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CardTitle>その他</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">25</div>
              <p className="text-muted-foreground">プロジェクト</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-8 pb-8">
            <h2 className="text-3xl font-bold mb-4">
              あなたのプロジェクトも成功させませんか？
            </h2>
            <p className="text-xl mb-6 opacity-90">
              無料相談で、あなたの課題解決方法をご提案いたします
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                  無料相談を申し込む
                </Button>
              </Link>
              <Link href="/downloads">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  事例集をダウンロード
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
} 