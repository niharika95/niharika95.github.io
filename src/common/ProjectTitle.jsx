import React from 'react';

function ProjectTitle({ color, className = "", children, ...rest }) {
  return (
    <p
      className={`text-[40px] font-bold ${className}`}
      style={{ color }}
      {...rest}
    >
      {children}
    </p>
  );
}

export default ProjectTitle;
