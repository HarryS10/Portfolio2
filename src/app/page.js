'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import Overview from '../components/Overview';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="dashboard-layout">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="main-content">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && <Overview key="overview" />}
          {activeTab === 'experience' && <Experience key="experience" />}
          {activeTab === 'projects' && <Projects key="projects" />}
          {activeTab === 'skills' && <Skills key="skills" />}
          {activeTab === 'contact' && <Contact key="contact" />}
        </AnimatePresence>
      </main>
    </div>
  );
}
