import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Header } from '@components/layout/Header'
import { BottomNav } from '@components/layout/BottomNav'
import { SideDrawer } from '@components/layout/SideDrawer'
import { PageLayout } from '@components/layout/PageLayout'
import { Loading } from '@components/ui/Loading'
import { useSettingsStore } from '@store/slices/settingsSlice'
import { useEffect } from 'react'

// Lazy load pages for code splitting
const HomePage = lazy(() => import('@features/home/HomePage').then(m => ({ default: m.HomePage })))
const PrayerTimesPage = lazy(() => import('@features/prayer/PrayerTimesPage').then(m => ({ default: m.PrayerTimesPage })))
const QuranPage = lazy(() => import('@features/quran/QuranPage').then(m => ({ default: m.QuranPage })))
const AzkarPage = lazy(() => import('@features/azkar/AzkarPage').then(m => ({ default: m.AzkarPage })))
const QiblaPage = lazy(() => import('@features/qibla/QiblaPage').then(m => ({ default: m.QiblaPage })))
const CalendarPage = lazy(() => import('@features/calendar/CalendarPage').then(m => ({ default: m.CalendarPage })))
const ZakatPage = lazy(() => import('@features/zakat/ZakatPage').then(m => ({ default: m.ZakatPage })))
const TasbeehPage = lazy(() => import('@features/tasbeeh/TasbeehPage').then(m => ({ default: m.TasbeehPage })))
const AIAssistantPage = lazy(() => import('@features/ai-assistant/AIAssistantPage').then(m => ({ default: m.AIAssistantPage })))
const SettingsPage = lazy(() => import('@pages/Settings').then(m => ({ default: m.SettingsPage })))

function App() {
  const { theme, language } = useSettingsStore()
  
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      // system
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [theme, language])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="pb-16 pt-16 min-h-screen">
        <Suspense fallback={<Loading fullScreen />}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={
              <PageLayout>
                <HomePage />
              </PageLayout>
            } />
            <Route path="/prayer-times" element={
              <PageLayout>
                <PrayerTimesPage />
              </PageLayout>
            } />
            <Route path="/quran" element={
              <PageLayout>
                <QuranPage />
              </PageLayout>
            } />
            <Route path="/quran/:surahNumber" element={
              <PageLayout>
                <QuranPage />
              </PageLayout>
            } />
            <Route path="/quran/:surahNumber/:ayahNumber" element={
              <PageLayout>
                <QuranPage />
              </PageLayout>
            } />
            <Route path="/azkar" element={
              <PageLayout>
                <AzkarPage />
              </PageLayout>
            } />
            <Route path="/qibla" element={
              <PageLayout>
                <QiblaPage />
              </PageLayout>
            } />
            <Route path="/calendar" element={
              <PageLayout>
                <CalendarPage />
              </PageLayout>
            } />
            <Route path="/zakat" element={
              <PageLayout>
                <ZakatPage />
              </PageLayout>
            } />
            <Route path="/tasbeeh" element={
              <PageLayout>
                <TasbeehPage />
              </PageLayout>
            } />
            <Route path="/ai-assistant" element={
              <PageLayout>
                <AIAssistantPage />
              </PageLayout>
            } />
            <Route path="/settings" element={
              <PageLayout>
                <SettingsPage />
              </PageLayout>
            } />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </Suspense>
      </main>
      <BottomNav />
      <SideDrawer />
    </div>
  )
}

export default App
