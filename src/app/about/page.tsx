import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
            <div className="container py-16">
      {/* ページヘッダー */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">会社情報</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          私たちの企業理念と歩みをご紹介いたします
        </p>
      </div>

      {/* 会社概要 */}
      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">会社概要</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">会社名</h3>
                  <p className="text-muted-foreground">株式会社 Company Name</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">代表取締役</h3>
                  <p className="text-muted-foreground">山田 太郎</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">設立年月日</h3>
                  <p className="text-muted-foreground">2020年4月1日</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">資本金</h3>
                  <p className="text-muted-foreground">1,000万円</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">所在地</h3>
                  <p className="text-muted-foreground">
                    〒100-0001<br />
                    東京都千代田区千代田1-1-1<br />
                    千代田ビル 10階
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">電話番号</h3>
                  <p className="text-muted-foreground">03-0000-0000</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">メールアドレス</h3>
                  <p className="text-muted-foreground">info@company.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">従業員数</h3>
                  <p className="text-muted-foreground">50名</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 企業理念 */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-center">企業理念</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                お客様の成功を第一に考え、
                持続可能な価値を創造し続けます。
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-center">ビジョン</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                革新的なソリューションで
                社会の発展に貢献する
                リーディングカンパニーを目指します。
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-center">ミッション</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                専門知識と技術力を活かし、
                お客様の課題解決と
                事業成長を支援します。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 沿革 */}
      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">沿革</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-sm font-semibold text-muted-foreground">
                  2020年4月
                </div>
                <div>
                  <p>株式会社Company Name設立</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-sm font-semibold text-muted-foreground">
                  2020年6月
                </div>
                <div>
                  <p>第1号案件受注開始</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-sm font-semibold text-muted-foreground">
                  2021年3月
                </div>
                <div>
                  <p>従業員数10名に拡大</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-sm font-semibold text-muted-foreground">
                  2022年1月
                </div>
                <div>
                  <p>新オフィスに移転</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-sm font-semibold text-muted-foreground">
                  2023年4月
                </div>
                <div>
                  <p>従業員数30名に拡大</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-sm font-semibold text-muted-foreground">
                  2024年1月
                </div>
                <div>
                  <p>従業員数50名に拡大、新サービス開始</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 主要取引先 */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">主要取引先</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 border rounded-lg">
                <p className="font-semibold">A株式会社</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold">B商事株式会社</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold">C工業株式会社</p>
              </div>
              <div className="p-4 border rounded-lg">
                <p className="font-semibold">D株式会社</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              ※ 掲載許可をいただいた企業様のみ表示しています
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
} 