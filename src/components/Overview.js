'use client';

import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Terminal, Code2, GraduationCap } from 'lucide-react';

export default function Overview() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <div className="section-header">
                <h2 className="section-title">Overview</h2>
                <p className="section-subtitle">A quick glance at my profile.</p>
            </div>

            <div className="glass-panel" style={{ marginBottom: '32px' }}>
                <p style={{ fontSize: '18px', color: 'var(--text-primary)', lineHeight: '1.8' }}>
                    {resumeData.summary}
                </p>
            </div>

            <div className="stat-grid">
                <div className="glass-panel stat-card">
                    <div className="stat-icon">
                        <Terminal size={24} />
                    </div>
                    <div className="stat-info">
                        <h4>Projects</h4>
                        <p>{resumeData.projects.length}+ Completed</p>
                    </div>
                </div>

                <div className="glass-panel stat-card">
                    <div className="stat-icon">
                        <Code2 size={24} />
                    </div>
                    <div className="stat-info">
                        <h4>DSA Practice</h4>
                        <p>70+ Questions Solved</p>
                    </div>
                </div>

                <div className="glass-panel stat-card">
                    <div className="stat-icon">
                        <GraduationCap size={24} />
                    </div>
                    <div className="stat-info">
                        <h4>Education</h4>
                        <p>2nd Year Undergrad</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
