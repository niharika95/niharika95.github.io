import React from 'react';

function ContentContainer({ className = "", children, ...rest }) {
  return (
    <div
      className={`max-w-[1200px] mx-auto ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default ContentContainer;