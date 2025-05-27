import { ArticleCard } from "@/components/ui/article-card";
import { articles } from "@/lib/data";

export function MonthlyFeaturedSection() {
  // 月間特集用の記事データ（最初の6件を使用）
  const monthlyArticles = articles.slice(0, 6);

  return (
    <section className="py-[120px]" style={{ backgroundColor: '#F9F7F6' }}>
      <div className="container max-w-[1680px]">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-[80px]">
          {/* 左カラム: 縦書きタイトル */}
          <div className="w-fit">
            <div className="border-t border-black">
              <h2 
                className="text-lg font-bold text-gray-900 pt-6 m-0"
                style={{ writingMode: 'vertical-rl' }}
              >
                今月の特集
              </h2>
            </div>
          </div>

          {/* 右カラム: 記事グリッド（3列×2行） */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {monthlyArticles.map((article, index) => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  number={String(index + 1).padStart(2, '0')} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 