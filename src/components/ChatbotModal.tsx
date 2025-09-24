import React, { useEffect } from 'react'
import { Brain, X, Shield, Clock } from 'lucide-react'

interface ChatbotModalProps {
  isOpen: boolean
  onClose: () => void
}

const ChatbotModal: React.FC<ChatbotModalProps> = ({ isOpen, onClose }) => {
  
  useEffect(() => {
    if (isOpen) {
      // Remove any existing BotPenguin elements first
      const existingScript = document.getElementById('messenger-widget-b');
      if (existingScript) {
        existingScript.remove();
      }
      const existingBot = document.querySelector('botpenguin-root');
      if (existingBot) {
        existingBot.remove();
      }
      
      // Create BotPenguin script with correct format
      const script = document.createElement('script');
      script.id = 'messenger-widget-b';
      script.src = 'https://cdn.botpenguin.com/website-bot.js';
      script.defer = true;
      script.textContent = '68d2abc9fc90dc2132f9ccc5,68c670e1511b1c56323fc293';
      
      // Hide loading after BotPenguin loads
      script.onload = () => {
        setTimeout(() => {
          const loadingElement = document.getElementById('chatbot-loading');
          if (loadingElement) {
            loadingElement.style.display = 'none';
          }
          console.log('BotPenguin chatbot loaded successfully');
          
          // Check if BotPenguin widget appeared
          setTimeout(() => {
            const widget = document.getElementById('BotPenguin-messenger');
            if (widget) {
              console.log('BotPenguin widget is ready!');
            }
          }, 1000);
          
        }, 2000);
      };
      
      document.body.appendChild(script);
      
      // Cleanup when modal closes
      return () => {
        const scriptToRemove = document.getElementById('messenger-widget-b');
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
        const botRoot = document.querySelector('botpenguin-root');
        if (botRoot) {
          botRoot.remove();
        }
      };
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="modal" style={{ zIndex: 1000 }}>
      <div className="modal-content" style={{ 
        maxWidth: '900px', 
        width: '95%', 
        height: '80vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* Modal Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '20px 24px 16px 24px',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
              padding: '8px',
              borderRadius: '8px'
            }}>
              <Brain size={24} color="#2563eb" />
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '600' }}>
                🧠 CampusMind Mental Health Screening
              </h2>
              <p style={{ margin: '4px 0 0 0', color: '#6b7280', fontSize: '14px' }}>
                Anonymous PHQ-9 Assessment • Completely Confidential
              </p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '6px',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
          >
            <X size={20} color="#6b7280" />
          </button>
        </div>

        {/* Safety Notice */}
        <div style={{ 
          background: '#eff6ff', 
          padding: '12px 24px',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Shield size={16} color="#2563eb" />
          <span style={{ fontSize: '13px', color: '#1e40af' }}>
            🔒 This conversation is completely anonymous and confidential. No personal information is stored.
          </span>
        </div>

        {/* Quick Info */}
        <div style={{ 
          padding: '12px 24px',
          background: '#f9fafb',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={14} color="#16a34a" />
            <span style={{ fontSize: '12px', color: '#166534' }}>3-5 minutes</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Brain size={14} color="#9333ea" />
            <span style={{ fontSize: '12px', color: '#7e22ce' }}>PHQ-9 Validated</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Shield size={14} color="#dc2626" />
            <span style={{ fontSize: '12px', color: '#dc2626' }}>Crisis Detection</span>
          </div>
        </div>

        {/* Chatbot Container */}
        <div style={{ 
          flex: 1, 
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '400px'
        }}>
          
          {/* Loading State */}
          <div id="chatbot-loading" style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            gap: '16px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              border: '4px solid #e5e7eb',
              borderTop: '4px solid #2563eb',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            <p style={{ color: '#6b7280', margin: 0 }}>
              Initializing your confidential mental health screening...
            </p>
          </div>

          {/* BotPenguin will inject chatbot here */}
          <div id="botpenguin-chatbot" style={{ 
            flex: 1,
            minHeight: '400px',
            background: 'white',
            borderRadius: '8px'
          }}></div>
          
        </div>

        {/* Footer */}
        <div style={{ 
          padding: '16px 24px',
          borderTop: '1px solid #e5e7eb',
          background: '#fafafa',
          textAlign: 'center'
        }}>
          <p style={{ 
            margin: 0, 
            fontSize: '12px', 
            color: '#6b7280' 
          }}>
            🏥 If you're experiencing a mental health emergency, please call{' '}
            <strong style={{ color: '#dc2626' }}>9152987821</strong> immediately.
          </p>
        </div>

      </div>
    </div>
  )
}

// Add spinning animation to index.css
const style = document.createElement('style')
style.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
document.head.appendChild(style)

export default ChatbotModal
