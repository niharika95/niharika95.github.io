import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const CursorContext = createContext(null);

export const CursorProvider = ({ children }) => {
  const [cursorState, setCursorState] = useState('default'); // 'default', 'button', 'text', 'magnifier'

  const updateCursor = useCallback((state) => {
    setCursorState(state);
  }, []);
  
  // Expose hover bindings for easy attachment to components
  const getHoverProps = (stateType) => ({
    onMouseEnter: () => setCursorState(stateType),
    onMouseLeave: () => setCursorState('default'),
  });

  return (
    <CursorContext.Provider value={{ cursorState, updateCursor, getHoverProps }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};
