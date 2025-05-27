import { HeroSection, PickupSection, TopicsAndCategorySection } from "@/components/sections";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* メインビジュアル（FV）セクション */}
      <HeroSection />

      {/* ピックアップセクション */}
      <PickupSection />

      {/* 3カラム記事セクション */}
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
                <div className="text-base font-medium text-gray-900 py-[8px] px-[5px]" style={{ writingMode: 'vertical-rl' }}>
                  ソファ
                </div>
                <div className="text-base font-medium text-gray-900 py-[8px] px-[5px]" style={{ writingMode: 'vertical-rl' }}>
                  チェア
                </div>
                <div className="text-base font-medium text-gray-900 py-[8px] px-[5px]" style={{ writingMode: 'vertical-rl' }}>
                  テーブル
                </div>
                <div className="text-base font-medium text-gray-900 py-[8px] px-[5px]" style={{ writingMode: 'vertical-rl' }}>
                  ベッド
                </div>
                <div className="text-base font-medium text-gray-900 py-[8px] px-[5px]" style={{ writingMode: 'vertical-rl' }}>
                  デスク
                </div>
                <div className="text-base font-medium text-gray-900 py-[8px] px-[5px]" style={{ writingMode: 'vertical-rl' }}>
                  屋外家具
                </div>
                <div className="text-base font-medium text-gray-900 py-[8px] px-[5px]" style={{ writingMode: 'vertical-rl' }}>
                  スツール
                </div>
                <div className="text-base font-medium text-gray-900 py-[8px] px-[5px]" style={{ writingMode: 'vertical-rl' }}>
                  子供用家具
                </div>
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
                {/* 記事カード1: デザイン - インテリア選びの基準 */}
                <div className="relative h-[236px] rounded-2xl overflow-hidden">
                  {/* 背景画像エリア */}
                  <div className="absolute inset-0 ml-[100px] bg-gradient-to-br from-orange-400 via-yellow-200 to-orange-300 rounded-2xl">
                    {/* インテリア画像のプレースホルダー */}
                    <div className="w-full h-full bg-gradient-to-br from-orange-300 to-yellow-100 relative rounded-2xl">
                      <div className="absolute top-1/4 left-1/4 w-12 h-16 bg-blue-400 rounded-t-full opacity-80 transform rotate-12"></div>
                      <div className="absolute top-1/3 right-1/3 w-10 h-14 bg-gray-800 rounded-t-full opacity-70 transform -rotate-6"></div>
                      <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-amber-800 rounded-full opacity-60"></div>
                    </div>
                  </div>
                  
                  {/* 左上: 数字と日付 */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="text-[54px] font-bold text-gray-900 leading-none">08</div>
                    <div className="text-base text-gray-600">2024.02</div>
                  </div>
                  
                  {/* タグ */}
                  <div className="absolute bottom-[72px] left-[80px] z-10 transform translate-y-2">
                    <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                      デザイン
                    </div>
                  </div>
                  
                  {/* タイトル */}
                  <div className="absolute bottom-4 left-[80px] z-10">
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                      <h3 className="text-base font-bold text-gray-900 leading-tight m-0">
                        インテリア選びの基準
                      </h3>
                    </div>
                  </div>
                </div>

                {/* 記事カード2: カルチャー - 予算内で理想の空間を実現する */}
                <div className="relative h-[236px] rounded-2xl overflow-hidden">
                  {/* 背景画像エリア */}
                  <div className="absolute inset-0 ml-[100px] bg-gray-100 rounded-2xl">
                    {/* カルチャー画像のプレースホルダー */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 relative rounded-2xl">
                      <div className="absolute top-1/4 left-1/3 w-8 h-12 bg-gray-600 rounded opacity-70"></div>
                      <div className="absolute top-1/2 right-1/4 w-6 h-8 bg-gray-800 rounded opacity-60"></div>
                      <div className="absolute bottom-1/3 left-1/2 w-10 h-6 bg-gray-700 rounded opacity-50"></div>
                    </div>
                  </div>
                  
                  {/* 左上: 数字と日付 */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="text-[54px] font-bold text-gray-900 leading-none">08</div>
                    <div className="text-base text-gray-600">2024.02</div>
                  </div>
                  
                  {/* タグ */}
                  <div className="absolute bottom-[72px] left-[80px] z-10 transform translate-y-2">
                    <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                      カルチャー
                    </div>
                  </div>
                  
                  {/* タイトル */}
                  <div className="absolute bottom-4 left-[80px] z-10">
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                      <h3 className="text-base font-bold text-gray-900 leading-tight m-0">
                        予算内で理想の空間を実現する
                      </h3>
                    </div>
                  </div>
                </div>

                {/* 記事カード3: オフィス - 予算内で優雅な空間を */}
                <div className="relative h-[236px] rounded-2xl overflow-hidden">
                  {/* 背景画像エリア */}
                  <div className="absolute inset-0 ml-[100px] bg-gray-50 rounded-2xl">
                    {/* オフィス画像のプレースホルダー */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 relative rounded-2xl">
                      <div className="absolute top-1/4 left-1/4 w-16 h-10 bg-orange-400 rounded opacity-70"></div>
                      <div className="absolute top-1/2 right-1/3 w-12 h-8 bg-white rounded opacity-80"></div>
                      <div className="absolute bottom-1/4 left-1/2 w-8 h-6 bg-gray-600 rounded opacity-60"></div>
                    </div>
                  </div>
                  
                  {/* 左上: 数字と日付 */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="text-[54px] font-bold text-gray-900 leading-none">08</div>
                    <div className="text-base text-gray-600">2024.02</div>
                  </div>
                  
                  {/* タグ */}
                  <div className="absolute bottom-[72px] left-[80px] z-10 transform translate-y-2">
                    <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                      オフィス
                    </div>
                  </div>
                  
                  {/* タイトル */}
                  <div className="absolute bottom-4 left-[80px] z-10">
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                      <h3 className="text-base font-bold text-gray-900 leading-tight m-0">
                        予算内で優雅な空間を
                      </h3>
                    </div>
                  </div>
                </div>

                {/* 記事カード4: インテリア - 好みに合わせて個性を表現する */}
                <div className="relative h-[236px] rounded-2xl overflow-hidden">
                  {/* 背景画像エリア */}
                  <div className="absolute inset-0 ml-[100px] bg-gray-800 rounded-2xl">
                    {/* インテリア画像のプレースホルダー */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 relative rounded-2xl">
                      <div className="absolute top-1/4 left-1/3 w-10 h-8 bg-gray-500 rounded opacity-70"></div>
                      <div className="absolute top-1/2 right-1/4 w-8 h-10 bg-gray-400 rounded opacity-60"></div>
                      <div className="absolute bottom-1/3 left-1/2 w-12 h-6 bg-gray-600 rounded opacity-50"></div>
                    </div>
                  </div>
                  
                  {/* 左上: 数字と日付 */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="text-[54px] font-bold text-gray-900 leading-none">08</div>
                    <div className="text-base text-gray-600">2024.02</div>
                  </div>
                  
                  {/* タグ */}
                  <div className="absolute bottom-[72px] left-[80px] z-10 transform translate-y-2">
                    <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                      インテリア
                    </div>
                  </div>
                  
                  {/* タイトル */}
                  <div className="absolute bottom-4 left-[80px] z-10">
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                      <h3 className="text-base font-bold text-gray-900 leading-tight m-0">
                        好みに合わせて個性を表現する
                      </h3>
                    </div>
                  </div>
                </div>

                {/* 記事カード5: ライフスタイル - 美しさと実用性を兼ね備える */}
                <div className="relative h-[236px] rounded-2xl overflow-hidden">
                  {/* 背景画像エリア */}
                  <div className="absolute inset-0 ml-[100px] bg-green-600 rounded-2xl">
                    {/* ライフスタイル画像のプレースホルダー */}
                    <div className="w-full h-full bg-gradient-to-br from-green-500 to-green-700 relative rounded-2xl">
                      <div className="absolute top-1/4 left-1/4 w-8 h-12 bg-orange-400 rounded opacity-80"></div>
                      <div className="absolute top-1/2 right-1/3 w-10 h-8 bg-white rounded opacity-70"></div>
                      <div className="absolute bottom-1/4 left-1/2 w-6 h-10 bg-green-300 rounded opacity-60"></div>
                    </div>
                  </div>
                  
                  {/* 左上: 数字と日付 */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="text-[54px] font-bold text-gray-900 leading-none">08</div>
                    <div className="text-base text-gray-600">2024.02</div>
                  </div>
                  
                  {/* タグ */}
                  <div className="absolute bottom-[72px] left-[80px] z-10 transform translate-y-2">
                    <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                      ライフスタイル
                    </div>
                  </div>
                  
                  {/* タイトル */}
                  <div className="absolute bottom-4 left-[80px] z-10">
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                      <h3 className="text-base font-bold text-gray-900 leading-tight m-0">
                        美しさと実用性を兼ね備える
                      </h3>
                    </div>
                  </div>
                </div>

                {/* 記事カード6: ライフスタイル - 色と形のバランスで調和を保つ */}
                <div className="relative h-[236px] rounded-2xl overflow-hidden">
                  {/* 背景画像エリア */}
                  <div className="absolute inset-0 ml-[100px] bg-gray-300 rounded-2xl">
                    {/* ライフスタイル画像のプレースホルダー */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 relative rounded-2xl">
                      <div className="absolute top-1/3 left-1/3 w-12 h-8 bg-gray-800 rounded opacity-70"></div>
                      <div className="absolute top-1/2 right-1/4 w-8 h-10 bg-gray-600 rounded opacity-60"></div>
                      <div className="absolute bottom-1/3 left-1/2 w-10 h-6 bg-gray-700 rounded opacity-50"></div>
                    </div>
                  </div>
                  
                  {/* 左上: 数字と日付 */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="text-[54px] font-bold text-gray-900 leading-none">10</div>
                    <div className="text-base text-gray-600">2024.01</div>
                  </div>
                  
                  {/* タグ */}
                  <div className="absolute bottom-[72px] left-[80px] z-10 transform translate-y-2">
                    <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                      ライフスタイル
                    </div>
                  </div>
                  
                  {/* タイトル */}
                  <div className="absolute bottom-4 left-[80px] z-10">
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                      <h3 className="text-base font-bold text-gray-900 leading-tight m-0">
                        色と形のバランスで調和を保つ
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 右カラム: 画像 + 人気の記事ランキング */}
            <div className="space-y-[80px]">
              {/* 上部画像エリア */}
              <div className="w-full h-[316px] bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl overflow-hidden relative">
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
                <div className="flex items-baseline gap-0 mb-5">
                  <h2 className="text-lg font-bold text-gray-900 m-0">人気の記事</h2>
                  <p className="text-sm text-gray-600">Ranking</p>
                </div>
                
                {/* ランキングリスト */}
                <div>
                  {/* ランキング1: そっと溶け込む美しいバランス */}
                  <div className="p-[10px] rounded-lg border border-transparent hover:bg-white hover:border-gray-300 cursor-pointer transition-all duration-200">
                    <div className="flex gap-[10px] items-center">
                      <div className="w-[90px] h-[51px] bg-gradient-to-br from-gray-200 to-gray-300 rounded flex-shrink-0 overflow-hidden">
                        {/* プレースホルダー画像 */}
                        <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 relative">
                          <div className="absolute top-1/3 left-1/4 w-4 h-6 bg-orange-400 rounded opacity-70"></div>
                          <div className="absolute top-1/2 right-1/3 w-3 h-4 bg-gray-600 rounded opacity-60"></div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 leading-tight m-0">
                          そっと溶け込む美しいバランス
                        </h3>
                        <p className="text-xs text-gray-600 m-0">2024.02.09</p>
                      </div>
                    </div>
                  </div>

                  {/* ランキング2: 自然と未来を大切にする */}
                  <div className="p-[10px] rounded-lg border border-transparent hover:bg-white hover:border-gray-300 cursor-pointer transition-all duration-200">
                    <div className="flex gap-[10px] items-center">
                      <div className="w-[90px] h-[51px] bg-gradient-to-br from-gray-200 to-gray-300 rounded flex-shrink-0 overflow-hidden">
                        {/* プレースホルダー画像 */}
                        <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 relative">
                          <div className="absolute top-1/4 left-1/3 w-3 h-5 bg-green-500 rounded opacity-70"></div>
                          <div className="absolute top-1/2 right-1/4 w-4 h-3 bg-green-700 rounded opacity-60"></div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 leading-tight m-0">
                          自然と未来を大切にする
                        </h3>
                        <p className="text-xs text-gray-600 m-0">2024.02.09</p>
                      </div>
                    </div>
                  </div>

                  {/* ランキング3: 美しさと実用性を兼ね備える */}
                  <div className="p-[10px] rounded-lg border border-transparent hover:bg-white hover:border-gray-300 cursor-pointer transition-all duration-200">
                    <div className="flex gap-[10px] items-center">
                      <div className="w-[90px] h-[51px] bg-gradient-to-br from-gray-200 to-gray-300 rounded flex-shrink-0 overflow-hidden">
                        {/* プレースホルダー画像 */}
                        <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 relative">
                          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-purple-500 rounded opacity-70"></div>
                          <div className="absolute top-1/2 right-1/3 w-3 h-5 bg-purple-700 rounded opacity-60"></div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 leading-tight m-0">
                          美しさと実用性を兼ね備える
                        </h3>
                        <p className="text-xs text-gray-600 m-0">2024.02.09</p>
                      </div>
                    </div>
                  </div>

                  {/* ランキング4: 色と形のバランスで調和を保つ */}
                  <div className="p-[10px] rounded-lg border border-transparent hover:bg-white hover:border-gray-300 cursor-pointer transition-all duration-200">
                    <div className="flex gap-[10px] items-center">
                      <div className="w-[90px] h-[51px] bg-gradient-to-br from-gray-200 to-gray-300 rounded flex-shrink-0 overflow-hidden">
                        {/* プレースホルダー画像 */}
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 relative">
                          <div className="absolute top-1/4 left-1/3 w-3 h-4 bg-blue-500 rounded opacity-70"></div>
                          <div className="absolute top-1/2 right-1/4 w-4 h-3 bg-blue-700 rounded opacity-60"></div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 leading-tight m-0">
                          色と形のバランスで調和を保つ
                        </h3>
                        <p className="text-xs text-gray-600 m-0">2024.02.09</p>
                      </div>
                    </div>
                  </div>

                  {/* ランキング5: 好みに合わせて個性を表現する */}
                  <div className="p-[10px] rounded-lg border border-transparent hover:bg-white hover:border-gray-300 cursor-pointer transition-all duration-200">
                    <div className="flex gap-[10px] items-center">
                      <div className="w-[90px] h-[51px] bg-gradient-to-br from-gray-200 to-gray-300 rounded flex-shrink-0 overflow-hidden">
                        {/* プレースホルダー画像 */}
                        <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-200 relative">
                          <div className="absolute top-1/3 left-1/4 w-4 h-3 bg-yellow-500 rounded opacity-70"></div>
                          <div className="absolute top-1/2 right-1/3 w-3 h-4 bg-yellow-700 rounded opacity-60"></div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 leading-tight m-0">
                          好みに合わせて個性を表現する
                        </h3>
                        <p className="text-xs text-gray-600 m-0">2024.02.09</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 特集とカテゴリから探すセクション */}
      <TopicsAndCategorySection />
    </div>
  );
}
