import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AiRecommendations from './pages/AiRecommendations';
import ExamAnalysis from './pages/ExamAnalysis';
import ExamTracker from './pages/ExamTracker';
import NetTracker from './pages/NetTracker';
import Notes from './pages/Notes';
import Statistics from './pages/Statistics';
import StudyPlan from './pages/StudyPlan';
import TopicPerformance from './pages/TopicPerformance';
import UniversityGoal from './pages/UniversityGoal';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/ai-recommendations">AI Tavsiyeleri</Link></li>
          <li><Link to="/exam-analysis">Sınav Analizi</Link></li>
          <li><Link to="/exam-tracker">Sınav Takibi</Link></li>
          <li><Link to="/net-tracker">Net Takibi</Link></li>
          <li><Link to="/notes">Notlar</Link></li>
          <li><Link to="/statistics">İstatistikler</Link></li>
          <li><Link to="/study-plan">Çalışma Planı</Link></li>
          <li><Link to="/topic-performance">Konu Performansı</Link></li>
          <li><Link to="/university-goal">Üniversite Hedefi</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ai-recommendations" element={<AiRecommendations />} />
          <Route path="/exam-analysis" element={<ExamAnalysis />} />
          <Route path="/exam-tracker" element={<ExamTracker />} />
          <Route path="/net-tracker" element={<NetTracker />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/study-plan" element={<StudyPlan />} />
          <Route path="/topic-performance" element={<TopicPerformance />} />
          <Route path="/university-goal" element={<UniversityGoal />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
