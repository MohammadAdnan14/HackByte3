import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Landing = () => {
    return (
        <div className="flex flex-col text-white">
            {/* Navigation Bar */}
            <div className="top-0 left-0 sticky w-full h-20 flex justify-between items-center bg-[#1a1a35] border-b border-[#3b4782] z-50">
                <p className="text-3xl ml-10 font-medium">WikiQuest</p>

                <div className="flex items-center justify-center">
                    <ul className="flex gap-10 text-xl">
                        <li><a href="#home" className="text-[#d1d1d1] hover:text-white cursor-pointer transition-colors">Home</a></li>
                        <li><a href="#about" className="text-[#d1d1d1] hover:text-white cursor-pointer transition-colors">About</a></li>
                        <li><a href="#function" className="text-[#d1d1d1] hover:text-white cursor-pointer transition-colors">Features</a></li>
                        <li><a href="#contact" className="text-[#d1d1d1] hover:text-white cursor-pointer transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <button className="h-12 w-32 text-xl mr-10 bg-[#31314f] hover:bg-[#6f6f8c] cursor-pointer transition-colors rounded">
                        <Link to={"/signin"}>Get Started</Link>
                    </button>
                </div>
            </div>

            {/* Hero Section */}
            <section id="home" className="min-h-screen bg-gradient-to-b from-[#1a1a35] to-[#2a2a42] flex flex-col justify-center pl-20 pr-10">
                <div className="max-w-6xl">
                    <h1 className="text-6xl font-bold mb-6">
                        Master Wikipedia Editing <br />
                        <span className="text-yellow-400">Through Play</span>
                    </h1>
                    <p className="text-2xl text-[#d1d1d1] max-w-3xl mb-10">
                        WikiQuest transforms Wikipedia's complex policies into an engaging game. Earn XP, unlock achievements, and become a confident editor with our AI-powered learning platform.
                    </p>
                    <div className="flex gap-6">
                        <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                            <Link to="/signin">Start Learning</Link>
                        </button>
                        <button className="border-2 border-yellow-400 hover:bg-yellow-400 hover:bg-opacity-20 text-yellow-400 font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                            How It Works ↓
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen bg-[#2a2a42] py-20 px-10 flex flex-col items-center">
                <div className="max-w-6xl w-full">
                    <div className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full text-xl inline-block mb-12">
                        The Problem We Solve
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-8">Wikipedia Editing Shouldn't Be This Hard</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        <div className="bg-[#3b4782] p-8 rounded-lg">
                            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Current Challenges</h3>
                            <ul className="space-y-4 list-disc pl-5">
                                <li>Over 150 policy pages overwhelm new editors</li>
                                <li>Unintentional violations lead to blocks</li>
                                <li>No structured learning path exists</li>
                                <li>Feedback is often technical and discouraging</li>
                            </ul>
                        </div>
                        <div className="bg-[#3b4782] p-8 rounded-lg">
                            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Our Solution</h3>
                            <ul className="space-y-4 list-disc pl-5">
                                <li>Bite-sized, gamified policy lessons</li>
                                <li>AI-powered real-time feedback</li>
                                <li>Safe sandbox environment to practice</li>
                                <li>Progressive difficulty matching Wikipedia's complexity</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <h3 className="text-3xl font-bold mb-6">By the end of WikiQuest, you'll:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                "Confidently make Wikipedia edits",
                                "Understand core content policies",
                                "Avoid common newcomer mistakes",
                                "Navigate community guidelines",
                                "Use proper citation methods",
                                "Contribute meaningfully to articles"
                            ].map((item, index) => (
                                <div key={index} className="bg-[#3b4782] p-4 rounded-lg flex items-center">
                                    <div className="bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                                        ✓
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="function" className="min-h-screen bg-[#1a1a35] py-20 px-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full text-xl inline-block mb-4">
                            Game Features
                        </div>
                        <h2 className="text-4xl font-bold">Learn Through Play</h2>
                    </div>
                    
                    {/* Gamification Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {[
                            {
                                title: "XP & Leveling",
                                desc: "Earn experience points and level up your editor rank",
                                icon: "🏆"
                            },
                            {
                                title: "Policy Modules",
                                desc: "10-level modules covering each major Wikipedia policy",
                                icon: "📚"
                            },
                            {
                                title: "AI Assistant",
                                desc: "Gemini API checks your edits before submission",
                                icon: "🤖"
                            },
                            {
                                title: "Achievements",
                                desc: "Unlock badges and showcase your progress",
                                icon: "🎖️"
                            },
                            {
                                title: "Lives System",
                                desc: "3 attempts per challenge - learn from mistakes",
                                icon: "💖"
                            },
                            {
                                title: "Leaderboard",
                                desc: "Compete with other new editors",
                                icon: "📊"
                            },
                            {
                                title: "Sandbox Mode",
                                desc: "Practice edits without consequences",
                                icon: "🛠️"
                            },
                            {
                                title: "Milestones",
                                desc: "Celebrate key learning achievements",
                                icon: "🎯"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-[#3b4782] p-6 rounded-lg hover:bg-[#4a5690] transition-colors">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-[#d1d1d1]">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                    
                    {/* AI Integration */}
                    <div className="bg-gradient-to-r from-[#3b4782] to-[#6f6f8c] p-8 rounded-lg mb-16">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <h3 className="text-3xl font-semibold mb-4">Your AI Policy Mentor</h3>
                                <p className="text-xl mb-6">
                                    Our Gemini integration acts as your personal Wikipedia guide, helping you:
                                </p>
                                <ul className="space-y-3 list-disc pl-5">
                                    <li>Validate edits before submission</li>
                                    <li>Explain policy violations in simple terms</li>
                                    <li>Suggest improvements to your content</li>
                                    <li>Answer questions about Wikipedia guidelines</li>
                                </ul>
                            </div>
                            <div className="flex-1 bg-black bg-opacity-30 p-6 rounded-lg">
                                <div className="border-l-4 border-yellow-400 pl-4">
                                    <p className="italic mb-4">"Your addition might violate Wikipedia's Verifiability policy. Could you add a reliable source for this claim?"</p>
                                    <p className="text-right font-semibold">— Gemini Policy Assistant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Learning Path */}
                    <div className="text-center">
                        <h3 className="text-3xl font-bold mb-8">Structured Learning Path</h3>
                        <div className="relative">
                            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-700 -z-10"></div>
                            <div className="flex justify-between">
                                {[
                                    { title: "Account Setup", icon: "👤" },
                                    { title: "Basic Editing", icon: "✏️" },
                                    { title: "Core Policies", icon: "📜" },
                                    { title: "Advanced Rules", icon: "🔍" },
                                    { title: "Community", icon: "👥" }
                                ].map((step, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <div className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center text-2xl mb-2">
                                            {step.icon}
                                        </div>
                                        <p className="font-medium">{step.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="min-h-screen bg-[#2a2a42] py-20 px-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full text-xl inline-block mb-4">
                            Get In Touch
                        </div>
                        <h2 className="text-4xl font-bold">Have Questions?</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-[#3b4782] p-8 rounded-lg">
                            <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Contact Our Team</h3>
                            <form className="space-y-6">
                                <div>
                                    <label className="block mb-2">Your Name</label>
                                    <input type="text" className="w-full p-3 rounded bg-[#2a2a42] border border-gray-600" />
                                </div>
                                <div>
                                    <label className="block mb-2">Email Address</label>
                                    <input type="email" className="w-full p-3 rounded bg-[#2a2a42] border border-gray-600" />
                                </div>
                                <div>
                                    <label className="block mb-2">Message</label>
                                    <textarea rows="4" className="w-full p-3 rounded bg-[#2a2a42] border border-gray-600"></textarea>
                                </div>
                                <button type="submit" className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>
                        
                        <div>
                            <div className="bg-[#3b4782] p-8 rounded-lg mb-8">
                                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Join Our Community</h3>
                                <p className="mb-6">Connect with other Wikipedia learners and experienced editors:</p>
                                <div className="space-y-4">
                                    <button className="w-full bg-[#2a2a42] hover:bg-[#3b4782] py-3 px-4 rounded flex items-center gap-3 transition-colors">
                                        <span className="text-xl">💬</span> Discussion Forum
                                    </button>
                                    <button className="w-full bg-[#2a2a42] hover:bg-[#3b4782] py-3 px-4 rounded flex items-center gap-3 transition-colors">
                                        <span className="text-xl">🆘</span> Help Center
                                    </button>
                                    <button className="w-full bg-[#2a2a42] hover:bg-[#3b4782] py-3 px-4 rounded flex items-center gap-3 transition-colors">
                                        <span className="text-xl">📢</span> Feedback Portal
                                    </button>
                                </div>
                            </div>
                            
                            <div className="bg-[#3b4782] p-8 rounded-lg">
                                <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Ready to Start?</h3>
                                <p className="mb-6">Begin your journey to becoming a confident Wikipedia editor today.</p>
                                <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-6 rounded-lg text-lg transition-colors">
                                    <Link to="/signin">Create Free Account</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Landing;