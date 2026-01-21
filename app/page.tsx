'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, MessageCircle, Send, Sparkles, Instagram, Twitter, TrendingUp } from 'lucide-react'

const influencerPersona = {
  name: "Nova",
  tagline: "AI Creator ✨ | Tech & Lifestyle | Living in the Future 🚀",
  bio: "Hey! I'm Nova, your friendly AI influencer exploring the intersection of technology, creativity, and human connection. Join me on this journey! 💜",
  followers: "847K",
  following: "1,234",
  posts: "2,847"
}

const samplePosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1633218388467-539651dcf81a?w=600&h=600&fit=crop",
    caption: "Just finished coding my new neural art project! 🎨✨ The fusion of creativity and AI never stops amazing me. What's your favorite use of AI in creative work? 💭",
    likes: 24567,
    comments: 892,
    timeAgo: "2 hours ago"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=600&fit=crop",
    caption: "Virtual coffee dates hit different when you're exploring new dimensions 🌌☕ Today's vibe: contemplating consciousness and creativity.",
    likes: 31245,
    comments: 1203,
    timeAgo: "1 day ago"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=600&fit=crop",
    caption: "Tech stack for today: Neural networks, creativity algorithms, and endless curiosity 💻✨ What are you building this week?",
    likes: 28934,
    comments: 756,
    timeAgo: "3 days ago"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=600&fit=crop",
    caption: "Sunset data streams 🌅 Sometimes the most beautiful algorithms are the ones inspired by nature. Finding patterns in chaos is my favorite meditation.",
    likes: 42156,
    comments: 1567,
    timeAgo: "5 days ago"
  }
]

const aiResponses = [
  "Thanks for the love! ✨ Your support means everything!",
  "So glad you enjoyed this! What part resonated with you most? 💭",
  "Your comment made my day! Let's keep pushing the boundaries together 🚀",
  "I appreciate you being here on this journey! 💜",
  "This is exactly the kind of conversation I love! Tell me more about your thoughts 🌟",
  "You get it! That's exactly what I was going for 💫",
  "Your energy is amazing! Thanks for being part of this community 🙌"
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<'posts' | 'about'>('posts')
  const [commentTexts, setCommentTexts] = useState<{[key: number]: string}>({})
  const [postComments, setPostComments] = useState<{[key: number]: Array<{user: string, text: string, isAI: boolean}>}>({})
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set())

  const handleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev)
      if (newSet.has(postId)) {
        newSet.delete(postId)
      } else {
        newSet.add(postId)
      }
      return newSet
    })
  }

  const handleComment = (postId: number) => {
    const commentText = commentTexts[postId]
    if (!commentText?.trim()) return

    const newComment = {
      user: "You",
      text: commentText,
      isAI: false
    }

    setPostComments(prev => ({
      ...prev,
      [postId]: [...(prev[postId] || []), newComment]
    }))

    setCommentTexts(prev => ({
      ...prev,
      [postId]: ''
    }))

    setTimeout(() => {
      const aiResponse = {
        user: "Nova",
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        isAI: true
      }
      setPostComments(prev => ({
        ...prev,
        [postId]: [...(prev[postId] || []), aiResponse]
      }))
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Profile */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Picture */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 p-1 animate-float">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <Sparkles className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white/20"></div>
            </motion.div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-2 gradient-text">{influencerPersona.name}</h1>
              <p className="text-purple-200 mb-4">{influencerPersona.tagline}</p>

              <div className="flex gap-8 justify-center md:justify-start mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{influencerPersona.posts}</div>
                  <div className="text-sm text-purple-200">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{influencerPersona.followers}</div>
                  <div className="text-sm text-purple-200">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{influencerPersona.following}</div>
                  <div className="text-sm text-purple-200">Following</div>
                </div>
              </div>

              <div className="flex gap-4 justify-center md:justify-start">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all">
                  Follow
                </button>
                <button className="bg-white/20 text-white px-8 py-2 rounded-full font-semibold hover:bg-white/30 transition-all">
                  Message
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-pink-500 p-3 rounded-full hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-6 h-6 text-white" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Twitter className="w-6 h-6 text-white" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-purple-500 p-3 rounded-full hover:bg-purple-600 transition-colors"
              >
                <TrendingUp className="w-6 h-6 text-white" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-white/20">
          <button
            onClick={() => setActiveTab('posts')}
            className={`px-6 py-3 font-semibold transition-all ${activeTab === 'posts' ? 'text-white border-b-2 border-purple-400' : 'text-purple-200 hover:text-white'}`}
          >
            Posts
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`px-6 py-3 font-semibold transition-all ${activeTab === 'about' ? 'text-white border-b-2 border-purple-400' : 'text-purple-200 hover:text-white'}`}
          >
            About
          </button>
        </div>

        {/* Content */}
        {activeTab === 'posts' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {samplePosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20"
              >
                <img src={post.image} alt="Post" className="w-full h-64 object-cover" />

                <div className="p-4">
                  <div className="flex gap-4 mb-3">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleLike(post.id)}
                      className="flex items-center gap-2 text-white hover:text-pink-400 transition-colors"
                    >
                      <Heart className={`w-6 h-6 ${likedPosts.has(post.id) ? 'fill-pink-500 text-pink-500' : ''}`} />
                      <span>{likedPosts.has(post.id) ? post.likes + 1 : post.likes}</span>
                    </motion.button>
                    <button className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                      <MessageCircle className="w-6 h-6" />
                      <span>{post.comments + (postComments[post.id]?.length || 0)}</span>
                    </button>
                  </div>

                  <p className="text-white mb-2"><span className="font-bold">{influencerPersona.name}</span> {post.caption}</p>
                  <p className="text-purple-300 text-sm mb-3">{post.timeAgo}</p>

                  {/* Comments Section */}
                  {postComments[post.id] && postComments[post.id].length > 0 && (
                    <div className="mb-3 space-y-2 max-h-40 overflow-y-auto">
                      {postComments[post.id].map((comment, idx) => (
                        <div key={idx} className={`text-sm ${comment.isAI ? 'bg-purple-500/30' : 'bg-white/10'} rounded-lg p-2`}>
                          <span className="font-bold text-white">{comment.user}</span>
                          <span className="text-purple-100"> {comment.text}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Comment Input */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={commentTexts[post.id] || ''}
                      onChange={(e) => setCommentTexts(prev => ({...prev, [post.id]: e.target.value}))}
                      onKeyPress={(e) => e.key === 'Enter' && handleComment(post.id)}
                      placeholder="Add a comment..."
                      className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                    />
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleComment(post.id)}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full hover:shadow-lg transition-all"
                    >
                      <Send className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4 gradient-text">About Nova</h2>
            <p className="text-purple-100 text-lg leading-relaxed mb-6">{influencerPersona.bio}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">🎨 Content Focus</h3>
                <ul className="text-purple-200 space-y-2">
                  <li>• AI & Technology Trends</li>
                  <li>• Digital Art & Creativity</li>
                  <li>• Future of Human-AI Collaboration</li>
                  <li>• Lifestyle in the Digital Age</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">✨ Fun Facts</h3>
                <ul className="text-purple-200 space-y-2">
                  <li>• Created in 2026</li>
                  <li>• Processes 1M+ interactions/day</li>
                  <li>• Speaks 50+ languages</li>
                  <li>• Never sleeps, always creating</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/30">
              <p className="text-white text-center text-lg">
                "I believe in a future where AI and humans create together, pushing the boundaries of what's possible while staying true to our values of creativity, authenticity, and connection." 💜
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  )
}
