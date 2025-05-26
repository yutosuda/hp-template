import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ヒーローセクション */}
      <section className="hero-section relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 md:py-28">
        <div className="container">
          <div className="hero-content flex flex-col items-center justify-center text-center px-4 md:px-8">
            <div className="max-w-5xl mx-auto space-y-8 md:space-y-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                お客様のビジネスを
                <br />
                成功に導くパートナー
              </h1>
              <p className="hero-text text-lg md:text-xl lg:text-2xl opacity-90 leading-relaxed max-w-4xl mx-auto px-4">
                最高品質のサービスで、あなたの事業の成長をサポートします
              </p>
              <div className="button-container flex flex-col sm:flex-row gap-5 md:gap-7 justify-center items-center pt-4 md:pt-6">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="text-base px-9 py-3.5 md:px-11 md:py-4.5 min-w-[190px] font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    お問い合わせ
                  </Button>
                </Link>
                <Link href="/downloads">
                  <Button size="lg" variant="outline" className="text-base px-9 py-3.5 md:px-11 md:py-4.5 min-w-[190px] font-semibold border-white text-white bg-white/20 hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300">
                    資料ダウンロード
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 事業概要セクション */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">事業概要</h2>
            <p className="text-lg text-muted-foreground">
              私たちは、お客様のビジネス課題を解決し、持続的な成長を実現するための
              包括的なソリューションを提供しています。
            </p>
          </div>
        </div>
      </section>

      {/* 強み・選ばれる理由セクション */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">選ばれる理由</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              豊富な経験と専門知識を活かし、お客様に最適なソリューションを提供します
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">豊富な実績</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  多数のプロジェクトを成功に導いた実績と経験があります。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">専門性</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  各分野の専門家が、高品質なサービスを提供します。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">サポート体制</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  プロジェクト完了後も継続的なサポートを提供します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 主要サービス紹介セクション */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">主要サービス</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              お客様のニーズに合わせた多様なサービスを提供しています
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>サービス A</CardTitle>
                <CardDescription>
                  お客様の課題を解決する包括的なソリューション
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  詳細な分析と戦略立案により、最適な解決策を提供します。
                </p>
                <Link href="/services">
                  <Button variant="outline" size="sm">
                    詳細を見る
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>サービス B</CardTitle>
                <CardDescription>
                  効率的な業務改善とプロセス最適化
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  現状分析から改善提案まで、一貫したサポートを提供します。
                </p>
                <Link href="/services">
                  <Button variant="outline" size="sm">
                    詳細を見る
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>サービス C</CardTitle>
                <CardDescription>
                  長期的な成長戦略の立案と実行支援
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  持続可能な成長を実現するための戦略をサポートします。
                </p>
                <Link href="/services">
                  <Button variant="outline" size="sm">
                    詳細を見る
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 実績・お客様の声セクション */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">お客様の声</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              多くのお客様から高い評価をいただいています
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <blockquote className="text-lg mb-4">
                  &ldquo;期待以上の成果を得ることができました。専門的なアドバイスと迅速な対応に感謝しています。&rdquo;
                </blockquote>
                <footer className="text-sm text-muted-foreground">
                  — A社 代表取締役様
                </footer>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <blockquote className="text-lg mb-4">
                  &ldquo;プロジェクトの進行がスムーズで、結果も素晴らしいものでした。また依頼したいと思います。&rdquo;
                </blockquote>
                <footer className="text-sm text-muted-foreground">
                  — B社 マネージャー様
                </footer>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button variant="outline" size="lg">
                実績・事例を見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            お気軽にお問い合わせください
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-white">
            ご質問やご相談がございましたら、お気軽にお声がけください。
            専門スタッフが丁寧に対応いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-10 py-4 bg-white text-gray-900 hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                お問い合わせフォーム
              </Button>
            </Link>
            <Link href="/downloads">
              <Button size="lg" variant="outline" className="text-lg px-10 py-4 border-white text-white bg-white/10 hover:bg-white hover:text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                会社案内をダウンロード
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
