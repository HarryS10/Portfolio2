'use client';

import { Github, Linkedin, Mail, MapPin, User, Briefcase, Code, TerminalSquare } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Sidebar({ activeTab, setActiveTab }) {
    const tabs = [
        { id: 'overview', label: 'Overview', icon: User },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'projects', label: 'Projects', icon: Code },
        { id: 'skills', label: 'Skills', icon: TerminalSquare },
    ];

    return (
        <aside className="sidebar">
            <div className="profile-section">
                <div className="profile-pic">
                    {resumeData.name.charAt(0)}
                </div>
                <h1 className="profile-name">{resumeData.name}</h1>
                <p className="profile-role">{resumeData.role}</p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                    <MapPin size={16} />
                    <span>{resumeData.contact.location}</span>
                </div>
            </div>

            <nav className="nav-menu">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                        <div
                            key={tab.id}
                            className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <Icon size={20} />
                            <span>{tab.label}</span>
                        </div>
                    );
                })}
            </nav>

            <div className="social-links">
                <a href={`mailto:${resumeData.contact.email}`} className="social-icon" target="_blank" rel="noreferrer">
                    <Mail size={24} />
                </a>
                <a href={resumeData.contact.linkedin} className="social-icon" target="_blank" rel="noreferrer">
                    <Linkedin size={24} />
                </a>
                <a href={resumeData.contact.github} className="social-icon" target="_blank" rel="noreferrer">
                    <Github size={24} />
                </a>
            </div>
        </aside>
    );
}
