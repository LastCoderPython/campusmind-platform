import React from 'react'
import { Brain, Shield, Heart, Users, ArrowRight, Clock, Calendar, BookOpen, BarChart3, Lock, UserX, Database, Award } from 'lucide-react'
import ResourcesPage from './components/ResourcesPage'
import PeerSupportPage from './components/PeerSupportPage'
import BookingPage from './components/BookingPage'

import './App.css'

function App() {
  const [showScreeningModal, setShowScreeningModal] = React.useState<boolean>(false)
  const [currentPage, setCurrentPage] = React.useState<string>('home')
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  const handleStartScreening = () => {
    setShowScreeningModal(true)
    console.log('Starting CampusMind screening...')
  }

  const handleNavigate = (page: string) => {
    setCurrentPage(page)
    setShowScreeningModal(false) // Close any open modals
    setShowMobileMenu(false) // Close mobile menu when navigating
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Add hamburger menu toggle function
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (showMobileMenu && !target.closest('.nav') && !target.closest('.mobile-menu-btn')) {
        setShowMobileMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showMobileMenu])

  // Render different pages based on currentPage state
  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'resources':
        return <ResourcesPage />
      case 'peer-support':
        return <PeerSupportPage />
      case 'booking':
        return <BookingPage />
      case 'home':
      default:
        return (
          <>
            {/* Hero Section */}
            <section id="home" className="hero">
              <div className="container">
                <div className="hero-content">
                  
                  {/* Left Column */}
                  <div className="hero-left">
                    <div className="badge">
                      <Shield size={16} />
                      Approved by J&K Department of Higher Education
                    </div>
                    
                    <h1>
                      Your Campus
                      <span className="gradient-text">Mental Wellness</span>
                      Journey Starts Here
                    </h1>
                    
                    <p>
                      Anonymous, confidential mental health support designed specifically for college students in Jammu & Kashmir. 
                      Take the first step towards better mental wellness with our culturally sensitive approach.
                    </p>
                    
                    <div className="button-group">
                      <button onClick={handleStartScreening} className="btn btn-primary">
                        <Brain size={20} />
                        Start Anonymous Screening
                        <ArrowRight size={20} />
                      </button>
                      <button className="btn btn-secondary" onClick={() => handleNavigate('resources')}>
                        Learn More
                      </button>
                    </div>

                    <div className="trust-indicators">
                      <div className="trust-card">
                        <Shield size={24} color="#2563eb" className="trust-icon" />
                        <h3>100% Anonymous</h3>
                        <p>No registration needed</p>
                      </div>
                      <div className="trust-card">
                        <Heart size={24} color="#9333ea" className="trust-icon" />
                        <h3>Culturally Aware</h3>
                        <p>J&K context specific</p>
                      </div>
                      <div className="trust-card">
                        <Users size={24} color="#16a34a" className="trust-icon" />
                        <h3>Peer Support</h3>
                        <p>Trained volunteers</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Screening Preview */}
                  <div>
                    <div className="screening-card">
                      <div className="screening-header">
                        <div className="screening-icon">
                          <Brain size={32} color="#2563eb" />
                        </div>
                        <h3>CampusMind Screening</h3>
                        <p className="subtitle">PHQ-9 Validated • Anonymous • 5 Minutes</p>
                      </div>
                      
                      <div className="screening-features">
                        <div className="feature-item blue">
                          <div className="feature-dot blue pulse"></div>
                          <span>Depression Assessment</span>
                          <span className="feature-badge blue">PHQ-9</span>
                        </div>
                        <div className="feature-item green">
                          <div className="feature-dot green"></div>
                          <span>Academic Stress Analysis</span>
                          <span className="feature-badge green">Custom</span>
                        </div>
                        <div className="feature-item purple">
                          <div className="feature-dot purple"></div>
                          <span>Crisis Detection</span>
                          <span className="feature-badge purple">AI</span>
                        </div>
                      </div>

                      <div className="progress-section">
                        <div className="progress-header">
                          <span>Assessment Progress:</span>
                          <span>Ready to Start</span>
                        </div>
                        <div className="progress-bar">
                          <div className="progress-fill"></div>
                        </div>
                        <div className="progress-footer">
                          <Clock size={16} />
                          <span>Estimated time: 3-5 minutes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features">
              <div className="container">
                <div className="features-header">
                  <h2>Complete Mental Health Ecosystem</h2>
                  <p>Comprehensive, anonymous support platform designed specifically for students in Jammu & Kashmir</p>
                </div>

                <div className="features-grid">
                  {/* AI-Guided Screening */}
                  <div className="feature-card">
                    <div className="feature-icon ai">
                      <Brain size={40} color="#2563eb" />
                    </div>
                    <h3>AI-Guided First-Aid Support</h3>
                    <p>Clinically validated PHQ-9 assessment with intelligent, culturally sensitive responses and immediate feedback.</p>
                    <ul className="feature-list">
                      <li>9-question depression screening</li>
                      <li>Instant risk level assessment</li>
                      <li>Personalized coping strategies</li>
                      <li>Crisis intervention protocols</li>
                    </ul>
                  </div>

                  {/* Booking System */}
                  <div className="feature-card">
                    <div className="feature-icon booking">
                      <Calendar size={40} color="#16a34a" />
                    </div>
                    <h3>Confidential Booking System</h3>
                    <p>Anonymous appointment scheduling with campus counselors and mental health professionals across J&K institutions.</p>
                    <ul className="feature-list">
                      <li>Anonymous session booking</li>
                      <li>Campus counselor network</li>
                      <li>Flexible time slots</li>
                      <li>Reference ID system</li>
                    </ul>
                  </div>

                  {/* Resource Hub */}
                  <div className="feature-card">
                    <div className="feature-icon resources">
                      <BookOpen size={40} color="#d97706" />
                    </div>
                    <h3>Psychoeducational Resource Hub</h3>
                    <p>Comprehensive mental wellness guides, videos, and self-help resources tailored for Indian college students.</p>
                    <ul className="feature-list">
                      <li>Academic stress management</li>
                      <li>Sleep hygiene guides</li>
                      <li>Relaxation audio sessions</li>
                      <li>Regional language content</li>
                    </ul>
                  </div>

                  {/* Peer Support */}
                  <div className="feature-card">
                    <div className="feature-icon peer">
                      <Users size={40} color="#9333ea" />
                    </div>
                    <h3>Peer Support Platform</h3>
                    <p>Moderated anonymous peer-to-peer support forum with trained student volunteers from psychology departments.</p>
                    <ul className="feature-list">
                      <li>Anonymous community forums</li>
                      <li>Trained peer moderators</li>
                      <li>Topic-based discussions</li>
                      <li>Safe space guidelines</li>
                    </ul>
                  </div>

                  {/* Analytics Dashboard */}
                  <div className="feature-card">
                    <div className="feature-icon analytics">
                      <BarChart3 size={40} color="#dc2626" />
                    </div>
                    <h3>Admin Analytics Dashboard</h3>
                    <p>Real-time anonymous data insights for J&K Higher Education officials to develop evidence-based mental health policies.</p>
                    <ul className="feature-list">
                      <li>Anonymous trend analysis</li>
                      <li>Institution-wise reporting</li>
                      <li>Crisis pattern recognition</li>
                      <li>Resource utilization metrics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Privacy Section */}
            <section className="privacy">
              <div className="container">
                <div className="privacy-header">
                  <h2>Your Privacy is 100% Protected</h2>
                </div>

                <div className="privacy-grid">
                  <div className="privacy-card">
                    <div className="privacy-icon shield">
                      <Lock size={30} color="#2563eb" />
                    </div>
                    <h3>No Registration Required</h3>
                    <p>Start immediately without creating any account or providing personal information. Complete anonymity guaranteed.</p>
                  </div>

                  <div className="privacy-card">
                    <div className="privacy-icon anonymous">
                      <UserX size={30} color="#9333ea" />
                    </div>
                    <h3>Anonymous Session IDs</h3>
                    <p>Only random session identifiers are used. No tracking across devices or correlation with personal identity.</p>
                  </div>

                  <div className="privacy-card">
                    <div className="privacy-icon secure">
                      <Database size={30} color="#16a34a" />
                    </div>
                    <h3>Healthcare-Grade Security</h3>
                    <p>Bank-level encryption and secure cloud storage. All data handling follows strict healthcare privacy standards.</p>
                  </div>

                  <div className="privacy-card">
                    <div className="privacy-icon approved">
                      <Award size={30} color="#d97706" />
                    </div>
                    <h3>Government Approved</h3>
                    <p>Endorsed by J&K Department of Higher Education with institutional oversight and ethical guidelines compliance.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Government Section */}
            <section className="government">
              <div className="container">
                <div className="government-content">
                  <div className="government-badge">
                    <Shield size={24} />
                    <span>Government of Jammu & Kashmir</span>
                  </div>
                  <h2>Department of Higher Education Partnership</h2>
                  <p>
                    "This platform represents our commitment to student mental wellness across all higher education institutions in Jammu & Kashmir. 
                    CampusMind provides the anonymous, culturally sensitive support our students need."
                  </p>
                  <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '24px' }}>
                    Developed in partnership with institutional Psychology and Student Welfare departments across J&K
                  </p>

                  <div className="partnership-logos">
                    <div className="logo-placeholder">Psychology Dept</div>
                    <div className="logo-placeholder">Student Welfare</div>
                    <div className="logo-placeholder">IQAC</div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )
    }
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Crisis Alert */}
      <div className="crisis-alert">
        <div className="container">
          <span>
            <strong>🚨 24/7 Crisis Support:</strong> National: 9152987821 | NIMHANS: 080-46110007
          </span>
          <button className="crisis-btn">Emergency Help</button>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="container">
          {/* Top row: Logo, Hamburger, and Start Screening button */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            width: '100%'
          }}>
            <div className="logo" onClick={() => handleNavigate('home')}>
              <div className="logo-icon">
                <Brain size={24} color="white" />
              </div>
              <div className="logo-text">
                <h1>CampusMind</h1>
                <p>Mental Wellness Platform</p>
              </div>
            </div>

            {/* Mobile Hamburger Button - only visible on mobile */}
            <button 
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              style={{
                display: 'none', // Hidden on desktop
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '6px',
                transition: 'background 0.2s'
              }}
            >
              <div style={{ 
                width: '24px', 
                height: '18px', 
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <span style={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#374151',
                  borderRadius: '1px',
                  transition: 'all 0.3s',
                  transformOrigin: 'center',
                  transform: showMobileMenu ? 'rotate(45deg) translateY(8px)' : 'rotate(0)'
                }}></span>
                <span style={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#374151',
                  borderRadius: '1px',
                  transition: 'all 0.3s',
                  opacity: showMobileMenu ? '0' : '1'
                }}></span>
                <span style={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#374151',
                  borderRadius: '1px',
                  transition: 'all 0.3s',
                  transformOrigin: 'center',
                  transform: showMobileMenu ? 'rotate(-45deg) translateY(-8px)' : 'rotate(0)'
                }}></span>
              </div>
            </button>

            <button onClick={handleStartScreening} className="btn btn-primary">
              Start Screening
            </button>
          </div>

          {/* Navigation menu - collapsible on mobile */}
          <nav className={`nav ${showMobileMenu ? 'nav-mobile-open' : ''}`}>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavigate('home'); }}
              style={{ color: currentPage === 'home' ? '#2563eb' : '#4b5563' }}
            >
              🏠 Home
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavigate('resources'); }}
              style={{ color: currentPage === 'resources' ? '#2563eb' : '#4b5563' }}
            >
              📚 Resources
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavigate('peer-support'); }}
              style={{ color: currentPage === 'peer-support' ? '#2563eb' : '#4b5563' }}
            >
              👥 Peer Support
            </a>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); handleNavigate('booking'); }}
              style={{ color: currentPage === 'booking' ? '#2563eb' : '#4b5563' }}
            >
              📅 Book Counselor
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content - Render Current Page */}
      <main>
        {renderCurrentPage()}
      </main>
      
      {/* Screening Modal */}
      {showScreeningModal && (
        <div className="modal">
          <div className="modal-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ margin: 0 }}>🧠 CampusMind Screening</h2>
              <button 
                onClick={() => setShowScreeningModal(false)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  fontSize: '24px', 
                  cursor: 'pointer',
                  color: '#6b7280'
                }}
              >
                ×
              </button>
            </div>
            <p>
              Your BotPenguin chatbot will be embedded here once it's ready. This will provide the complete PHQ-9 mental health assessment.
            </p>
            <div className="info-box">
              <p>
                🔒 Completely anonymous • 🧠 Clinically validated • ⚡ Instant results • 🏥 Crisis intervention
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '40px', background: '#f9fafb', borderRadius: '12px', margin: '20px 0' }}>
              <Brain size={48} color="#2563eb" style={{ marginBottom: '16px' }} />
              <p style={{ color: '#6b7280', margin: 0 }}>BotPenguin Integration Ready</p>
              <p style={{ color: '#9ca3af', fontSize: '14px', margin: '8px 0 0 0' }}>Chatbot will appear here automatically</p>
            </div>
            <button 
              onClick={() => setShowScreeningModal(false)}
              className="btn btn-primary"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
