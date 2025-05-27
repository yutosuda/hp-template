import { Article, RankingArticle, Tag } from "./types";

// 記事データ
export const articles: Article[] = [
  {
    id: "1",
    title: "インテリア選びの基準",
    category: "デザイン",
    date: "2024.02",
    backgroundGradient: "bg-gradient-to-br from-orange-300 to-yellow-100",
    tagStyle: "rounded-t-[12px]",
    imageElements: {
      element1: {
        position: "top-1/4 left-1/4",
        size: "w-12 h-16",
        color: "bg-blue-400",
        opacity: "opacity-80",
        transform: "transform rotate-12"
      },
      element2: {
        position: "top-1/3 right-1/3",
        size: "w-10 h-14",
        color: "bg-gray-800",
        opacity: "opacity-70",
        transform: "transform -rotate-6"
      },
      element3: {
        position: "bottom-1/3 left-1/2 transform -translate-x-1/2",
        size: "w-12 h-12",
        color: "bg-amber-800",
        opacity: "opacity-60"
      }
    }
  },
  {
    id: "2",
    title: "予算内で理想の空間を実現する",
    category: "カルチャー",
    date: "2024.02",
    backgroundGradient: "bg-gradient-to-br from-gray-200 to-gray-300",
    tagStyle: "rounded-t-[12px]",
    imageElements: {
      element1: {
        position: "top-1/4 left-1/3",
        size: "w-8 h-12",
        color: "bg-gray-600",
        opacity: "opacity-70"
      },
      element2: {
        position: "top-1/2 right-1/4",
        size: "w-6 h-8",
        color: "bg-gray-800",
        opacity: "opacity-60"
      },
      element3: {
        position: "bottom-1/3 left-1/2",
        size: "w-10 h-6",
        color: "bg-gray-700",
        opacity: "opacity-50"
      }
    }
  },
  {
    id: "3",
    title: "予算内で優雅な空間を",
    category: "オフィス",
    date: "2024.02",
    backgroundGradient: "bg-gradient-to-br from-gray-100 to-gray-200",
    tagStyle: "rounded-t-[12px]",
    imageElements: {
      element1: {
        position: "top-1/4 left-1/4",
        size: "w-16 h-10",
        color: "bg-orange-400",
        opacity: "opacity-70"
      },
      element2: {
        position: "top-1/2 right-1/3",
        size: "w-12 h-8",
        color: "bg-white",
        opacity: "opacity-80"
      },
      element3: {
        position: "bottom-1/4 left-1/2",
        size: "w-8 h-6",
        color: "bg-gray-600",
        opacity: "opacity-60"
      }
    }
  },
  {
    id: "4",
    title: "好みに合わせて個性を表現する",
    category: "インテリア",
    date: "2024.02",
    backgroundGradient: "bg-gradient-to-br from-gray-700 to-gray-900",
    tagStyle: "rounded-t-[12px]",
    imageElements: {
      element1: {
        position: "top-1/4 left-1/3",
        size: "w-10 h-8",
        color: "bg-gray-500",
        opacity: "opacity-70"
      },
      element2: {
        position: "top-1/2 right-1/4",
        size: "w-8 h-10",
        color: "bg-gray-400",
        opacity: "opacity-60"
      },
      element3: {
        position: "bottom-1/3 left-1/2",
        size: "w-12 h-6",
        color: "bg-gray-600",
        opacity: "opacity-50"
      }
    }
  },
  {
    id: "5",
    title: "美しさと実用性を兼ね備える",
    category: "ライフスタイル",
    date: "2024.02",
    backgroundGradient: "bg-gradient-to-br from-green-500 to-green-700",
    tagStyle: "rounded-t-[12px]",
    imageElements: {
      element1: {
        position: "top-1/4 left-1/4",
        size: "w-8 h-12",
        color: "bg-orange-400",
        opacity: "opacity-80"
      },
      element2: {
        position: "top-1/2 right-1/3",
        size: "w-10 h-8",
        color: "bg-white",
        opacity: "opacity-70"
      },
      element3: {
        position: "bottom-1/4 left-1/2",
        size: "w-6 h-10",
        color: "bg-green-300",
        opacity: "opacity-60"
      }
    }
  },
  {
    id: "6",
    title: "色と形のバランスで調和を保つ",
    category: "ライフスタイル",
    date: "2024.01",
    backgroundGradient: "bg-gradient-to-br from-gray-200 to-gray-400",
    tagStyle: "rounded-t-[12px]",
    imageElements: {
      element1: {
        position: "top-1/3 left-1/3",
        size: "w-12 h-8",
        color: "bg-gray-800",
        opacity: "opacity-70"
      },
      element2: {
        position: "top-1/2 right-1/4",
        size: "w-8 h-10",
        color: "bg-gray-600",
        opacity: "opacity-60"
      },
      element3: {
        position: "bottom-1/3 left-1/2",
        size: "w-10 h-6",
        color: "bg-gray-700",
        opacity: "opacity-50"
      }
    }
  }
];

