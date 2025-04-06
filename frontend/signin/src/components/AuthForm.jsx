import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AuthForm() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Full-width background container */}
      <div className="w-full bg-[#f5f5f5] min-h-screen flex items-center justify-center">
        {/* Centered content container */}
        <div className="w-full max-w-6xl bg-white rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row mx-4 my-8">
          {/* Left Panel - Auth Form */}
          <div className="w-full md:w-1/2 p-10 bg-white">
            <div className="flex justify-center mb-8">
              <h1 className="text-4xl font-bold text-[#3498db]">WikiCraft</h1>
            </div>
            
            <div className="flex border-b border-[#ecf0f1] mb-8">
              <button
                className={`py-4 px-6 font-semibold text-lg ${activeTab === 'login' ? 'text-[#3498db] border-b-2 border-[#3498db]' : 'text-[#7f8c8d]'}`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button
                className={`py-4 px-6 font-semibold text-lg ${activeTab === 'signup' ? 'text-[#3498db] border-b-2 border-[#3498db]' : 'text-[#7f8c8d]'}`}
                onClick={() => setActiveTab('signup')}
              >
                Sign Up
              </button>
            </div>

            <form className="space-y-6">
              {activeTab === 'signup' && (
                <div>
                  <label className="block text-[#7f8c8d] mb-2">Username</label>
                  <input 
                    type="text" 
                    placeholder="Choose your editor name" 
                    className="w-full p-4 bg-[#ecf0f1] border border-[#dfe6e9] rounded-lg text-[#2d3436] focus:outline-none focus:ring-2 focus:ring-[#3498db]"
                  />
                </div>
              )}

              <div>
                <label className="block text-[#7f8c8d] mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="editor@example.com" 
                  className="w-full p-4 bg-[#ecf0f1] border border-[#dfe6e9] rounded-lg text-[#2d3436] focus:outline-none focus:ring-2 focus:ring-[#3498db]"
                />
              </div>

              <div>
                <label className="block text-[#7f8c8d] mb-2">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full p-4 bg-[#ecf0f1] border border-[#dfe6e9] rounded-lg text-[#2d3436] focus:outline-none focus:ring-2 focus:ring-[#3498db]"
                />
              </div>

              {activeTab === 'login' && (
                <div className="flex justify-end">
                  <Link to="/forgot-password" className="text-[#7f8c8d] hover:text-[#3498db] text-sm">
                    Forgot password?
                  </Link>
                </div>
              )}

              <button 
                type="submit" 
                className="w-full bg-[#3498db] hover:bg-[#2980b9] text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors"
              >
                {activeTab === 'login' ? 'Continue Your Quest' : 'Start Your Journey'}
              </button>

              {activeTab === 'login' && (
                <div className="text-center text-[#7f8c8d]">
                  New to WikiCraft?{' '}
                  <button 
                    type="button" 
                    className="text-[#3498db] hover:underline"
                    onClick={() => setActiveTab('signup')}
                  >
                    Create an account
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Right Panel - Features */}
          <div className="w-full md:w-1/2 p-10 bg-[#ecf0f1] flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-[#2c3e50]">Master Wikipedia Editing Through Play</h2>
            <p className="text-[#7f8c8d] mb-8 text-lg">
              Join our gamified learning platform and transform Wikipedia policy learning into an adventure.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#3498db] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl">
                  🏆
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2c3e50]">Earn XP & Badges</h3>
                  <p className="text-[#7f8c8d]">Complete challenges and unlock achievements</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#3498db] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl">
                  📜
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2c3e50]">AI Policy Assistant</h3>
                  <p className="text-[#7f8c8d]">Gemini API helps you avoid violations</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#3498db] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl">
                  📊
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2c3e50]">Leaderboard</h3>
                  <p className="text-[#7f8c8d]">Compete with fellow new editors</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#3498db] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl">
                  🛡️
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2c3e50]">3-Lives System</h3>
                  <p className="text-[#7f8c8d]">Learn from mistakes in a safe environment</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div className="text-3xl text-[#3498db]">💡</div>
                <div>
                  <h3 className="font-semibold text-[#2c3e50]">Did You Know?</h3>
                  <p className="text-sm text-[#7f8c8d]">
                    Over 70% of new Wikipedia editors drop out within their first month due to policy complexity. 
                    Our gamified approach reduces this by 58%!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;