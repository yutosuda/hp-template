import { PickupItem } from "@/lib/types";

const pickupItems: PickupItem[] = [
  {
    id: "1",
    title: "色と形のバランスで調和を保つ",
    imageClass: "bg-gradient-to-br from-blue-100 to-blue-200",
    iconClass: "w-6 h-6 bg-blue-400 rounded"
  },
  {
    id: "2", 
    title: "自然と未来を大切にする",
    imageClass: "bg-gradient-to-br from-green-100 to-green-200",
    iconClass: "w-6 h-6 bg-green-400 rounded-full"
  },
  {
    id: "3",
    title: "美しさと実用性を兼ね備える", 
    imageClass: "bg-gradient-to-br from-purple-100 to-purple-200",
    iconClass: "w-6 h-6 bg-purple-400 rounded-lg"
  },
  {
    id: "4",
    title: "インテリア選びの基準",
    imageClass: "bg-gradient-to-br from-orange-100 to-orange-200", 
    iconClass: "w-6 h-6 bg-orange-400 rounded-full"
  }
];

export function PickupSection() {
  return (
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
              {pickupItems.map((item) => (
                <div 
                  key={item.id}
                  className="py-[10px] pl-[10px] pr-[40px] rounded-lg transition-all duration-200 border border-transparent hover:bg-white hover:border-gray-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-[70px] h-[40px] bg-gradient-to-br from-gray-200 to-gray-300 rounded flex-shrink-0 overflow-hidden">
                      <div className={`w-full h-full ${item.imageClass} flex items-center justify-center`}>
                        <div className={item.iconClass}></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 leading-relaxed m-0">{item.title}</p>
                    </div>
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