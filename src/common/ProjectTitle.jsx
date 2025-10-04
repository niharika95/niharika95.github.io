import React from 'react';

function ProjectTitle({ color, className = "", children, ...rest }) {
  return (
    <p
      className={`text-[48px] md:text-[56px] font-bold tracking-tight ${className}`}
      style={{ color }}
      {...rest}
    >
      {children}
    </p>
  );
}

export default ProjectTitle;
