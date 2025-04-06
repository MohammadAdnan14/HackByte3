import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AuthForm() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="min-h-screen bg-[#1a1a35] w-full">
      {/* Full-width background container */}
      <div className="w-full bg-[#1a1a35] min-h-screen flex items-center justify-center">
        {/* Centered content container */}
        <div className="w-full max-w-6xl bg-[#2a2a42] rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row mx-4 my-8">
          {/* Left Panel - Auth Form */}
          <div className="w-full md:w-1/2 p-10 bg-[#1a1a35]">
            <div className="flex justify-center mb-8">
              <h1 className="text-4xl font-bold text-yellow-400">WikiCraft</h1>
            </div>
            
            <div className="flex border-b border-[#3b4782] mb-8">
              <button
                className={`py-4 px-6 font-semibold text-lg ${activeTab === 'login' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-[#d1d1d1]'}`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button
                className={`py-4 px-6 font-semibold text-lg ${activeTab === 'signup' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-[#d1d1d1]'}`}
                onClick={() => setActiveTab('signup')}
              >
                Sign Up
              </button>
            </div>

            <form className="space-y-6">
              {activeTab === 'signup' && (
                <div>
                  <label className="block text-[#d1d1d1] mb-2">Username</label>
                  <input 
                    type="text" 
                    placeholder="Choose your editor name" 
                    className="w-full p-4 bg-[#2a2a42] border border-[#3b4782] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              )}

              <div>
                <label className="block text-[#d1d1d1] mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="editor@example.com" 
                  className="w-full p-4 bg-[#2a2a42] border border-[#3b4782] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-[#d1d1d1] mb-2">Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full p-4 bg-[#2a2a42] border border-[#3b4782] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {activeTab === 'login' && (
                <div className="flex justify-end">
                  <Link to="/forgot-password" className="text-[#d1d1d1] hover:text-yellow-400 text-sm">
                    Forgot password?
                  </Link>
                </div>
              )}

              <button 
                type="submit" 
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-6 rounded-lg text-lg transition-colors"
              >
                {activeTab === 'login' ? 'Continue Your Quest' : 'Start Your Journey'}
              </button>

              {activeTab === 'login' && (
                <div className="text-center text-[#d1d1d1]">
                  New to WikiCraft?{' '}
                  <button 
                    type="button" 
                    className="text-yellow-400 hover:underline"
                    onClick={() => setActiveTab('signup')}
                  >
                    Create an account
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Right Panel - Features */}
          <div className="w-full md:w-1/2 p-10 bg-[#2a2a42] flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">Master Wikipedia Editing Through Play</h2>
            <p className="text-[#d1d1d1] mb-8 text-lg">
              Join our gamified learning platform and transform Wikipedia policy learning into an adventure.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 text-black rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl">
                  🏆
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Earn XP & Badges</h3>
                  <p className="text-[#d1d1d1]">Complete challenges and unlock achievements</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 text-black rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl">
                  📜
                </div>
                <div>
                  <h3 className="text-xl font-semibold">AI Policy Assistant</h3>
                  <p className="text-[#d1d1d1]">Gemini API helps you avoid violations</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 text-black rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl">
                  📊
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Leaderboard</h3>
                  <p className="text-[#d1d1d1]">Compete with fellow new editors</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 text-black rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-xl">
                  🛡️
                </div>
                <div>
                  <h3 className="text-xl font-semibold">3-Lives System</h3>
                  <p className="text-[#d1d1d1]">Learn from mistakes in a safe environment</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#3b4782] p-6 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="text-3xl">💡</div>
                <div>
                  <h3 className="font-semibold">Did You Know?</h3>
                  <p className="text-sm text-[#d1d1d1]">
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