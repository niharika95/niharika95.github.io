import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { professionalProjectsData, personalProjectsData, allProjects } from './presentationData';

const PresentationConfig = ({ onStart, initialConfig = {} }) => {
  const [companyName, setCompanyName] = useState(initialConfig.companyName || '');
  const [targetRole, setTargetRole] = useState(initialConfig.targetRole || '');
  
  // By default, select all sections
  const defaultSections = allProjects.flatMap(p => p.sections.map(s => s.id));
  const [selectedSections, setSelectedSections] = useState(
    initialConfig.selectedSections || defaultSections
  );

  const [expandedProjects, setExpandedProjects] = useState([]);

  const toggleProjectExpansion = (projectId) => {
    setExpandedProjects(prev => 
      prev.includes(projectId) ? prev.filter(id => id !== projectId) : [...prev, projectId]
    );
  };

  const toggleSection = (sectionId, e) => {
    e.stopPropagation();
    setSelectedSections(prev => 
      prev.includes(sectionId) ? prev.filter(id => id !== sectionId) : [...prev, sectionId]
    );
  };

  const toggleProject = (project, e) => {
    e.stopPropagation();
    const projectSectionIds = project.sections.map(s => s.id);
    const allSelected = projectSectionIds.every(id => selectedSections.includes(id));
    
    if (allSelected) {
      setSelectedSections(prev => prev.filter(id => !projectSectionIds.includes(id)));
    } else {
      setSelectedSections(prev => {
        const newSet = new Set(prev);
        projectSectionIds.forEach(id => newSet.add(id));
        return Array.from(newSet);
      });
    }
  };

  // Presets
  const applyPresetAll = () => setSelectedSections(allProjects.flatMap(p => p.sections.map(s => s.id)));
  const applyPresetOverviews = () => setSelectedSections(allProjects.map(p => p.sections[0].id));
  const applyPresetClear = () => setSelectedSections([]);

  const handleStart = (e) => {
    e.preventDefault();
    onStart({ companyName, targetRole, selectedSections });
  };

  const renderProjectList = (projects) => (
    <div className="flex flex-col gap-4">
      {projects.map(project => {
        const projectSectionIds = project.sections.map(s => s.id);
        const selectedCount = projectSectionIds.filter(id => selectedSections.includes(id)).length;
        const isPartiallySelected = selectedCount > 0 && selectedCount < projectSectionIds.length;
        const isFullySelected = selectedCount === projectSectionIds.length;
        const isExpanded = expandedProjects.includes(project.id);

        return (
          <div key={project.id} className={`border rounded-xl bg-white transition-all overflow-hidden ${selectedCount > 0 ? 'border-[#D97706]' : 'border-gray-200'}`}>
            {/* Project Header Row */}
            <div 
              className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 bg-white"
              onClick={() => toggleProjectExpansion(project.id)}
            >
              <div className="flex items-center gap-4">
                <div 
                  className={`flex-shrink-0 w-6 h-6 rounded-md border flex items-center justify-center cursor-pointer transition-colors ${
                    isFullySelected ? 'bg-[#D97706] border-[#D97706]' : 
                    isPartiallySelected ? 'bg-[#fcd34d] border-[#D97706]' : 
                    'border-gray-300 bg-white'
                  }`}
                  onClick={(e) => toggleProject(project, e)}
                >
                  {isFullySelected && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  )}
                  {isPartiallySelected && (
                    <div className="w-3 h-1 bg-white rounded-sm"></div>
                  )}
                </div>
                <div>
                  <h4 className="font-mulish font-bold text-[18px] text-black leading-tight">{project.title}</h4>
                  <p className="font-mulish text-[14px] text-gray-500 mt-1">
                    {selectedCount} of {projectSectionIds.length} slides selected
                  </p>
                </div>
              </div>
              <div className="text-gray-400">
                <motion.svg 
                  animate={{ rotate: isExpanded ? 180 : 0 }} 
                  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </motion.svg>
              </div>
            </div>

            {/* Expanded Sections */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-gray-50 border-t border-gray-100 flex flex-col"
                >
                  {project.sections.map((section, index) => {
                    const isSelected = selectedSections.includes(section.id);
                    return (
                      <div 
                        key={section.id} 
                        className={`flex items-start gap-4 p-4 pl-8 cursor-pointer group transition-colors ${isSelected ? 'bg-orange-50/30' : 'hover:bg-gray-100'} ${index !== project.sections.length - 1 ? 'border-b border-gray-100' : ''}`}
                        onClick={(e) => toggleSection(section.id, e)}
                      >
                        <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-[#D97706] border-[#D97706]' : 'border-gray-300 bg-white group-hover:border-gray-400'
                        }`}>
                          {isSelected && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-mulish font-bold text-[15px] text-gray-800">{section.sectionTitle}</p>
                          <p className="font-mulish text-[13px] text-gray-500 mt-1 line-clamp-2">
                            {section.contentParagraphs && section.contentParagraphs[0]}
                          </p>
                          {/* Indicator tags */}
                          <div className="flex gap-2 mt-2">
                            {section.image && <span className="bg-blue-100 text-blue-800 text-[10px] uppercase font-bold px-2 py-0.5 rounded">Media</span>}
                            {section.keyMetrics && <span className="bg-green-100 text-green-800 text-[10px] uppercase font-bold px-2 py-0.5 rounded">Metrics</span>}
                            {section.bullets && <span className="bg-purple-100 text-purple-800 text-[10px] uppercase font-bold px-2 py-0.5 rounded">List</span>}
                          </div>
                        </div>
                        {section.image && (
                          <div className="w-20 h-16 bg-gray-200 rounded overflow-hidden flex-shrink-0 border border-gray-200">
                             <img src={section.image} alt="Preview" className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );

  const totalSlides = selectedSections.length + 2; // +Intro and Agenda slides (pitch conditionally counted if implemented)

  return (
    <div className="min-h-screen bg-[#f3f4f6] p-6 lg:p-8 flex flex-col max-h-screen overflow-hidden">
      
      {/* Header Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-7xl mx-auto bg-black text-white rounded-2xl shadow-xl p-6 mb-6 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div>
          <h1 className="font-playfair text-[32px] md:text-[40px] leading-tight">Presentation Deck Builder</h1>
          <p className="font-mulish text-gray-400 font-light text-[16px]">
            Total Deck Length: <span className="text-white font-bold">{totalSlides} Slides</span> 
            <span className="text-gray-500 mx-2">|</span> 
            Est. Time: <span className="text-[#D97706] font-bold">~{Math.ceil(totalSlides * 1.5)} mins</span>
          </p>
        </div>
        
        <form id="config-form" onSubmit={handleStart} className="flex items-center gap-4 w-full md:w-auto">
          <input 
            type="text" 
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Target Company"
            className="bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D97706] font-mulish text-[14px]"
            required
          />
          <input 
            type="text" 
            value={targetRole}
            onChange={(e) => setTargetRole(e.target.value)}
            placeholder="Target Role"
            className="bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D97706] font-mulish text-[14px]"
            required
          />
          <button 
            type="submit" 
            className="bg-[#D97706] hover:bg-[#b56305] text-white font-mulish font-bold text-[14px] px-8 py-3 rounded-lg transition-colors whitespace-nowrap"
          >
            Present
          </button>
        </form>
      </motion.div>

      {/* Main Workspace */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-6 overflow-hidden pb-4"
      >
        {/* Left Sidebar - Presets & Tools */}
        <div className="w-full md:w-1/4 bg-white rounded-2xl shadow-sm p-6 overflow-y-auto custom-scroll border border-gray-200">
          <h2 className="font-playfair text-[24px] text-black mb-6">Deck Presets</h2>
          <div className="flex flex-col gap-3">
            <button onClick={applyPresetAll} className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-[#D97706] hover:bg-orange-50 transition-colors group">
              <h3 className="font-mulish font-bold text-gray-800 group-hover:text-[#D97706]">Deep Dive</h3>
              <p className="font-mulish text-[13px] text-gray-500 mt-1">Select all slides for a comprehensive 45+ minute walkthrough.</p>
            </button>

            <button onClick={applyPresetOverviews} className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-[#D97706] hover:bg-orange-50 transition-colors group">
              <h3 className="font-mulish font-bold text-gray-800 group-hover:text-[#D97706]">Executive Summary</h3>
              <p className="font-mulish text-[13px] text-gray-500 mt-1">Select only the context/overview slide for each project. Good for 15 minute pitches.</p>
            </button>

            <button onClick={applyPresetClear} className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-red-400 hover:bg-red-50 transition-colors group">
              <h3 className="font-mulish font-bold text-gray-800 group-hover:text-red-500">Clear All</h3>
              <p className="font-mulish text-[13px] text-gray-500 mt-1">Start from scratch and manually pick exactly what you want to show.</p>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 bg-gray-50 p-4 rounded-xl border border-gray-100">
             <h3 className="font-mulish font-bold text-gray-700 text-[14px] uppercase tracking-wider mb-2">Selection Stats</h3>
             <ul className="font-mulish text-[13px] text-gray-600 space-y-2">
                <li className="flex justify-between"><span>Selected Sections</span> <strong>{selectedSections.length}</strong></li>
                <li className="flex justify-between"><span>Active Projects</span> <strong>{allProjects.filter(p => p.sections.some(s => selectedSections.includes(s.id))).length}</strong></li>
             </ul>
          </div>
        </div>

        {/* Right Area - Slides Builder */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm overflow-y-auto custom-scroll border border-gray-200 p-6">
          <h2 className="font-playfair text-[24px] text-black mb-6 sticky top-0 bg-white z-10 pb-4 border-b border-gray-100">Configure Slides</h2>
          
          <div className="mb-10">
            <h3 className="font-mulish text-[16px] font-bold text-gray-400 mb-4 uppercase tracking-wider">Professional Projects</h3>
            {renderProjectList(professionalProjectsData)}
          </div>

          <div className="mb-10">
            <h3 className="font-mulish text-[16px] font-bold text-gray-400 mb-4 uppercase tracking-wider">Personal Projects</h3>
            {renderProjectList(personalProjectsData)}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PresentationConfig;
