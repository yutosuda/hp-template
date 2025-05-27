import { Article } from "@/lib/types";

interface ArticleCardProps {
  article: Article;
  number: string;
}

export function ArticleCard({ article, number }: ArticleCardProps) {
  return (
    <div className="relative h-[267.5px] rounded-2xl group cursor-pointer hover:z-10">
      {/* 背景画像エリア */}
      <div className={`absolute top-0 right-0 w-[calc(100%-100px)] h-[236px] ${article.backgroundGradient} rounded-2xl border-2 border-black transition-transform duration-300 ease-out group-hover:translate-x-6 group-hover:-translate-y-6`}>
        {/* 画像のプレースホルダー */}
        <div className="w-full h-full relative rounded-2xl">
          {article.imageElements && (
            <>
              <div 
                className={`absolute ${article.imageElements.element1.position} ${article.imageElements.element1.size} ${article.imageElements.element1.color} rounded ${article.imageElements.element1.opacity} ${article.imageElements.element1.transform || ''}`}
              ></div>
              <div 
                className={`absolute ${article.imageElements.element2.position} ${article.imageElements.element2.size} ${article.imageElements.element2.color} rounded ${article.imageElements.element2.opacity} ${article.imageElements.element2.transform || ''}`}
              ></div>
              {article.imageElements.element3 && (
                <div 
                  className={`absolute ${article.imageElements.element3.position} ${article.imageElements.element3.size} ${article.imageElements.element3.color} rounded ${article.imageElements.element3.opacity} ${article.imageElements.element3.transform || ''}`}
                ></div>
              )}
            </>
          )}
        </div>
      </div>
      
      {/* 左上: 数字と日付 */}
      <div className="absolute top-4 left-4 z-10">
        <div className="text-[54px] font-bold text-gray-900 leading-none">{number}</div>
        <div className="text-base text-gray-600">{article.date}</div>
      </div>
      
      {/* タグとタイトルの統合コンテナ */}
      <div className="absolute bottom-4 left-[80px] z-10 transition-transform duration-300 ease-out group-hover:translate-y-[12px]">
        <div className="flex flex-col">
          {/* タグ（上部に配置） */}
          <div className="self-start">
            <div className={`bg-black text-white rounded-t-[12px] flex items-center gap-[5px] py-[8px] px-[12px] inline-flex`}>
              <div className="w-[8px] h-[4px] bg-white rounded"></div>
              <span className="text-[12px] font-medium">{article.category}</span>
            </div>
          </div>
          
          {/* タイトル（下部に配置、タグと統合） */}
          <div className="bg-white rounded-b-[12px] rounded-tr-[12px] p-4 shadow-lg border-2 border-black transition-shadow duration-300 ease-out group-hover:shadow-xl">
            <h3 className="text-[14px] font-bold text-gray-900 leading-tight m-0">
              {article.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
} 