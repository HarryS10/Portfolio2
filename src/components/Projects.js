'use client';

import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Folder, Github } from 'lucide-react';

export default function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <div className="section-header">
                <h2 className="section-title">Personal Projects</h2>
                <p className="section-subtitle">A showcase of my recent full-stack applications.</p>
            </div>

            <div className="projects-grid">
                {resumeData.projects.map((project, idx) => (
                    <div className="glass-panel project-card flex flex-col h-full" key={idx}>
                        <div className="project-header">
                            <div className="project-icon">
                                <Folder size={32} />
                            </div>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                <a href={resumeData.contact.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
                                    <Github size={20} />
                                </a>
                                <span className="text-secondary" style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>{project.period}</span>
                            </div>
                        </div>

                        <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--text-primary)' }}>{project.name}</h3>

                        <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', marginBottom: '24px', flex: 1 }}>
                            {project.description.map((desc, dIdx) => (
                                <li key={dIdx} style={{ marginBottom: '8px' }}>{desc}</li>
                            ))}
                        </ul>

                        <div className="tech-stack">
                            {project.techStack.map((tech, tIdx) => (
                                <span className="tech-tag" key={tIdx}>{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
