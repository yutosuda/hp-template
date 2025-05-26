import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* ページヘッダー */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">プライバシーポリシー</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          株式会社Company Nameは、お客様の個人情報の保護に関して、以下のとおりプライバシーポリシーを定めます。
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>1. 個人情報の定義</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法第2条第1項に定義される個人情報、
              すなわち生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により
              特定の個人を識別することができるもの（他の情報と容易に照合することができ、
              それにより特定の個人を識別することができることとなるものを含む）をいいます。
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. 個人情報の収集方法</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              当社は、以下の方法により個人情報を収集いたします：
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>お問い合わせフォームからの入力</li>
              <li>電話、メール、郵送等による直接的な情報提供</li>
              <li>名刺交換等による情報取得</li>
              <li>セミナーや展示会等での情報取得</li>
              <li>その他適法な方法による情報取得</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. 個人情報の利用目的</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              当社は、収集した個人情報を以下の目的で利用いたします：
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>お問い合わせへの回答および対応</li>
              <li>サービスの提供および契約の履行</li>
              <li>サービスに関する情報提供</li>
              <li>マーケティング活動（セミナー案内、資料送付等）</li>
              <li>統計データの作成（個人を特定できない形式）</li>
              <li>その他、お客様との取引に関連する業務</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. 個人情報の第三者提供</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません：
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. 個人情報の管理</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              当社は、個人情報の正確性を保ち、これを安全に管理いたします。
              個人情報の紛失、破壊、改ざん及び漏洩等を防止するため、必要かつ適切な安全管理措置を講じます。
              また、個人情報を取り扱う従業員や委託先に対して、必要かつ適切な監督を行います。
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. 個人情報の開示・訂正・削除</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              お客様は、当社が保有する個人情報について、開示、訂正、削除を求めることができます。
              これらのご請求については、本人確認を行った上で、合理的な期間内に対応いたします。
              ご請求は、下記のお問い合わせ先までご連絡ください。
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. Cookieの使用について</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              当社のウェブサイトでは、サービス向上のためCookieを使用する場合があります。
              Cookieは、ウェブサイトがお客様のコンピュータに送信する小さなファイルです。
              お客様は、ブラウザの設定によりCookieの受け取りを拒否することができますが、
              その場合、ウェブサイトの一部機能が利用できない場合があります。
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>8. プライバシーポリシーの変更</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              当社は、法令の変更や事業内容の変更等に伴い、本プライバシーポリシーを変更することがあります。
              変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点から効力を生じるものとします。
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>9. お問い合わせ先</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください：
            </p>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="font-semibold">株式会社Company Name</p>
              <p className="text-muted-foreground">個人情報保護管理者</p>
              <p className="text-muted-foreground">〒100-0001 東京都千代田区千代田1-1-1 千代田ビル 10階</p>
              <p className="text-muted-foreground">TEL: 03-0000-0000</p>
              <p className="text-muted-foreground">Email: privacy@company.com</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>10. 制定日・改定日</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-muted-foreground">
              <p>制定日：2020年4月1日</p>
              <p>最終改定日：2024年1月1日</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 