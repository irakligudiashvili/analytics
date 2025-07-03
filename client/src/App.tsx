import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import AdminPanel from './pages/AdminPanel'
import { useAuth } from './contexts/AuthContext'

function App() {
  const { loading, isLoggedIn } = useAuth();

  if(loading){
    return (
      <div>Loading...</div>
    )
  }

  return (
    <Router>
      <Navbar />

      <div className='page-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route 
            path='/dashboard'
            element={
              loading ? (
                <div>Loading...</div>
              ) : isLoggedIn ? (
                <Dashboard />
              ) : (
                <Navigate to='/login' />
              )
            }
          />
          <Route
            path='/admin'
            element={
              <ProtectedRoute requiredRole='admin'>
                <AdminPanel />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
