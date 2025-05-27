import { RankingArticle } from "@/lib/types";

interface LargeRankingArticleProps {
  article: RankingArticle;
}

export function LargeRankingArticleItem({ article }: LargeRankingArticleProps) {
  return (
    <div className="p-[10px] rounded-lg border border-transparent hover:bg-white hover:border-gray-300 cursor-pointer transition-all duration-200">
      <div className="flex gap-[30px] items-center">
        <div className="w-[140px] h-[78px] bg-gradient-to-br from-gray-200 to-gray-300 rounded flex-shrink-0 overflow-hidden">
          {/* プレースホルダー画像 */}
          <div className={`w-full h-full ${article.thumbnailGradient} relative`}>
            <div 
              className={`absolute ${article.imageElements.element1.position} ${article.imageElements.element1.size} ${article.imageElements.element1.color} rounded ${article.imageElements.element1.opacity}`}
            ></div>
            <div 
              className={`absolute ${article.imageElements.element2.position} ${article.imageElements.element2.size} ${article.imageElements.element2.color} rounded ${article.imageElements.element2.opacity}`}
            ></div>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-medium text-gray-900 leading-tight m-0 mb-1">
            {article.title}
          </h3>
          <p className="text-xs text-gray-600 m-0">{article.date}</p>
        </div>
      </div>
    </div>
  );
} 