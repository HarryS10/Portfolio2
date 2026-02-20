'use client';

import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

export default function Experience() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
        >
            <div className="section-header">
                <h2 className="section-title">Experience & Education</h2>
                <p className="section-subtitle">My academic and professional journey.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>

                <div>
                    <h3 style={{ fontSize: '24px', marginBottom: '24px', color: 'var(--text-primary)' }}>Experience</h3>
                    <div className="timeline">
                        {resumeData.experience.map((exp, idx) => (
                            <div className="timeline-item" key={idx}>
                                <div className="timeline-dot"></div>
                                <div className="glass-panel experience-card">
                                    <h3>{exp.role}</h3>
                                    <h4>{exp.company}</h4>
                                    <p className="date">{exp.period}</p>
                                    <p style={{ color: 'var(--text-secondary)' }}>{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h3 style={{ fontSize: '24px', marginBottom: '24px', marginTop: '40px', color: 'var(--text-primary)' }}>Organizations</h3>
                    <div className="timeline">
                        {resumeData.organizations.map((org, idx) => (
                            <div className="timeline-item" key={idx}>
                                <div className="timeline-dot"></div>
                                <div className="glass-panel experience-card">
                                    <h3>{org.name}</h3>
                                    <h4>{org.role}</h4>
                                    <p className="date">{org.period}</p>
                                    <a href={org.link} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)', fontSize: '14px', textDecoration: 'underline' }}>
                                        View Profile
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 style={{ fontSize: '24px', marginBottom: '24px', color: 'var(--text-primary)' }}>Education</h3>
                    <div className="timeline">
                        {resumeData.education.map((edu, idx) => (
                            <div className="timeline-item" key={idx}>
                                <div className="timeline-dot"></div>
                                <div className="glass-panel experience-card">
                                    <h3>{edu.degree}</h3>
                                    <h4>{edu.institution}</h4>
                                    <p className="date">{edu.period} {edu.score && `| Score: ${edu.score}`}</p>
                                    {edu.courses && edu.courses.length > 0 && (
                                        <div style={{ marginTop: '12px' }}>
                                            <p style={{ color: 'var(--text-tertiary)', fontSize: '14px', marginBottom: '4px' }}>Key Coursework:</p>
                                            <ul style={{ color: 'var(--text-secondary)', fontSize: '14px', paddingLeft: '20px' }}>
                                                {edu.courses.map((course, cIdx) => (
                                                    <li key={cIdx} style={{ marginBottom: '4px' }}>{course}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </motion.div>
    );
}
