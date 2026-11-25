import React from 'react'
import { Bell, Settings, Volume2 } from 'lucide-react'

// مكون البطاقة الصغيرة للصلاة
const PrayerCard = ({ nameAr, nameEn, time, active }: any) => (
  <div className={`p-3 rounded-2xl border flex flex-col items-center justify-center text-center transition-all ${
    active 
    ? 'bg-white shadow-md ring-2 ring-[#0e5c3e]/20 border-[#0e5c3e]' 
    : 'bg-[#fbf9f5] border-[#e2d8c3]/80'
  }`}>
    <span className="text-xs font-semibold text-[#615949]">{nameAr}</span>
    <span className="text-[10px] text-[#8e8574] font-sans uppercase">{nameEn}</span>
    <span className="text-base font-bold text-[#1a2e24] mt-1">{time}</span>
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-[#f5f2eb] font-sans pb-20">
      {/* الهيدر الأخضر اللي في الصورة */}
      <div className="bg-[#0e5c3e] text-white pt-6 pb-10 px-4 rounded-b-[2.5rem] shadow-lg relative overflow-hidden">
        <div className="flex items-center justify-between relative z-10">
          <button className="p-2 rounded-full bg-[#156e4c]"><Bell className="w-5 h-5 text-[#f3e9d2]" /></button>
          <h1 className="text-2xl font-bold font-serif">كن مع الله</h1>
          <button className="p-2 rounded-full bg-[#156e4c]"><Settings className="w-5 h-5 text-[#f3e9d2]" /></button>
        </div>

        {/* التواريخ */}
        <div className="flex justify-between mt-6 text-[10px] text-[#e2d8c3] border-t border-[#ffffff1a] pt-4">
          <div className="text-right">
            <div>١٦ رمضان ١٤٤٥ هـ</div>
            <div>٢٦ مارس ٢٠٢٤ م</div>
          </div>
          <div className="text-left">
            <div>26 مارس</div>
            <div>2024 م</div>
          </div>
        </div>

        {/* كارت الصلاة القادمة */}
        <div className="mt-6 bg-[#104b34] rounded-2xl p-4 text-center border border-[#ffffff1a]">
          <p className="text-[10px] text-[#d3c7ad] uppercase tracking-widest mb-1 font-medium">Next Prayer: Dhuhr</p>
          <div className="text-3xl font-bold tracking-tighter">٠٢:٤٥:١٢</div>
        </div>
      </div>

      {/* شبكة مواقيت الصلاة (3 فوق و 2 تحت) */}
      <div className="px-4 -mt-5 relative z-20 space-y-3">
        <div className="grid grid-cols-3 gap-3">
          <PrayerCard nameAr="الفجر" nameEn="Fajr" time="٠٤:٣٨" />
          <PrayerCard nameAr="الظهر" nameEn="Dhuhr" time="١٢:١٩" active />
          <PrayerCard nameAr="العصر" nameEn="Asr" time="٠٣:٤٠" />
        </div>
        <div className="grid grid-cols-2 gap-3 px-8">
          <PrayerCard nameAr="المغرب" nameEn="Maghrib" time="٠٦:٠٢" />
          <PrayerCard nameAr="العشاء" nameEn="Isha" time="٠٧:١٧" />
        </div>

        {/* آية اليوم */}
        <div className="bg-[#fbf9f5] border border-[#e2d8c3] rounded-2xl p-4 mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-bold text-[#0e5c3e] uppercase">Daily Verse</span>
            <span className="text-[10px] text-[#827867]">تفسير السعدي :</span>
          </div>
          <div className="bg-[#f5f0e6] rounded-xl p-4 text-center border border-[#e8dfcd]">
            <p className="text-lg font-serif text-[#16382b]">﴿ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ ﴾</p>
          </div>
          <p className="text-[10px] text-[#8c816e] mt-2">سورة الرعد: ٢٨</p>
        </div>
      </div>

      {/* القائمة السفلية */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#e2d8c3] py-2 px-6 flex justify-between items-center">
        <div className="flex flex-col items-center text-[#0e5c3e]"><span className="text-lg">🏠</span><span className="text-[9px] font-bold">Home</span></div>
        <div className="flex flex-col items-center text-[#8c8270]"><span className="text-lg">📖</span><span className="text-[9px]">Quran</span></div>
        <div className="flex flex-col items-center text-[#8c8270]"><span className="text-lg">📿</span><span className="text-[9px]">Tasbeeh</span></div>
        <div className="flex flex-col items-center text-[#8c8270]"><span className="text-lg">🤲</span><span className="text-[9px]">Dua</span></div>
        <div className="flex flex-col items-center text-[#8c8270]"><span className="text-lg">⚙️</span><span className="text-[9px]">Settings</span></div>
      </div>
    </div>
  )
}

export default App
