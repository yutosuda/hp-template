// アプリケーション定数
export const APP_CONFIG = {
  name: "Company Name",
  description: "お客様のビジネスを成功に導くパートナーとして、最高品質のサービスを提供いたします。",
  keywords: "会社名, サービス, 事業内容, お問い合わせ",
  port: 3010,
} as const;

// カラーテーマ
export const COLORS = {
  background: {
    primary: '#F9F7F6',
    secondary: '#FFFFFF',
  },
  text: {
    primary: '#1F2937',
    secondary: '#6B7280',
  },
  accent: {
    orange: '#FB923C',
    blue: '#60A5FA',
    green: '#34D399',
    purple: '#A78BFA',
  },
} as const;

// レイアウト定数
export const LAYOUT = {
  header: {
    height: 90,
  },
  container: {
    padding: {
      x: 40,
      y: 80,
    },
  },
  grid: {
    gap: {
      small: 4,
      medium: 6,
      large: 60,
    },
  },
} as const;

// タグリスト
export const TAGS = [
  'ソファ',
  'チェア', 
  'テーブル',
  'ベッド',
  'デスク',
  '屋外家具',
  'スツール',
  '子供用家具',
] as const; 