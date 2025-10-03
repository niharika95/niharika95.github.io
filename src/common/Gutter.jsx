import React from 'react';

function Gutter({ className = "", children, ...rest }) {
  return (
    <div
      className={`pl-[100px] pr-[100px] max-[600px]:pl-[12px] max-[600px]:pr-[12px] ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Gutter;
