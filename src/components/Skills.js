'use client';

import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Layers, Terminal, Database, Code2, Wrench, Globe2 } from 'lucide-react';

const iconMap = {
    "Languages": Code2,
    "Web Technologies": Globe2,
    "Databases": Database,
    "Core Concepts": Layers,
    "Tools": Wrench
};

export default function Skills() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
        >
            <div className="section-header">
                <h2 className="section-title">Technical Skills</h2>
                <p className="section-subtitle">Technologies and concepts I've mastered.</p>
            </div>

            <div className="skills-container">
                {resumeData.skills.map((skillGroup, idx) => {
                    const Icon = iconMap[skillGroup.category] || Terminal;
                    return (
                        <div className="glass-panel skill-category" key={idx}>
                            <h3>
                                <Icon size={20} />
                                {skillGroup.category}
                            </h3>
                            <div className="skill-tags">
                                {skillGroup.items.map((item, iIdx) => (
                                    <span className="skill-tag" key={iIdx}>{item}</span>
                                ))}
                            </div>
                        </div>
                    );
                })}

                <div className="glass-panel skill-category">
                    <h3>
                        <Globe2 size={20} />
                        Spoken Languages
                    </h3>
                    <div className="skill-tags">
                        {resumeData.spokenLanguages.map((lang, lIdx) => (
                            <span className="skill-tag" key={lIdx}>
                                <strong style={{ color: 'var(--text-primary)' }}>{lang.language}</strong>: {lang.proficiency}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </motion.div>
    );
}
