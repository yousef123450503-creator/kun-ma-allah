import React, { useState } from 'react'
import { Bell, Settings, Home, BookOpen, Fingerprint, HeartHandshake, ChevronLeft } from 'lucide-react'

// مكون صغير للبطاقات لتقليل تكرار الكود
const PrayerCard = ({ name, time, active }: { name: string; time: string; active?: boolean }) => (
  <div className={`flex flex-col items-center p-2 md:p-4 rounded-2xl transition-all ${
    active 
    ? 'bg-white border-2 border-[#0e5c3e] shadow-md ring-4 ring-[#0e5c3e]/10' 
    : 'bg-[#fbf9f5] border border-[#e2d8c3]/50'
  }`}>
    <span className={`text-[10px] md:text-xs uppercase ${active ? 'font-bold text-[#0e5c3e]' : 'text-gray-500'}`}>{name}</span>
    <span className="font-bold text-sm md:text-lg">{time}</span>
  </div>
)

const NavItem = ({ icon: Icon, label, active }: { icon: any; label: string; active?: boolean }) => (
  <div className={`flex flex-col lg:flex-row items-center gap-1 lg:gap-3 p-2 lg:p-3 rounded-xl transition cursor-pointer ${
    active ? 'text-[#0e5c3e] bg-[#f0fdf4] font-bold' : 'text-gray-400 lg:text-gray-500 hover:bg-gray-50'
  }`}>
    <Icon size={24} strokeWidth={active ? 2.5 : 2} />
    <span className="text-[10px] lg:text-base">{label}</span>
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-[#f5f2eb] font-sans pb-20 lg:pb-0 lg:pr-64">
      
      {/* القائمة الجانبية (Sidebar) - تظهر فقط في الشاشات الكبيرة */}
      <aside className="hidden lg:flex fixed right-0 top-0 bottom-0 w-64 bg-white border-l border-[#e2d8c3] flex-col p-6 z-50">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0e5c3e] to-[#156e4c] flex items-center justify-center text-white font-bold text-xl">ك</div>
          <span className="font-bold text-xl text-[#0e5c3e]">كن مع الله</span>
        </div>
        <nav className="space-y-2">
          <NavItem icon={Home} label="الرئيسية" active />
          <NavItem icon={BookOpen} label="القرآن الكريم" />
          <NavItem icon={Fingerprint} label="المسبحة" />
          <NavItem icon={HeartHandshake} label="الأدعية" />
          <NavItem icon={Settings} label="الإعدادات" />
        </nav>
      </aside>

      {/* الهيدر المتجاوب */}
      <header className="bg-[#0e5c3e] text-white pt-6 pb-12 lg:pb-20 px-4 md:px-10 lg:rounded-br-[4rem] shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_12px]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center justify-between mb-8">
            <button className="p-2 rounded-full bg-[#156e4c] lg:hidden"><Bell size={20} /></button>
            <h1 className="text-2xl md:text-3xl font-bold">الرئيسية</h1>
            <button className="p-2 rounded-full bg-[#156e4c] hidden lg:flex items-center gap-2 px-4">
              <span>الإعدادات</span> <Settings size={20} />
            </button>
            <div className="lg:hidden w-8"></div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="text-center md:text-right">
              <p className="text-[#e2d8c3] text-sm md:text-lg">١٦ رمضان ١٤٤٥ هـ</p>
              <p className="text-white/80 text-xs md:text-base">الثلاثاء، ٢٦ مارس ٢٠٢٤ م</p>
            </div>
            <div className="bg-[#104b34] border border-white/10 rounded-2xl p-5 text-center shadow-2xl md:min-w-[300px]">
              <p className="text-[10px] md:text-xs text-[#d3c7ad] uppercase tracking-widest mb-1">الصلاة القادمة: الظهر</p>
              <div className="text-3xl md:text-5xl font-bold font-mono tracking-tighter">٠٢:٤٥:١٢</div>
            </div>
          </div>
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="px-4 md:px-10 -mt-6 md:-mt-10 relative z-20 max-w-5xl mx-auto space-y-6 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 space-y-6">
            {/* مواقيت الصلاة */}
            <div className="bg-white border border-[#e2d8c3] rounded-3xl p-4 md:p-6 shadow-sm">
              <h3 className="font-bold text-[#0e5c3e] mb-4">مواقيت الصلاة</h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                <PrayerCard name="Fajr" time="٠٤:٣٨" />
                <PrayerCard name="Dhuhr" time="١٢:١٩" active />
                <PrayerCard name="Asr" time="٠٣:٤٠" />
                <PrayerCard name="Maghrib" time="٠٦:٠٢" />
                <PrayerCard name="Isha" time="٠٧:١٧" />
              </div>
            </div>

            {/* آية اليوم */}
            <div className="bg-[#fbf9f5] border border-[#e2d8c3] rounded-3xl p-8 shadow-sm text-center">
              <span className="text-[10px] font-bold text-[#0e5c3e] uppercase bg-[#0e5c3e]/10 px-3 py-1 rounded-full">Daily Verse</span>
              <p className="text-2xl md:text-4xl font-serif text-[#16382b] mt-6 leading-loose italic">
                ﴿ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ ﴾
              </p>
              <p className="text-xs text-gray-400 mt-4">سورة الرعد: ٢٨</p>
            </div>
          </div>

          {/* عمود جانبي للأذكار */}
          <div className="bg-white border border-[#e2d8c3] rounded-3xl p-6 shadow-sm h-fit">
            <h3 className="font-bold text-[#0e5c3e] mb-4 flex justify-between items-center">
              <span>أذكاري اليوم</span>
              <ChevronLeft size={16} />
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs"><span>الاستغفار</span> <span>٧٥٪</span></div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0e5c3e] w-3/4"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs"><span>الحمد لله</span> <span>٤٠٪</span></div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#d97706] w-[40%]"></div>
                </div>
              </div>
              <button className="w-full mt-4 py-3 rounded-xl bg-[#0e5c3e] text-white font-bold shadow-lg shadow-[#0e5c3e]/20 active:scale-95 transition">ابدأ التسبيح</button>
            </div>
          </div>
        </div>
      </main>

      {/* القائمة السفلية (Bottom Nav) - تظهر فقط في الموبايل */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-[#e2d8c3] py-2 px-6 flex justify-between items-center z-50">
        <NavItem icon={Home} label="الرئيسية" active />
        <NavItem icon={BookOpen} label="القرآن" />
        <NavItem icon={Fingerprint} label="المسبحة" />
        <NavItem icon={HeartHandshake} label="الأدعية" />
        <NavItem icon={Settings} label="الإعدادات" />
      </nav>

    </div>
  )
}

export default App
