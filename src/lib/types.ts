// 共通型定義
export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  number: string;
  backgroundClass: string;
}

export interface PickupItem {
  id: string;
  title: string;
  imageClass: string;
  iconClass: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  content: string;
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
}

export interface RankingItem {
  id: string;
  title: string;
  date: string;
  imageClass: string;
}

export interface TopicItem {
  id: string;
  title: string;
  subtitle?: string;
  imageClass: string;
  size: 'large' | 'small';
}

export interface CategoryItem {
  id: string;
  name: string;
  color: string;
  articles: {
    title: string;
    date: string;
  }[];
} 