import { TopicItem, CategoryItem } from "@/lib/types";

const topicItems: TopicItem[] = [
  {
    id: "1",
    title: "3万円以内で購入可能なシェルフ特集",
    subtitle: "春の引越しに間に合う",
    imageClass: "bg-gradient-to-br from-orange-100 to-orange-200",
    size: "large"
  },
  {
    id: "2", 
    title: "お気に入りの椅子を見つけよう",
    imageClass: "bg-gradient-to-br from-yellow-100 to-orange-200",
    size: "small"
  },
  {
    id: "3",
    title: "オフィスチェア特集",
    imageClass: "bg-gradient-to-br from-gray-100 to-gray-300",
    size: "small"
  }
];

const categoryItems: CategoryItem[] = [
  {
    id: "1",
    name: "インテリア",
    color: "text-green-600",
    articles: [
      { title: "好みに合わせて個性を表現する", date: "2024.02.09" },
      { title: "そっと溶け込む美しいバランス", date: "2024.02.09" }
    ]
  },
  {
    id: "2",
    name: "デザイン", 
    color: "text-purple-600",
    articles: [
      { title: "インテリア選びの基準", date: "2024.02.09" },
      { title: "価値的な要素で空間を彩る", date: "2024.02.09" }
    ]
  },
  {
    id: "3",
    name: "ライフスタイル",
    color: "text-blue-600", 
    articles: [
      { title: "美しさと実用性を兼ね備える", date: "2024.02.09" },
      { title: "色と形のバランスで調和を保つ", date: "2024.02.09" }
    ]
  },
  {
    id: "4",
    name: "カルチャー",
    color: "text-red-600",
    articles: [
      { title: "予算内で理想の空間を実現する", date: "2024.02.09" },
      { title: "物を整理して空間を広く使う", date: "2024.02.09" }
    ]
  },
  {
    id: "5", 
    name: "オフィス",
    color: "text-orange-600",
    articles: [
      { title: "予算内で優雅な空間を", date: "2024.02.09" },
      { title: "自然と未来を大切にする", date: "2024.02.09" }
    ]
  }
];

export function TopicsAndCategorySection() {
  return (
    <section className="py-[120px] bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[80px]">
          {/* 左カラム: 特集 Topics */}
          <div>
            <div className="mb-8">
              <div className="flex items-baseline gap-3">
                <h2 className="text-lg font-bold text-gray-900 m-0">特集</h2>
                <p className="text-sm text-gray-600 m-0">Topics</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {/* 大きな特集カード */}
              {topicItems.filter(item => item.size === 'large').map((item) => (
                <div key={item.id} className="relative h-[156px] rounded-2xl overflow-hidden cursor-pointer group">
                  <div className={`w-full h-full ${item.imageClass} relative`}>
                    {/* 装飾要素 */}
                    <div className="absolute top-1/4 left-1/4 w-16 h-20 bg-white rounded opacity-70"></div>
                    <div className="absolute top-1/2 right-1/3 w-12 h-16 bg-gray-800 rounded opacity-60"></div>
                    <div className="absolute bottom-1/3 left-1/2 w-20 h-12 bg-orange-400 rounded opacity-50"></div>
                  </div>
                  
                  {/* タイトルオーバーレイ - 左側配置 */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-start justify-start p-6">
                    <div className="flex flex-col">
                      {item.subtitle && (
                        <p className="text-white text-sm font-medium mb-2 opacity-90 m-0">
                          {item.subtitle}
                        </p>
                      )}
                      <h3 className="text-white text-xl font-bold leading-tight m-0">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* 小さな特集カード */}
              <div className="grid grid-cols-2 gap-4">
                {topicItems.filter(item => item.size === 'small').map((item) => (
                  <div key={item.id} className="relative h-[120px] rounded-2xl overflow-hidden cursor-pointer group">
                    <div className={`w-full h-full ${item.imageClass} relative`}>
                      {/* 装飾要素 */}
                      <div className="absolute top-1/3 left-1/3 w-8 h-10 bg-white rounded opacity-70"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-6 h-8 bg-gray-600 rounded opacity-60"></div>
                    </div>
                    
                    {/* タイトルオーバーレイ */}
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-4">
                      <h3 className="text-white text-sm font-bold leading-tight m-0">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右カラム: カテゴリから探す */}
          <div>
            <div className="mb-8">
              <div className="flex items-baseline gap-3">
                <h2 className="text-lg font-bold text-gray-900 m-0">カテゴリから探す</h2>
                <p className="text-sm text-gray-600 m-0">Category</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryItems.map((category) => (
                <div key={category.id} className="border-t-2 border-black pt-4 space-y-4">
                  {/* カテゴリタイトル */}
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-[6px] rounded border-2 border-black ${category.color.replace('text-', 'bg-')}`}></div>
                    <h3 className="text-base font-bold text-black m-0">
                      {category.name}
                    </h3>
                  </div>
                  
                  {/* 記事リスト */}
                  <div className="space-y-3">
                    {category.articles.map((article, index) => (
                      <div key={index} className="p-2 rounded-lg border border-transparent hover:bg-white hover:border-gray-300 cursor-pointer transition-all duration-200">
                        <h4 className="text-sm text-gray-900 leading-relaxed m-0">
                          {article.title}
                        </h4>
                        <p className="text-xs text-gray-500 m-0">
                          {article.date}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 