
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import ChatWidget from './components/sections/ChatWidget';


function App() {
  return (
    //  <ChatProvider>
    <Router>
      <MainLayout>
        <ChatWidget />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </MainLayout>
    </Router>
    // </ChatProvider>
  );

}

export default App;