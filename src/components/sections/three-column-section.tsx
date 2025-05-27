import { ArticleCard } from "@/components/ui/article-card";
import { RankingArticleItem } from "@/components/ui/ranking-article";
import { articles, rankingArticles, tags } from "@/lib/data";

export function ThreeColumnSection() {
  return (
    <section className="pt-[40px] pb-[120px]" style={{ backgroundColor: '#F9F7F6' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[110px_1fr_316px] gap-[60px]">
          {/* 左カラム: タグ */}
          <div className="border-t border-black pt-6">
            <div className="mb-[40px]">
              <h2 className="text-lg font-bold text-gray-900 mb-1 m-0">タグ</h2>
              <p className="text-sm text-gray-600">Tags</p>
            </div>
            
            {/* タグ3列グリッド */}
            <div className="grid grid-cols-3 gap-2">
              {tags.map((tag, index) => (
                <a
                  key={index}
                  href={tag.href}
                  className="text-base font-medium text-gray-900 py-[8px] px-[5px] hover:text-gray-600 hover:bg-gray-100 rounded transition-colors duration-200 cursor-pointer block no-underline decoration-none"
                  style={{ writingMode: tag.writingMode }}
                >
                  {tag.name}
                </a>
              ))}
            </div>
          </div>

          {/* 中央カラム: 最新記事 */}
          <div className="border-t border-black pt-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-baseline gap-3">
                <h2 className="text-lg font-bold text-gray-900 m-0">最新の記事</h2>
                <p className="text-sm text-gray-600">Newest</p>
              </div>
              <div className="text-sm text-gray-600">
                すべての記事 →
              </div>
            </div>
            
            {/* 記事グリッド */}
            <div className="grid grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  number={String(index + 8).padStart(2, '0')} 
                />
              ))}
            </div>
          </div>
          
          {/* 右カラム: 画像 + 人気の記事ランキング */}
          <div className="space-y-[80px]">
            {/* 上部画像エリア */}
            <div className="w-full h-[400px] bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl overflow-hidden relative">
              {/* プレースホルダー画像 */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 relative">
                {/* 装飾要素 */}
                <div className="absolute top-1/4 left-1/4 w-16 h-20 bg-blue-400 rounded opacity-70"></div>
                <div className="absolute top-1/2 right-1/3 w-12 h-16 bg-orange-400 rounded opacity-60"></div>
                <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-green-400 rounded opacity-50"></div>
              </div>
            </div>

            {/* 人気の記事セクション */}
            <div className="border-t border-black pt-6">
              <div className="flex items-baseline gap-2 mb-5">
                <h2 className="text-lg font-bold text-gray-900 m-0">人気の記事</h2>
                <p className="text-sm text-gray-600 m-0">Ranking</p>
              </div>
              
              {/* ランキングリスト */}
              <div>
                {rankingArticles.map((article) => (
                  <RankingArticleItem key={article.id} article={article} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 