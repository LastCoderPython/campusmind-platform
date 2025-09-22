import React, { useState } from 'react'
import { MessageSquare, Users, Shield, Plus, ThumbsUp, Clock, AlertTriangle, Heart } from 'lucide-react'

interface ForumPost {
  id: string
  username: string
  title: string
  content: string
  category: string
  timestamp: string
  likes: number
  replies: number
  isModerated: boolean
  isPinned: boolean
  riskLevel?: 'low' | 'medium' | 'high'
}

const PeerSupportPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showNewPostModal, setShowNewPostModal] = useState(false)
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: 'general'
  })

  // Mock forum posts data
  const [forumPosts] = useState<ForumPost[]>([
    {
      id: '1',
      username: 'AnonymousLion🦁',
      title: 'Dealing with exam anxiety - sharing what helped me',
      content: 'Hi everyone! I wanted to share some techniques that really helped me manage my exam stress. Deep breathing exercises and breaking study into smaller chunks made a huge difference...',
      category: 'academic-stress',
      timestamp: '2 hours ago',
      likes: 12,
      replies: 8,
      isModerated: true,
      isPinned: true,
      riskLevel: 'low'
    },
    {
      id: '2',
      username: 'MountainEagle🦅',
      title: 'Feeling overwhelmed with everything',
      content: 'Sometimes it feels like there\'s just too much happening at once. Between studies, family expectations, and future worries, I feel like I\'m drowning. How do others cope?',
      category: 'general',
      timestamp: '4 hours ago',
      likes: 15,
      replies: 12,
      isModerated: true,
      isPinned: false,
      riskLevel: 'medium'
    },
    {
      id: '3',
      username: 'SilentRiver🌊',
      title: 'Sleep troubles affecting my studies',
      content: 'Has anyone else struggled with insomnia during college? My sleep schedule is completely messed up and it\'s affecting my concentration during lectures.',
      category: 'lifestyle',
      timestamp: '6 hours ago',
      likes: 8,
      replies: 5,
      isModerated: true,
      isPinned: false,
      riskLevel: 'low'
    },
    {
      id: '4',
      username: 'QuietDove🕊️',
      title: 'Making friends in college - introvert struggles',
      content: 'I\'ve always been shy and making new friends in college feels really challenging. Anyone have tips for introverts to connect with others?',
      category: 'social',
      timestamp: '1 day ago',
      likes: 22,
      replies: 18,
      isModerated: true,
      isPinned: false,
      riskLevel: 'low'
    },
    {
      id: '5',
      username: 'BraveHawk🦅',
      title: 'Success story: How I overcame social anxiety',
      content: 'Six months ago, I could barely speak in class. Today I gave my first presentation! Want to share my journey and what techniques worked for me.',
      category: 'success-stories',
      timestamp: '2 days ago',
      likes: 45,
      replies: 25,
      isModerated: true,
      isPinned: true,
      riskLevel: 'low'
    }
  ])

  const categories = [
    { id: 'all', name: 'All Posts', icon: MessageSquare, count: forumPosts.length },
    { id: 'general', name: 'General Support', icon: Heart, count: forumPosts.filter(p => p.category === 'general').length },
    { id: 'academic-stress', name: 'Academic Stress', icon: AlertTriangle, count: forumPosts.filter(p => p.category === 'academic-stress').length },
    { id: 'social', name: 'Social Connection', icon: Users, count: forumPosts.filter(p => p.category === 'social').length },
    { id: 'lifestyle', name: 'Lifestyle & Wellness', icon: Clock, count: forumPosts.filter(p => p.category === 'lifestyle').length },
    { id: 'success-stories', name: 'Success Stories', icon: ThumbsUp, count: forumPosts.filter(p => p.category === 'success-stories').length }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? forumPosts 
    : forumPosts.filter(post => post.category === selectedCategory)

  const handleNewPost = (e: React.FormEvent) => {
    e.preventDefault()
    // In real implementation, this would save to Supabase
    alert('Post submitted for moderation! Our trained volunteers will review it within 2 hours.')
    setShowNewPostModal(false)
    setNewPost({ title: '', content: '', category: 'general' })
  }

  const getRiskBadge = (riskLevel?: string) => {
    if (!riskLevel) return null
    
    const colors = {
      low: { bg: '#dcfce7', text: '#166534', border: '#bbf7d0' },
      medium: { bg: '#fef3c7', text: '#92400e', border: '#fde68a' },
      high: { bg: '#fee2e2', text: '#991b1b', border: '#fca5a5' }
    }
    
    return (
      <span style={{
        background: colors[riskLevel as keyof typeof colors].bg,
        color: colors[riskLevel as keyof typeof colors].text,
        border: `1px solid ${colors[riskLevel as keyof typeof colors].border}`,
        padding: '2px 8px',
        borderRadius: '12px',
        fontSize: '11px',
        fontWeight: '500'
      }}>
        Moderated
      </span>
    )
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#111827', marginBottom: '16px' }}>
            Peer Support Community
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto', marginBottom: '32px' }}>
            Anonymous, safe space for students to share experiences and support each other. 
            All posts are moderated by trained psychology volunteers.
          </p>
          
          {/* Community Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '32px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#2563eb' }}>1,247</div>
              <div style={{ fontSize: '14px', color: '#6b7280' }}>Active Members</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#16a34a' }}>89</div>
              <div style={{ fontSize: '14px', color: '#6b7280' }}>Posts This Week</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#9333ea' }}>24/7</div>
              <div style={{ fontSize: '14px', color: '#6b7280' }}>Peer Support</div>
            </div>
          </div>

          {/* Safety Notice */}
          <div style={{ 
            background: 'linear-gradient(135deg, #dbeafe, #eff6ff)', 
            padding: '20px', 
            borderRadius: '12px',
            border: '1px solid #bfdbfe',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <Shield size={20} color="#2563eb" />
              <span style={{ fontWeight: '600', color: '#1e40af' }}>Safe Space Guidelines</span>
            </div>
            <p style={{ fontSize: '14px', color: '#1e40af', margin: 0, textAlign: 'left' }}>
              All posts are reviewed by trained volunteers. Crisis posts receive immediate attention. 
              Be kind, supportive, and respectful of others' experiences.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '32px' }}>
          
          {/* Left Sidebar - Categories & New Post */}
          <div>
            {/* New Post Button */}
            <button 
              onClick={() => setShowNewPostModal(true)}
              className="btn btn-primary" 
              style={{ width: '100%', marginBottom: '24px', justifyContent: 'center' }}
            >
              <Plus size={20} />
              Share Your Story
            </button>

            {/* Categories */}
            <div style={{ background: 'white', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
                Categories
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px',
                      borderRadius: '8px',
                      border: 'none',
                      background: selectedCategory === category.id ? '#eff6ff' : 'transparent',
                      color: selectedCategory === category.id ? '#2563eb' : '#6b7280',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s',
                      width: '100%'
                    }}
                  >
                    <category.icon size={18} />
                    <span style={{ flex: 1, fontSize: '14px', fontWeight: '500' }}>{category.name}</span>
                    <span style={{ 
                      fontSize: '12px', 
                      background: selectedCategory === category.id ? '#2563eb' : '#e5e7eb',
                      color: selectedCategory === category.id ? 'white' : '#6b7280',
                      padding: '2px 8px',
                      borderRadius: '12px'
                    }}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Moderator Info */}
            <div style={{ 
              background: 'white', 
              borderRadius: '12px', 
              padding: '20px', 
              border: '1px solid #e5e7eb',
              marginTop: '24px'
            }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
                🎓 Our Moderators
              </h4>
              <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.5', marginBottom: '12px' }}>
                Psychology students and counseling volunteers from J&K institutions moderate all posts.
              </p>
              <div style={{ fontSize: '12px', color: '#16a34a' }}>
                ✓ Average response time: 1.2 hours
              </div>
            </div>
          </div>

          {/* Main Content - Forum Posts */}
          <div>
            {/* Posts Header */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '24px',
              padding: '16px 20px',
              background: 'white',
              borderRadius: '12px',
              border: '1px solid #e5e7eb'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#111827', margin: 0 }}>
                {selectedCategory === 'all' ? 'All Posts' : categories.find(c => c.id === selectedCategory)?.name}
                <span style={{ color: '#6b7280', fontWeight: '400' }}> ({filteredPosts.length})</span>
              </h2>
              <select style={{ 
                padding: '8px 12px', 
                borderRadius: '8px', 
                border: '1px solid #d1d5db',
                fontSize: '14px',
                background: 'white'
              }}>
                <option>Most Recent</option>
                <option>Most Liked</option>
                <option>Most Replies</option>
              </select>
            </div>

            {/* Forum Posts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {filteredPosts.map((post) => (
                <div 
                  key={post.id}
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    border: '1px solid #e5e7eb',
                    padding: '24px',
                    transition: 'all 0.2s',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  {/* Pin indicator */}
                  {post.isPinned && (
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      background: '#fef3c7',
                      color: '#92400e',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '11px',
                      fontWeight: '600'
                    }}>
                      📌 Pinned
                    </div>
                  )}

                  {/* Post Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '16px'
                      }}>
                        {post.username.charAt(0)}
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontWeight: '500', color: '#111827' }}>{post.username}</span>
                          {getRiskBadge(post.riskLevel)}
                        </div>
                        <span style={{ fontSize: '13px', color: '#6b7280' }}>{post.timestamp}</span>
                      </div>
                    </div>
                    <span style={{
                      background: '#f3f4f6',
                      color: '#4b5563',
                      padding: '4px 8px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      textTransform: 'capitalize'
                    }}>
                      {post.category.replace('-', ' ')}
                    </span>
                  </div>

                  {/* Post Content */}
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '600', 
                    color: '#111827', 
                    marginBottom: '12px',
                    cursor: 'pointer'
                  }}>
                    {post.title}
                  </h3>
                  <p style={{ 
                    color: '#4b5563', 
                    lineHeight: '1.6', 
                    marginBottom: '16px',
                    cursor: 'pointer'
                  }}>
                    {post.content}
                  </p>

                  {/* Post Actions */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <button style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'none',
                        border: 'none',
                        color: '#6b7280',
                        fontSize: '14px',
                        cursor: 'pointer',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        transition: 'all 0.2s'
                      }}>
                        <ThumbsUp size={16} />
                        {post.likes} likes
                      </button>
                      <button style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'none',
                        border: 'none',
                        color: '#6b7280',
                        fontSize: '14px',
                        cursor: 'pointer',
                        padding: '6px 12px',
                        borderRadius: '6px'
                      }}>
                        <MessageSquare size={16} />
                        {post.replies} replies
                      </button>
                    </div>
                    <button style={{
                      background: '#eff6ff',
                      color: '#2563eb',
                      border: '1px solid #bfdbfe',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}>
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* New Post Modal */}
        {showNewPostModal && (
          <div className="modal">
            <div className="modal-content" style={{ maxWidth: '600px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Share Your Story</h2>
                <button 
                  onClick={() => setShowNewPostModal(false)}
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

              <form onSubmit={handleNewPost}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>
                    Category
                  </label>
                  <select 
                    value={newPost.category}
                    onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      borderRadius: '8px', 
                      border: '1px solid #d1d5db',
                      fontSize: '16px'
                    }}
                  >
                    <option value="general">General Support</option>
                    <option value="academic-stress">Academic Stress</option>
                    <option value="social">Social Connection</option>
                    <option value="lifestyle">Lifestyle & Wellness</option>
                    <option value="success-stories">Success Stories</option>
                  </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>
                    Title
                  </label>
                  <input 
                    type="text"
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    placeholder="What would you like to share?"
                    required
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      borderRadius: '8px', 
                      border: '1px solid #d1d5db',
                      fontSize: '16px'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '8px' }}>
                    Your Story
                  </label>
                  <textarea 
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    placeholder="Share your experience, thoughts, or advice. Remember, this is a safe space where everyone supports each other."
                    required
                    rows={6}
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      borderRadius: '8px', 
                      border: '1px solid #d1d5db',
                      fontSize: '16px',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div style={{ 
                  background: '#f3f4f6', 
                  padding: '16px', 
                  borderRadius: '8px', 
                  marginBottom: '20px' 
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <Shield size={16} color="#4b5563" />
                    <span style={{ fontWeight: '500', fontSize: '14px' }}>Moderation Notice</span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#4b5563', margin: 0, lineHeight: '1.4' }}>
                    All posts are reviewed by trained psychology volunteers before appearing in the forum. 
                    Posts with crisis indicators receive immediate attention and professional support.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                    Share Post
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowNewPostModal(false)}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PeerSupportPage
