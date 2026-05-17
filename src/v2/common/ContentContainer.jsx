import React from 'react';

function ContentContainer({ className = "", children, ...rest }) {
  return (
    <div
      className={`max-w-[1440px] mx-auto ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default ContentContainer;