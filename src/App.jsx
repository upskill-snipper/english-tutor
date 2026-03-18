import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { useEffect, Component, lazy, Suspense } from 'react';
import { seedDemoData, getCurrentUser } from './utils/auth';

const Landing = lazy(() => import('./pages/Landing'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const CourseCatalogue = lazy(() => import('./pages/CourseCatalogue'));
const CourseDetail = lazy(() => import('./pages/CourseDetail'));
const CoursePlayer = lazy(() => import('./pages/CoursePlayer'));
const Assessment = lazy(() => import('./pages/Assessment'));
const Certificate = lazy(() => import('./pages/Certificate'));
const Practice = lazy(() => import('./pages/Practice'));
const Revision = lazy(() => import('./pages/Revision'));
const AdminPanel = lazy(() => import('./pages/AdminPanel'));
const NotFound = lazy(() => import('./pages/NotFound'));
const TextLibrary = lazy(() => import('./pages/TextLibrary'));
const PredictedGrades = lazy(() => import('./pages/PredictedGrades'));
const StudyPlanner = lazy(() => import('./pages/StudyPlanner'));
const Glossary = lazy(() => import('./pages/Glossary'));

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
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
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
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/grades" element={<ProtectedRoute><PredictedGrades /></ProtectedRoute>} />
        <Route path="/predicted-grades" element={<ProtectedRoute><PredictedGrades /></ProtectedRoute>} />
        <Route path="/planner" element={<ProtectedRoute><StudyPlanner /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute adminOnly><AdminPanel /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
    </ErrorBoundary>
  );
}
