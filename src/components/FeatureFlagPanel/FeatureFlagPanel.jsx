import React, { useState, useEffect } from 'react';
import { getAllFeatureFlags, setFeatureFlag } from '../../config/featureFlags';
import { Icon } from '@iconify/react';

const FeatureFlagPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [flags, setFlags] = useState({});

  useEffect(() => {
    setFlags(getAllFeatureFlags());
  }, []);

  const handleToggle = (flagName) => {
    const newValue = !flags[flagName];
    setFeatureFlag(flagName, newValue);
    window.location.reload();
  };

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-5 right-5 z-[9999]">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[var(--color-brand-primary)] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-[var(--color-brand-primary-dark)] transition-colors"
          title="Feature Flags"
        >
          <Icon icon="mdi:flag" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Feature Flags</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <Icon icon="mdi:close" />
          </button>
        </div>
        {Object.entries(flags).map(([name, value]) => (
          <div key={name} className="flex items-center mt-2">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={value}
                  onChange={() => handleToggle(name)}
                />
                <div className={`block w-10 h-6 rounded-full ${value ? 'bg-[var(--color-brand-primary)]' : 'bg-gray-300'}`}></div>
                <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${value ? 'transform translate-x-full' : ''}`}></div>
              </div>
              <div className="ml-3 text-gray-700 font-medium">{name}</div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureFlagPanel;