// ランキング記事データ
export const rankingArticles: RankingArticle[] = [
  {
    id: "r1",
    title: "そっと溶け込む美しいバランス",
    date: "2024.02.09",
    thumbnailGradient: "bg-gradient-to-br from-orange-100 to-orange-200",
    imageElements: {
      element1: {
        position: "top-1/3 left-1/4",
        size: "w-4 h-6",
        color: "bg-orange-400",
        opacity: "opacity-70"
      },
      element2: {
        position: "top-1/2 right-1/3",
        size: "w-3 h-4",
        color: "bg-gray-600",
        opacity: "opacity-60"
      }
    }
  },
  {
    id: "r2",
    title: "自然と未来を大切にする",
    date: "2024.02.09",
    thumbnailGradient: "bg-gradient-to-br from-green-100 to-green-200",
    imageElements: {
      element1: {
        position: "top-1/4 left-1/3",
        size: "w-3 h-5",
        color: "bg-green-500",
        opacity: "opacity-70"
      },
      element2: {
        position: "top-1/2 right-1/4",
        size: "w-4 h-3",
        color: "bg-green-700",
        opacity: "opacity-60"
      }
    }
  },
  {
    id: "r3",
    title: "美しさと実用性を兼ね備える",
    date: "2024.02.09",
    thumbnailGradient: "bg-gradient-to-br from-purple-100 to-purple-200",
    imageElements: {
      element1: {
        position: "top-1/3 left-1/4",
        size: "w-4 h-4",
        color: "bg-purple-500",
        opacity: "opacity-70"
      },
      element2: {
        position: "top-1/2 right-1/3",
        size: "w-3 h-5",
        color: "bg-purple-700",
        opacity: "opacity-60"
      }
    }
  },
  {
    id: "r4",
    title: "色と形のバランスで調和を保つ",
    date: "2024.02.09",
    thumbnailGradient: "bg-gradient-to-br from-blue-100 to-blue-200",
    imageElements: {
      element1: {
        position: "top-1/4 left-1/3",
        size: "w-3 h-4",
        color: "bg-blue-500",
        opacity: "opacity-70"
      },
      element2: {
        position: "top-1/2 right-1/4",
        size: "w-4 h-3",
        color: "bg-blue-700",
        opacity: "opacity-60"
      }
    }
  },
  {
    id: "r5",
    title: "好みに合わせて個性を表現する",
    date: "2024.02.09",
    thumbnailGradient: "bg-gradient-to-br from-yellow-100 to-yellow-200",
    imageElements: {
      element1: {
        position: "top-1/3 left-1/4",
        size: "w-4 h-3",
        color: "bg-yellow-500",
        opacity: "opacity-70"
      },
      element2: {
        position: "top-1/2 right-1/3",
        size: "w-3 h-4",
        color: "bg-yellow-700",
        opacity: "opacity-60"
      }
    }
  }
];

// タグデータ
export const tags: Tag[] = [
  { name: "ソファ", writingMode: "vertical-rl", href: "/tags/sofa" },
  { name: "チェア", writingMode: "vertical-rl", href: "/tags/chair" },
  { name: "テーブル", writingMode: "vertical-rl", href: "/tags/table" },
  { name: "ベッド", writingMode: "vertical-rl", href: "/tags/bed" },
  { name: "デスク", writingMode: "vertical-rl", href: "/tags/desk" },
  { name: "屋外家具", writingMode: "vertical-rl", href: "/tags/outdoor" },
  { name: "スツール", writingMode: "vertical-rl", href: "/tags/stool" },
  { name: "子供用家具", writingMode: "vertical-rl", href: "/tags/kids" }
]; 