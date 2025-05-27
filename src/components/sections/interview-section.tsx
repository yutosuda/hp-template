import { LargeRankingArticleItem } from "@/components/ui/large-ranking-article";
import { rankingArticles } from "@/lib/data";

export function InterviewSection() {
  return (
    <section className="py-[120px] bg-white">
      <div className="container max-w-[1680px]">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-[80px]">
          {/* 左カラム: 縦書きタイトル */}
          <div className="w-fit">
            <div className="border-t border-black">
              <h2 
                className="text-lg font-bold text-gray-900 pt-6 m-0"
                style={{ writingMode: 'vertical-rl' }}
              >
                インタビュー
              </h2>
            </div>
          </div>

          {/* 右カラム: インタビュー記事グリッド（3列×2行） */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rankingArticles.map((article) => (
                <LargeRankingArticleItem 
                  key={article.id} 
                  article={article} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 