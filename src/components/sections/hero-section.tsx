import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-[600px] bg-gradient-to-br from-orange-200 via-yellow-100 to-orange-300 overflow-visible -mt-[90px] pt-[90px]">
      <div className="container h-full flex items-center justify-center relative py-8">
        {/* メインコンテンツエリア - 中央配置 */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* 左側: メイン画像エリア */}
          <div className="w-full max-w-[896px] h-[300px] md:h-[400px] lg:h-[506px] relative mx-auto lg:mx-0 transform translate-y-4">
            <div className="w-full h-full bg-gradient-to-br from-orange-400 via-yellow-200 to-orange-300 rounded-2xl shadow-2xl overflow-hidden relative">
              {/* インテリア画像のプレースホルダー */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-yellow-100">
                {/* 椅子のシルエット表現 */}
                <div className="absolute top-1/4 left-1/4 w-20 h-28 md:w-32 md:h-40 bg-blue-400 rounded-t-full opacity-80 transform rotate-12"></div>
                <div className="absolute top-1/3 right-1/3 w-16 h-24 md:w-24 md:h-32 bg-gray-800 rounded-t-full opacity-70 transform -rotate-6"></div>
                {/* テーブルのシルエット */}
                <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-24 md:h-24 bg-amber-800 rounded-full opacity-60"></div>
                {/* 装飾的な影 */}
                <div className="absolute bottom-1/4 left-1/4 w-28 h-6 md:w-40 md:h-8 bg-black opacity-20 rounded-full blur-sm transform rotate-12"></div>
                <div className="absolute bottom-1/3 right-1/4 w-24 h-4 md:w-32 md:h-6 bg-black opacity-15 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>

          {/* 右上: 情報カード - 画像に重なるように配置 */}
          <div className="absolute top-4 lg:top-8 right-4 lg:-right-8 w-80 max-w-sm z-10 transform translate-y-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg relative">
              {/* デザインタグ */}
              <div className="absolute -top-3 left-6 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                デザイン
              </div>
              
              <div className="pt-4">
                <div className="text-4xl font-bold text-gray-900 mb-1">08</div>
                <div className="text-sm text-gray-600 mb-4">2024.02</div>
                <h2 className="text-xl font-bold text-gray-900 leading-tight">
                  インテリア選びの基準
                </h2>
              </div>
            </div>
          </div>

          {/* 右下: アクションボタン */}
          <div className="absolute bottom-4 lg:bottom-8 right-4 lg:-right-8 z-10 transform translate-y-12 lg:translate-y-16">
            <Button 
              variant="default" 
              className="bg-black text-white hover:bg-gray-800 rounded-full text-base py-[15px] !px-[25px] h-auto font-medium flex items-center gap-2 shadow-lg"
            >
              記事を見る
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* 装飾的な要素 */}
      <div className="absolute bottom-8 right-8 w-4 h-4 bg-black rounded-full opacity-60"></div>
    </section>
  );
} 