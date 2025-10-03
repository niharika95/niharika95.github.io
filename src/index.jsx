import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import Header from './components/Header/Header';
import Project from './screens/Project/Project';
import Resume from './screens/Resume/Resume';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#projects" element={<Home />} />
        <Route path="/#about" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
