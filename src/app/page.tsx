import { HeroSection, PickupSection, TopicsAndCategorySection, ThreeColumnSection, MonthlyFeaturedSection, InterviewSection } from "@/components/sections";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* メインビジュアル（FV）セクション */}
      <HeroSection />

      {/* ピックアップセクション */}
      <PickupSection />

      {/* 3カラム記事セクション */}
      <ThreeColumnSection />

      {/* 特集とカテゴリから探すセクション */}
      <TopicsAndCategorySection />

      {/* 今月の特集セクション */}
      <MonthlyFeaturedSection />

      {/* インタビューセクション */}
      <InterviewSection />
    </div>
  );
}
