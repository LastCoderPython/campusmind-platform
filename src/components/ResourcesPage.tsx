import React from 'react'
import { Phone, Download, BookOpen, Heart, Clock, MapPin, Users, AlertTriangle } from 'lucide-react'

const ResourcesPage: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#111827', marginBottom: '16px' }}>
            Mental Health Resources
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
            Comprehensive support resources for students across Jammu & Kashmir
          </p>
        </div>

        {/* Crisis Resources - Always First */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #fee2e2, #fecaca)', 
            padding: '40px', 
            borderRadius: '16px',
            border: '2px solid #fca5a5',
            marginBottom: '40px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <AlertTriangle size={48} color="#dc2626" style={{ marginBottom: '16px' }} />
              <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#7f1d1d', marginBottom: '12px' }}>
                🚨 Emergency Crisis Support
              </h2>
              <p style={{ color: '#991b1b', fontSize: '1.1rem' }}>
                If you're having thoughts of self-harm, please reach out immediately
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              <div style={{ background: 'white', padding: '24px', borderRadius: '12px', textAlign: 'center' }}>
                <Phone size={32} color="#dc2626" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontWeight: '600', color: '#7f1d1d', marginBottom: '8px' }}>National Helpline</h3>
                <p style={{ fontSize: '1.25rem', fontWeight: '700', color: '#dc2626' }}>9152987821</p>
                <p style={{ fontSize: '14px', color: '#6b7280' }}>24/7 Suicide Prevention</p>
              </div>
              
              <div style={{ background: 'white', padding: '24px', borderRadius: '12px', textAlign: 'center' }}>
                <Heart size={32} color="#dc2626" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontWeight: '600', color: '#7f1d1d', marginBottom: '8px' }}>NIMHANS Helpline</h3>
                <p style={{ fontSize: '1.25rem', fontWeight: '700', color: '#dc2626' }}>080-46110007</p>
                <p style={{ fontSize: '14px', color: '#6b7280' }}>Mental Health Emergency</p>
              </div>
              
              <div style={{ background: 'white', padding: '24px', borderRadius: '12px', textAlign: 'center' }}>
                <MapPin size={32} color="#dc2626" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontWeight: '600', color: '#7f1d1d', marginBottom: '8px' }}>J&K Crisis Line</h3>
                <p style={{ fontSize: '1.25rem', fontWeight: '700', color: '#dc2626' }}>194-2459999</p>
                <p style={{ fontSize: '14px', color: '#6b7280' }}>Regional Crisis Support</p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '32px' }}>
              <button className="btn btn-primary" style={{ background: '#dc2626' }}>
                <Phone size={20} />
                Get Immediate Help
              </button>
            </div>
          </div>
        </section>

        {/* Self-Help Resources */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#111827', textAlign: 'center', marginBottom: '50px' }}>
            Self-Help Resources
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            
            {/* Academic Stress */}
            <div className="feature-card">
              <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <BookOpen size={32} color="#2563eb" />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
                Academic Stress Management
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '24px', lineHeight: '1.6' }}>
                Practical strategies for managing exam anxiety, study pressure, and academic performance stress.
              </p>
              <ul className="feature-list">
                <li>Time management techniques</li>
                <li>Study schedule optimization</li>
                <li>Exam anxiety reduction</li>
                <li>Performance pressure coping</li>
              </ul>
              <button className="btn btn-secondary" style={{ marginTop: '16px', width: '100%' }}>
                <Download size={16} />
                Download Guide (PDF)
              </button>
            </div>

            {/* Sleep Hygiene */}
            <div className="feature-card">
              <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #e9d5ff, #d8b4fe)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Clock size={32} color="#9333ea" />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
                Sleep & Lifestyle Wellness
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '24px', lineHeight: '1.6' }}>
                Improve your mental health through better sleep habits and healthy daily routines.
              </p>
              <ul className="feature-list">
                <li>Sleep schedule optimization</li>
                <li>Digital detox strategies</li>
                <li>Morning routine building</li>
                <li>Healthy habits tracking</li>
              </ul>
              <button className="btn btn-secondary" style={{ marginTop: '16px', width: '100%' }}>
                <Download size={16} />
                Download Guide (PDF)
              </button>
            </div>

            {/* Mindfulness */}
            <div className="feature-card">
              <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Heart size={32} color="#16a34a" />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
                Mindfulness & Relaxation
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '24px', lineHeight: '1.6' }}>
                Audio-guided meditation and breathing exercises designed for stressed students.
              </p>
              <ul className="feature-list">
                <li>5-minute breathing exercises</li>
                <li>Guided meditation sessions</li>
                <li>Progressive muscle relaxation</li>
                <li>Stress relief audio tracks</li>
              </ul>
              <button className="btn btn-secondary" style={{ marginTop: '16px', width: '100%' }}>
                <Download size={16} />
                Access Audio Library
              </button>
            </div>

          </div>
        </section>

        {/* Campus Counseling Centers */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#111827', textAlign: 'center', marginBottom: '50px' }}>
            Campus Counseling Centers
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
            
            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
                🏛️ University of Kashmir
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', color: '#6b7280' }}>
                <Phone size={16} style={{ marginRight: '8px' }} />
                <span>0194-2420076</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', color: '#6b7280' }}>
                <Clock size={16} style={{ marginRight: '8px' }} />
                <span>Mon-Fri, 9:00 AM - 5:00 PM</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', color: '#6b7280' }}>
                <MapPin size={16} style={{ marginRight: '8px' }} />
                <span>Student Counseling Center, Main Campus</span>
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }}>
                Book Appointment
              </button>
            </div>

            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
                🏛️ University of Jammu
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', color: '#6b7280' }}>
                <Phone size={16} style={{ marginRight: '8px' }} />
                <span>0191-2455348</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', color: '#6b7280' }}>
                <Clock size={16} style={{ marginRight: '8px' }} />
                <span>Mon-Fri, 9:00 AM - 5:00 PM</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', color: '#6b7280' }}>
                <MapPin size={16} style={{ marginRight: '8px' }} />
                <span>Psychology Department, Block-C</span>
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }}>
                Book Appointment
              </button>
            </div>

            <div style={{ background: 'white', padding: '32px', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
                🏛️ NIT Srinagar
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', color: '#6b7280' }}>
                <Phone size={16} style={{ marginRight: '8px' }} />
                <span>0194-2479065</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', color: '#6b7280' }}>
                <Clock size={16} style={{ marginRight: '8px' }} />
                <span>Mon-Sat, 10:00 AM - 6:00 PM</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', color: '#6b7280' }}>
                <MapPin size={16} style={{ marginRight: '8px' }} />
                <span>Student Affairs Office</span>
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }}>
                Book Appointment
              </button>
            </div>

          </div>
        </section>

        {/* Educational Content */}
        <section>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#111827', textAlign: 'center', marginBottom: '50px' }}>
            Mental Health Education
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            
            {['Understanding Depression', 'Anxiety Management', 'Stress & Academic Performance', 'When to Seek Help', 'Supporting Friends', 'Cultural Mental Health'].map((topic, index) => (
              <div key={index} style={{ 
                background: 'white', 
                padding: '24px', 
                borderRadius: '12px', 
                border: '1px solid #e5e7eb',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <Users size={32} color="#2563eb" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
                  {topic}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
                  Learn about {topic.toLowerCase()} with practical tips and professional insights.
                </p>
                <button className="btn btn-secondary" style={{ fontSize: '14px', padding: '8px 16px' }}>
                  Read Article
                </button>
              </div>
            ))}

          </div>
        </section>

      </div>
    </div>
  )
}

export default ResourcesPage
