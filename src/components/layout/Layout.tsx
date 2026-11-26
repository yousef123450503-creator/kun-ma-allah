import React from 'react';
import { Home, BookOpen, Fingerprint, HeartHandshake, Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/home', label: 'الرئيسية', icon: Home },
  { path: '/quran', label: 'القرآن', icon: BookOpen },
  { path: '/tasbeeh', label: 'المسبحة', icon: Fingerprint },
  { path: '/azkar', label: 'الأذكار', icon: HeartHandshake },
  { path: '/settings', label: 'الإعدادات', icon: Settings },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      {/* القائمة الجانبية للـ Laptop فقط */}
      <aside className="hidden lg:flex w-64 border-l border-[#e2d8c3] flex-col p-6 fixed right-0 top-0 bottom-0 bg-white">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0e5c3e] to-[#156e4c] flex items-center justify-center text-white font-bold text-xl">ك</div>
          <span className="font-bold text-xl text-[#0e5c3e]">كن مع الله</span>
        </div>
        <nav className="space-y-2">
          {navItems.map(item => (
            <NavLink key={item.path} to={item.path} className={({isActive}) => `flex items-center gap-4 p-3 rounded-xl transition ${isActive ? 'bg-[#f0fdf4] text-[#0e5c3e] font-bold' : 'text-gray-500 hover:bg-gray-50'}`}>
              <item.icon size={24} /> {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* المحتوى الرئيسي */}
      <main className="flex-1 lg:mr-64 pb-20 lg:pb-0">
        {children}
      </main>

      {/* القائمة السفلية للموبايل فقط */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#e2d8c3] flex justify-around p-3 z-50">
        {navItems.map(item => (
          <NavLink key={item.path} to={item.path} className={({isActive}) => `flex flex-col items-center gap-1 ${isActive ? 'text-[#0e5c3e]' : 'text-gray-400'}`}>
            <item.icon size={24} />
            <span className="text-[10px]">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
