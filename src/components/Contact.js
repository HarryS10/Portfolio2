'use client';

import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Mail, Linkedin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      style={{ paddingBottom: '80px' }}
    >
      <div className="section-header">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Let's connect and talk about opportunities.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
        <a href={`mailto:${resumeData.contact.email}`} className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '16px', transition: 'all 0.3s ease', textDecoration: 'none' }} >
          <div className="stat-icon"><Mail size={24} /></div>
          <div>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '2px' }}>Email</h4>
            <p style={{ color: 'var(--text-primary)', fontSize: '18px', fontWeight: '500' }}>{resumeData.contact.email}</p>
          </div>
        </a>

        <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '16px', transition: 'all 0.3s ease', textDecoration: 'none' }} >
          <div className="stat-icon"><Linkedin size={24} /></div>
          <div>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '2px' }}>LinkedIn</h4>
            <p style={{ color: 'var(--text-primary)', fontSize: '18px', fontWeight: '500' }}>Shashwat Sinha</p>
          </div>
        </a>

        <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '16px' }} >
          <div className="stat-icon"><Phone size={24} /></div>
          <div>
            <h4 style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '2px' }}>Phone</h4>
            <p style={{ color: 'var(--text-primary)', fontSize: '18px', fontWeight: '500' }}>{resumeData.contact.phone}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
