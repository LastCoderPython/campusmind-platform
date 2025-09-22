import React, { useState } from 'react'
import { Calendar, Clock, MapPin, User, Shield, CheckCircle, Phone, AlertCircle, Star, Users } from 'lucide-react'

interface Counselor {
  id: string
  name: string
  title: string
  specialization: string[]
  institution: string
  experience: string
  rating: number
  totalSessions: number
  languages: string[]
  availableSlots: string[]
  image: string
}

interface TimeSlot {
  id: string
  time: string
  date: string
  available: boolean
}

const BookingPage: React.FC = () => {
  const [selectedCounselor, setSelectedCounselor] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [bookingStep, setBookingStep] = useState(1) // 1: Select Counselor, 2: Select Time, 3: Confirmation
  const [bookingReference, setBookingReference] = useState('')

  // Mock counselors data
  const [counselors] = useState<Counselor[]>([
    {
      id: '1',
      name: 'Dr. Priya Sharma',
      title: 'Licensed Clinical Psychologist',
      specialization: ['Academic Stress', 'Anxiety Disorders', 'Depression', 'Cultural Counseling'],
      institution: 'University of Kashmir',
      experience: '8+ years',
      rating: 4.9,
      totalSessions: 1247,
      languages: ['English', 'Hindi', 'Kashmiri'],
      availableSlots: ['Monday', 'Wednesday', 'Friday'],
      image: '👩‍⚕️'
    },
    {
      id: '2',
      name: 'Dr. Rajesh Kumar',
      title: 'Counseling Psychologist',
      specialization: ['Student Counseling', 'Career Guidance', 'Social Anxiety', 'Relationship Issues'],
      institution: 'University of Jammu',
      experience: '12+ years',
      rating: 4.8,
      totalSessions: 2156,
      languages: ['English', 'Hindi', 'Urdu', 'Dogri'],
      availableSlots: ['Tuesday', 'Thursday', 'Saturday'],
      image: '👨‍⚕️'
    },
    {
      id: '3',
      name: 'Dr. Meera Devi',
      title: 'Psychiatric Social Worker',
      specialization: ['Trauma Counseling', 'Family Therapy', 'Addiction Counseling', 'Crisis Intervention'],
      institution: 'NIT Srinagar',
      experience: '6+ years',
      rating: 4.7,
      totalSessions: 892,
      languages: ['English', 'Hindi', 'Kashmiri'],
      availableSlots: ['Monday', 'Tuesday', 'Thursday'],
      image: '👩‍⚕️'
    },
    {
      id: '4',
      name: 'Dr. Arjun Singh',
      title: 'Clinical Psychologist',
      specialization: ['Men\'s Mental Health', 'Sports Psychology', 'Performance Anxiety', 'Behavioral Therapy'],
      institution: 'SMVD University',
      experience: '10+ years',
      rating: 4.8,
      totalSessions: 1678,
      languages: ['English', 'Hindi', 'Punjabi'],
      availableSlots: ['Wednesday', 'Friday', 'Saturday'],
      image: '👨‍⚕️'
    }
  ])

  // Mock time slots
  const timeSlots: TimeSlot[] = [
    { id: '1', time: '9:00 AM', date: '2025-09-24', available: true },
    { id: '2', time: '10:00 AM', date: '2025-09-24', available: true },
    { id: '3', time: '11:00 AM', date: '2025-09-24', available: false },
    { id: '4', time: '2:00 PM', date: '2025-09-24', available: true },
    { id: '5', time: '3:00 PM', date: '2025-09-24', available: true },
    { id: '6', time: '4:00 PM', date: '2025-09-24', available: false },
  ]

  const handleCounselorSelect = (counselorId: string) => {
    setSelectedCounselor(counselorId)
    setBookingStep(2)
  }

  const handleTimeSelect = (date: string, time: string) => {
    setSelectedDate(date)
    setSelectedTime(time)
    setBookingStep(3)
  }

  const handleBookingConfirm = () => {
    // Generate anonymous booking reference
    const reference = 'CM' + Math.random().toString(36).substr(2, 8).toUpperCase()
    setBookingReference(reference)
    setBookingStep(4)
    
    // In real implementation, this would save to Supabase
    console.log('Booking confirmed:', {
      counselor: selectedCounselor,
      date: selectedDate,
      time: selectedTime,
      reference: reference
    })
  }

  const selectedCounselorData = counselors.find(c => c.id === selectedCounselor)

  const renderStepIndicator = () => (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {[1, 2, 3].map((step) => (
          <React.Fragment key={step}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: bookingStep >= step ? '#2563eb' : '#e5e7eb',
              color: bookingStep >= step ? 'white' : '#6b7280',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '600',
              fontSize: '14px'
            }}>
              {bookingStep > step ? <CheckCircle size={18} /> : step}
            </div>
            {step < 3 && (
              <div style={{
                width: '60px',
                height: '2px',
                background: bookingStep > step ? '#2563eb' : '#e5e7eb'
              }}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )

  const renderStep1 = () => (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
          Choose Your Counselor
        </h2>
        <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>
          All sessions are completely anonymous. Select a counselor based on your needs and preferences.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
        {counselors.map((counselor) => (
          <div 
            key={counselor.id}
            style={{
              background: 'white',
              borderRadius: '16px',
              border: '2px solid #e5e7eb',
              padding: '24px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#2563eb'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 99, 235, 0.15)'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e5e7eb'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
            onClick={() => handleCounselorSelect(counselor.id)}
          >
            {/* Enhanced Counselor Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
            <div style={{
                fontSize: '3rem',
                background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
            }}>
                {counselor.image}
            </div>
            
            <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '4px' }}>
                {counselor.name}
                </h3>
                <p style={{ color: '#2563eb', fontWeight: '500', marginBottom: '4px' }}>
                {counselor.title}
                </p>
                
                {/* Location Info using MapPin */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <MapPin size={14} color="#6b7280" />
                <span style={{ color: '#6b7280', fontSize: '14px' }}>
                    {counselor.institution} Campus
                </span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Star size={16} color="#fbbf24" fill="#fbbf24" />
                    <span style={{ fontWeight: '600', color: '#111827' }}>{counselor.rating}</span>
                </div>
                <span style={{ color: '#6b7280', fontSize: '14px' }}>
                    {counselor.totalSessions} sessions
                </span>
                <span style={{ color: '#6b7280', fontSize: '14px' }}>
                    {counselor.experience}
                </span>
                </div>

                {/* Session Types using User and Users icons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <User size={14} color="#16a34a" />
                    <span style={{ color: '#6b7280', fontSize: '13px' }}>
                    1-on-1 Sessions
                    </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Users size={14} color="#9333ea" />
                    <span style={{ color: '#6b7280', fontSize: '13px' }}>
                    Group Therapy
                    </span>
                </div>
                </div>

                {/* High Demand Alert using AlertCircle */}
                {counselor.totalSessions > 1500 && (
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px', 
                    background: '#fef3c7', 
                    padding: '6px 10px', 
                    borderRadius: '6px',
                    marginTop: '4px'
                }}>
                    <AlertCircle size={14} color="#d97706" />
                    <span style={{ color: '#92400e', fontSize: '12px', fontWeight: '500' }}>
                    High Demand - Book Early
                    </span>
                </div>
                )}
            </div>
            </div>

            {/* Specializations */}
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
                Specializations:
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {counselor.specialization.map((spec, index) => (
                  <span 
                    key={index}
                    style={{
                      background: '#eff6ff',
                      color: '#2563eb',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
                Languages:
              </h4>
              <div style={{ display: 'flex', gap: '8px' }}>
                {counselor.languages.map((lang, index) => (
                  <span 
                    key={index}
                    style={{
                      background: '#f3f4f6',
                      color: '#4b5563',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '12px'
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div style={{ 
              background: '#f9fafb', 
              padding: '12px', 
              borderRadius: '8px',
              marginBottom: '16px'
            }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#111827', marginBottom: '6px' }}>
                Available Days:
              </h4>
              <p style={{ fontSize: '13px', color: '#4b5563' }}>
                {counselor.availableSlots.join(', ')}
              </p>
            </div>

            <button 
              className="btn btn-primary" 
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Calendar size={16} />
              Book with {counselor.name.split(' ')[1]}
            </button>
          </div>
        ))}
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
          Select Date & Time
        </h2>
        <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>
          Choose a convenient time slot for your anonymous session with {selectedCounselorData?.name}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Selected Counselor Info */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
            Your Selected Counselor
          </h3>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ fontSize: '2rem' }}>{selectedCounselorData?.image}</div>
            <div>
              <h4 style={{ fontWeight: '600', color: '#111827', marginBottom: '4px' }}>
                {selectedCounselorData?.name}
              </h4>
              <p style={{ color: '#6b7280', fontSize: '14px' }}>
                {selectedCounselorData?.title}
              </p>
            </div>
          </div>

          <div style={{ background: '#f9fafb', padding: '12px', borderRadius: '8px', marginBottom: '16px' }}>
            <div style={{ fontSize: '13px', color: '#4b5563', marginBottom: '8px' }}>
              <strong>Session Details:</strong>
            </div>
            <ul style={{ fontSize: '13px', color: '#4b5563', margin: 0, paddingLeft: '16px' }}>
              <li>Duration: 50 minutes</li>
              <li>Format: In-person or Video call</li>
              <li>Anonymous reference ID will be provided</li>
              <li>No personal information required</li>
            </ul>
          </div>

          <button 
            onClick={() => setBookingStep(1)}
            className="btn btn-secondary"
            style={{ width: '100%' }}
          >
            Change Counselor
          </button>
        </div>

        {/* Time Slot Selection */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
            Available Time Slots
          </h3>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px', color: '#374151' }}>
              Select Date:
            </label>
            <select 
              style={{ 
                width: '100%', 
                padding: '12px', 
                borderRadius: '8px', 
                border: '1px solid #d1d5db',
                fontSize: '14px'
              }}
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              <option value="">Choose a date</option>
              <option value="2025-09-24">Tuesday, September 24, 2025</option>
              <option value="2025-09-25">Wednesday, September 25, 2025</option>
              <option value="2025-09-26">Thursday, September 26, 2025</option>
              <option value="2025-09-27">Friday, September 27, 2025</option>
            </select>
          </div>

          {selectedDate && (
            <div>
              <label style={{ display: 'block', fontWeight: '500', marginBottom: '12px', color: '#374151' }}>
                Available Times:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    disabled={!slot.available}
                    onClick={() => handleTimeSelect(selectedDate, slot.time)}
                    style={{
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      background: slot.available ? 'white' : '#f3f4f6',
                      color: slot.available ? '#111827' : '#9ca3af',
                      cursor: slot.available ? 'pointer' : 'not-allowed',
                      fontSize: '14px',
                      fontWeight: '500',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      if (slot.available) {
                        e.currentTarget.style.background = '#eff6ff'
                        e.currentTarget.style.borderColor = '#2563eb'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (slot.available) {
                        e.currentTarget.style.background = 'white'
                        e.currentTarget.style.borderColor = '#d1d5db'
                      }
                    }}
                  >
                    <Clock size={14} style={{ marginRight: '6px' }} />
                    {slot.time}
                    {!slot.available && (
                      <span style={{ fontSize: '11px', display: 'block', marginTop: '2px' }}>
                        Booked
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedDate && selectedTime && (
            <button 
              onClick={handleBookingConfirm}
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '20px' }}
            >
              Confirm Booking
            </button>
          )}
        </div>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <div style={{ 
        background: 'white', 
        borderRadius: '20px', 
        padding: '40px', 
        border: '2px solid #22c55e',
        boxShadow: '0 8px 24px rgba(34, 197, 94, 0.15)'
      }}>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          background: '#dcfce7', 
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px auto'
        }}>
          <CheckCircle size={40} color="#16a34a" />
        </div>

        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
          Booking Confirmed! 🎉
        </h2>
        
        <p style={{ color: '#6b7280', fontSize: '1.1rem', marginBottom: '32px' }}>
          Your anonymous counseling session has been successfully scheduled.
        </p>

        <div style={{ 
          background: '#f8fafc', 
          padding: '24px', 
          borderRadius: '12px', 
          textAlign: 'left',
          marginBottom: '32px'
        }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
            📋 Session Details
          </h3>
          
          <div style={{ display: 'grid', gap: '12px' }}>
            <div>
              <span style={{ fontWeight: '500', color: '#374151' }}>Counselor: </span>
              <span style={{ color: '#6b7280' }}>{selectedCounselorData?.name}</span>
            </div>
            <div>
              <span style={{ fontWeight: '500', color: '#374151' }}>Date: </span>
              <span style={{ color: '#6b7280' }}>{selectedDate}</span>
            </div>
            <div>
              <span style={{ fontWeight: '500', color: '#374151' }}>Time: </span>
              <span style={{ color: '#6b7280' }}>{selectedTime}</span>
            </div>
            <div>
              <span style={{ fontWeight: '500', color: '#374151' }}>Reference ID: </span>
              <span style={{ 
                background: '#2563eb', 
                color: 'white', 
                padding: '2px 8px', 
                borderRadius: '6px',
                fontFamily: 'monospace',
                fontWeight: '600'
              }}>
                {bookingReference}
              </span>
            </div>
            <div>
              <span style={{ fontWeight: '500', color: '#374151' }}>Duration: </span>
              <span style={{ color: '#6b7280' }}>50 minutes</span>
            </div>
          </div>
        </div>

        <div style={{ 
          background: '#eff6ff', 
          padding: '16px', 
          borderRadius: '8px', 
          marginBottom: '24px',
          textAlign: 'left'
        }}>
          <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1e40af', marginBottom: '8px' }}>
            📱 Important Information:
          </h4>
          <ul style={{ fontSize: '13px', color: '#1e40af', margin: 0, paddingLeft: '16px' }}>
            <li>Save your Reference ID: <strong>{bookingReference}</strong></li>
            <li>No personal information is stored or required</li>
            <li>Arrive 10 minutes early for in-person sessions</li>
            <li>Session confirmation will be sent to the provided contact method</li>
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button 
            onClick={() => {
              setBookingStep(1)
              setSelectedCounselor(null)
              setSelectedDate('')
              setSelectedTime('')
              setBookingReference('')
            }}
            className="btn btn-secondary"
          >
            Book Another Session
          </button>
          <button className="btn btn-primary">
            <Phone size={16} />
            Contact Support
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#111827', marginBottom: '16px' }}>
            Book Anonymous Counseling
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto', marginBottom: '32px' }}>
            Schedule confidential one-on-one sessions with licensed mental health professionals across J&K institutions.
          </p>

          {/* Privacy Assurance */}
          <div style={{ 
            background: 'linear-gradient(135deg, #dbeafe, #eff6ff)', 
            padding: '16px', 
            borderRadius: '12px',
            border: '1px solid #bfdbfe',
            maxWidth: '500px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <Shield size={20} color="#2563eb" />
            <span style={{ fontWeight: '500', color: '#1e40af', fontSize: '14px' }}>
              100% Anonymous • No Personal Information Required • Secure Booking
            </span>
          </div>
        </div>

        {/* Step Indicator */}
        {bookingStep <= 3 && renderStepIndicator()}

        {/* Booking Steps */}
        {bookingStep === 1 && renderStep1()}
        {bookingStep === 2 && renderStep2()}
        {bookingStep === 3 && renderStep3()}
      </div>
    </div>
  )
}

export default BookingPage
