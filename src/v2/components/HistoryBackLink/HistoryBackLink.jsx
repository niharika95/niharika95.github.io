import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HistoryBackLink({ children, className = '' }) {
  const navigate = useNavigate();

  const returnToPreviousPage = () => {
    const historyIndex = window.history.state?.idx;

    if (typeof historyIndex === 'number' && historyIndex > 0) {
      navigate(-1);
      return;
    }

    navigate('/');
  };

  return (
    <button
      type="button"
      className={`appearance-none border-0 bg-transparent p-0 text-left font-inherit cursor-pointer ${className}`}
      onClick={returnToPreviousPage}
    >
      {children}
    </button>
  );
}
