import React from 'react';

function Gutter({ className = "", children, ...rest }) {
  return (
    <div
      className={`pt-[61px] ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Gutter;
