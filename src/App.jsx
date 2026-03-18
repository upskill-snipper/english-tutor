import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { useEffect, Component } from 'react';
import { seedDemoData, getCurrentUser } from './utils/auth';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CourseCatalogue from './pages/CourseCatalogue';
import CourseDetail from './pages/CourseDetail';
import CoursePlayer from './pages/CoursePlayer';
import Assessment from './pages/Assessment';
import Certificate from './pages/Certificate';
import Practice from './pages/Practice';
import Revision from './pages/Revision';
import AdminPanel from './pages/AdminPanel';
import NotFound from './pages/NotFound';
import TextLibrary from './pages/TextLibrary';
import PredictedGrades from './pages/PredictedGrades';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: '2rem', textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>
            Something went wrong
          </h1>
          <p style={{ color: '#94a3b8', marginBottom: '2rem', maxWidth: '400px' }}>
            An unexpected error occurred. Please try again or return to the home page.
          </p>
          <a href="/" className="btn-primary" style={{ textDecoration: 'none' }}>
            Go Home
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

function ProtectedRoute({ children, adminOnly = false }) {
  const user = getCurrentUser();
  if (!user) return <Navigate to="/login" replace />;
  if (adminOnly && user.role !== 'admin') return <Navigate to="/dashboard" replace />;
  return children;
}

export default function App() {
  useEffect(() => {
    seedDemoData();
  }, []);

  return (
    <ErrorBoundary>
    <BrowserRouter basename="/english-tutor">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<CourseCatalogue />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/learn/:courseId/module/:moduleId" element={<ProtectedRoute><CoursePlayer /></ProtectedRoute>} />
        <Route path="/learn/:courseId/assessment" element={<ProtectedRoute><Assessment /></ProtectedRoute>} />
        <Route path="/certificate/:certId" element={<Certificate />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/revision" element={<Revision />} />
        <Route path="/texts" element={<TextLibrary />} />
        <Route path="/grades" element={<ProtectedRoute><PredictedGrades /></ProtectedRoute>} />
        <Route path="/predicted-grades" element={<ProtectedRoute><PredictedGrades /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute adminOnly><AdminPanel /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </ErrorBoundary>
  );
}
