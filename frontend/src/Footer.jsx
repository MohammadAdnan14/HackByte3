import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#2c3e50] w-full border-t border-[#ecf0f1]">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <Content />
            </div>
        </div>
    );
};

const Content = () => {
    return (
        <div className="flex flex-col">
            <Section1 />
            <Section2 />
        </div>
    );
};

const Section1 = () => {
    return (
        <div className="text-white pb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold mb-4 text-[#3498db]">WikiCraft</h2>
                    <p className="text-[#bdc3c7]">
                        Gamifying Wikipedia editor onboarding through interactive challenges, 
                        AI-powered feedback, and reward systems to create confident contributors.
                    </p>
                </div>
                <NavColumn 
                    title="Resources"
                    links={[
                        { to: "/modules", text: "Learning Modules" },
                        { to: "/leaderboard", text: "Leaderboard" },
                        { to: "/achievements", text: "Achievements" },
                        { to: "/faq", text: "FAQ" }
                    ]}
                />
                <NavColumn 
                    title="Connect"
                    links={[
                        { to: "#", text: "Community Forum" },
                        { to: "#", text: "GitHub" },
                        { to: "#", text: "Twitter" },
                        { to: "#", text: "Discord" }
                    ]}
                />
                <NavColumn 
                    title="Wikipedia"
                    links={[
                        { to: "https://wikipedia.org", text: "Main Site", external: true },
                        { to: "https://en.wikipedia.org/wiki/Wikipedia:Introduction", text: "Editor's Guide", external: true },
                        { to: "https://en.wikipedia.org/wiki/Wikipedia:Ten_simple_rules_for_editing_Wikipedia", text: "Simple Rules", external: true }
                    ]}
                />
            </div>
        </div>
    );
};

const NavColumn = ({ title, links }) => {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            {links.map((link, index) => (
                link.external ? (
                    <a 
                        key={index}
                        href={link.to} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#bdc3c7] hover:text-[#3498db] transition-colors"
                    >
                        {link.text}
                    </a>
                ) : (
                    <Link 
                        key={index}
                        to={link.to} 
                        className="text-[#bdc3c7] hover:text-[#3498db] transition-colors"
                    >
                        {link.text}
                    </Link>
                )
            ))}
        </div>
    );
};

const Section2 = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#34495e] text-[#bdc3c7] text-sm">
            <p>© {new Date().getFullYear()} WikiCraft. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <Link to="/privacy" className="hover:text-[#3498db] transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-[#3498db] transition-colors">Terms of Service</Link>
                <Link to="/contact" className="hover:text-[#3498db] transition-colors">Contact Us</Link>
            </div>
        </div>
    );
};

export default Footer;