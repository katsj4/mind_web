import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';



import ChatWidget from './components/sections/ChatWidget';
import HowItWorks from './pages/how-it-works';
import Cookies from './pages/cookies';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

function AppContent() {
  const { pathname } = useLocation();

  // ✅ All routes that should NOT use MainLayout (no nav/footer/chat)
  const noLayoutRoutes = ['/PrivacyPolicy', '/terms', '/cookies'];
  const isLayoutExcluded = noLayoutRoutes.includes(pathname);

  return isLayoutExcluded ? (
    <Routes>
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
      <Route path="/Terms" element={<Terms />} />
      <Route path="/cookies" element={<Cookies  />} />
    </Routes>
  ) : (
    <MainLayout>
      <ChatWidget />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </MainLayout>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
