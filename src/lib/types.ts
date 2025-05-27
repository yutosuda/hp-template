// 共通型定義
export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  backgroundGradient: string;
  tagStyle: 'rounded-t-[12px]' | 'rounded-t-full';
  imageElements?: {
    element1: {
      position: string;
      size: string;
      color: string;
      opacity: string;
      transform?: string;
    };
    element2: {
      position: string;
      size: string;
      color: string;
      opacity: string;
      transform?: string;
    };
    element3?: {
      position: string;
      size: string;
      color: string;
      opacity: string;
      transform?: string;
    };
  };
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

// ランキング記事の型定義
export interface RankingArticle {
  id: string;
  title: string;
  date: string;
  thumbnailGradient: string;
  imageElements: {
    element1: {
      position: string;
      size: string;
      color: string;
      opacity: string;
    };
    element2: {
      position: string;
      size: string;
      color: string;
      opacity: string;
    };
  };
}

// タグの型定義
export interface Tag {
  name: string;
  writingMode?: 'vertical-rl' | 'horizontal-tb';
  href?: string;
} 