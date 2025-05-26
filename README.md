# 名刺・営業資料代替ホームページ

このプロジェクトは、Next.js 15とshadcn/uiを使用して構築された、企業の名刺・営業資料代わりとなるモダンなホームページです。

## 🚀 特徴

- **モダンなデザイン**: shadcn/uiとTailwind CSSによる美しいUI
- **レスポンシブ対応**: PC、タブレット、スマートフォンで最適表示
- **お問い合わせフォーム**: EmailJSを使用したメール送信機能
- **資料ダウンロード**: 各種資料の提供機能
- **SEO最適化**: 適切なメタタグとセマンティックHTML
- **高速表示**: Next.js 15の最新機能による最適化

## 📁 ページ構成

- **トップページ** (`/`): ヒーローセクション、事業概要、強み、サービス紹介
- **会社情報** (`/about`): 企業概要、理念、沿革、取引先
- **事業内容・サービス** (`/services`): 詳細なサービス説明と料金体系
- **実績・事例** (`/portfolio`): プロジェクト事例とお客様の声
- **お問い合わせ** (`/contact`): フォーム機能とよくある質問
- **資料ダウンロード** (`/downloads`): 各種資料の提供
- **プライバシーポリシー** (`/privacy`): 個人情報保護方針

## 🛠 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **UIコンポーネント**: shadcn/ui
- **フォーム送信**: EmailJS
- **ホスティング**: Vercel推奨

## 📦 セットアップ

### 前提条件

- Node.js 18.17以上
- npm または yarn

### インストール

1. リポジトリをクローン
```bash
git clone <repository-url>
cd hp-template
```

2. 依存関係をインストール
```bash
npm install
```

3. 開発サーバーを起動
```bash
npm run dev
```

4. ブラウザで http://localhost:3000 を開く

## ⚙️ 設定

### EmailJS設定

お問い合わせフォームを機能させるには、EmailJSの設定が必要です：

1. [EmailJS](https://www.emailjs.com/)でアカウントを作成
2. サービスとテンプレートを設定
3. `src/app/contact/page.tsx`の以下の値を更新：
   ```typescript
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```

### 資料ファイル

資料ダウンロード機能を使用するには：

1. `public/documents/`ディレクトリを作成
2. 以下のPDFファイルを配置：
   - `company-profile.pdf` (会社案内)
   - `service-details.pdf` (サービス詳細資料)
   - `case-studies.pdf` (導入事例集)
   - `pricing.pdf` (料金表)
   - `technical-overview.pdf` (技術資料)
   - `seminar-materials.pdf` (セミナー資料)

## 🎨 カスタマイズ

### 会社情報の変更

以下のファイルで会社情報を更新してください：

- `src/components/layout/header.tsx` - ヘッダーの会社名
- `src/components/layout/footer.tsx` - フッターの連絡先情報
- `src/app/layout.tsx` - メタデータ
- `src/app/about/page.tsx` - 会社概要
- 各ページの連絡先情報

### デザインの変更

- `src/app/globals.css` - グローバルスタイル
- shadcn/uiコンポーネントのカスタマイズ
- Tailwind CSSクラスの調整

## 🚀 デプロイ

### Vercelでのデプロイ

1. [Vercel](https://vercel.com)でアカウントを作成
2. GitHubリポジトリを接続
3. 自動デプロイが開始されます

### その他のホスティング

- Netlify
- AWS Amplify
- Firebase Hosting

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 サポート

質問や問題がある場合は、以下の方法でお問い合わせください：

- Issues: GitHubのIssuesページ
- Email: info@company.com

## 📋 要件定義

このプロジェクトは以下の要件定義に基づいて開発されました：

- 名刺・営業資料代替ホームページの制作
- Next.jsとモダンUIライブラリの使用
- お問い合わせフォーム機能（Gmail連携）
- 資料ダウンロード機能
- レスポンシブデザイン
- SEO対策
- アクセシビリティ対応

詳細な要件定義は `.cursor/要件定義.mdc` を参照してください。
