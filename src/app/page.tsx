import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* メインビジュアル（FV）セクション */}
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

      {/* ピックアップセクション */}
      <section className="pt-[80px] pb-[40px]" style={{ backgroundColor: '#F9F7F6' }}>
        <div className="container">
          <div className="flex flex-col lg:flex-row">
            {/* 左カラム: ピックアップタイトル */}
            <div className="w-full lg:w-[110px] mb-8 lg:mb-0 lg:mr-[40px]">
              <div className="text-left">
                <h2 className="text-lg font-bold text-gray-900 mb-1 mt-0">ピックアップ</h2>
                <p className="text-sm text-gray-600">Pickup</p>
              </div>
            </div>

            {/* 右カラム: 画像付きリスト */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* アイテム1: 色と形のバランスで調和を保つ */}
                <div className="py-[10px] pl-[10px] pr-[40px] rounded-lg transition-all duration-200 border border-transparent hover:bg-white hover:border-gray-300 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-[70px] h-[40px] bg-gradient-to-br from-gray-200 to-gray-300 rounded flex-shrink-0 overflow-hidden">
                      {/* プレースホルダー画像 */}
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <div className="w-6 h-6 bg-blue-400 rounded"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 leading-relaxed m-0">色と形のバランスで調和を保つ</p>
                    </div>
                  </div>
                </div>

                {/* アイテム2: 自然と未来を大切にする */}
                <div className="py-[10px] pl-[10px] pr-[40px] rounded-lg transition-all duration-200 border border-transparent hover:bg-white hover:border-gray-300 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-[70px] h-[40px] bg-gradient-to-br from-gray-200 to-gray-300 rounded flex-shrink-0 overflow-hidden">
                      {/* プレースホルダー画像 */}
                      <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 leading-relaxed m-0">自然と未来を大切にする</p>
                    </div>
                  </div>
                </div>

                {/* アイテム3: 美しさと実用性を兼ね備える */}
                <div className="py-[10px] pl-[10px] pr-[40px] rounded-lg transition-all duration-200 border border-transparent hover:bg-white hover:border-gray-300 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-[70px] h-[40px] bg-gradient-to-br from-gray-200 to-gray-300 rounded flex-shrink-0 overflow-hidden">
                      {/* プレースホルダー画像 */}
                      <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                        <div className="w-6 h-6 bg-purple-400 rounded-lg"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 leading-relaxed m-0">美しさと実用性を兼ね備える</p>
                    </div>
                  </div>
                </div>

                {/* アイテム4: インテリア選びの基準 */}
                <div className="py-[10px] pl-[10px] pr-[40px] rounded-lg transition-all duration-200 border border-transparent hover:bg-white hover:border-gray-300 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-[70px] h-[40px] bg-gradient-to-br from-gray-200 to-gray-300 rounded flex-shrink-0 overflow-hidden">
                      {/* プレースホルダー画像 */}
                      <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                        <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 leading-relaxed m-0">インテリア選びの基準</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3カラム記事セクション */}
      <section className="pt-[40px] pb-[120px]" style={{ backgroundColor: '#F9F7F6' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[110px_1fr_300px] gap-[60px]">
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

            {/* 右カラム: 人気の記事ランキング */}
            <div>
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900">人気の記事</h2>
                <p className="text-sm text-gray-600">Ranking</p>
              </div>
              
              {/* ランキングリスト - 仮のプレースホルダー */}
              <div className="space-y-4">
                <div className="bg-gray-200 h-20 rounded-lg"></div>
                <div className="bg-gray-200 h-20 rounded-lg"></div>
                <div className="bg-gray-200 h-20 rounded-lg"></div>
                <div className="bg-gray-200 h-20 rounded-lg"></div>
                <div className="bg-gray-200 h-20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 事業概要セクション */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">事業概要</h2>
            <p className="text-lg text-muted-foreground">
              私たちは、お客様のビジネス課題を解決し、持続的な成長を実現するための
              包括的なソリューションを提供しています。
            </p>
          </div>
        </div>
      </section>

      {/* 強み・選ばれる理由セクション */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">選ばれる理由</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              豊富な経験と専門知識を活かし、お客様に最適なソリューションを提供します
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">豊富な実績</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  多数のプロジェクトを成功に導いた実績と経験があります。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">専門性</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  各分野の専門家が、高品質なサービスを提供します。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">サポート体制</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  プロジェクト完了後も継続的なサポートを提供します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 主要サービス紹介セクション */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">主要サービス</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              お客様のニーズに合わせた多様なサービスを提供しています
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>サービス A</CardTitle>
                <CardDescription>
                  お客様の課題を解決する包括的なソリューション
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  詳細な分析と戦略立案により、最適な解決策を提供します。
                </p>
                <Link href="/services">
                  <Button variant="outline" size="sm">
                    詳細を見る
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>サービス B</CardTitle>
                <CardDescription>
                  効率的な業務改善とプロセス最適化
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  現状分析から改善提案まで、一貫したサポートを提供します。
                </p>
                <Link href="/services">
                  <Button variant="outline" size="sm">
                    詳細を見る
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>サービス C</CardTitle>
                <CardDescription>
                  長期的な成長戦略の立案と実行支援
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  持続可能な成長を実現するための戦略をサポートします。
                </p>
                <Link href="/services">
                  <Button variant="outline" size="sm">
                    詳細を見る
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 実績・お客様の声セクション */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">お客様の声</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              多くのお客様から高い評価をいただいています
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <blockquote className="text-lg mb-4">
                  &ldquo;期待以上の成果を得ることができました。専門的なアドバイスと迅速な対応に感謝しています。&rdquo;
                </blockquote>
                <footer className="text-sm text-muted-foreground">
                  — A社 代表取締役様
                </footer>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <blockquote className="text-lg mb-4">
                  &ldquo;プロジェクトの進行がスムーズで、結果も素晴らしいものでした。また依頼したいと思います。&rdquo;
                </blockquote>
                <footer className="text-sm text-muted-foreground">
                  — B社 マネージャー様
                </footer>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button variant="outline" size="lg">
                実績・事例を見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            お気軽にお問い合わせください
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-white">
            ご質問やご相談がございましたら、お気軽にお声がけください。
            専門スタッフが丁寧に対応いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-10 py-4 bg-white text-gray-900 hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                お問い合わせフォーム
              </Button>
            </Link>
            <Link href="/downloads">
              <Button size="lg" variant="outline" className="text-lg px-10 py-4 border-white text-white bg-white/10 hover:bg-white hover:text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                会社案内をダウンロード
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
