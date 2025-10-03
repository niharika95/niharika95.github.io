import { Icon } from '@iconify/react';
import React from 'react';

function Footer() {
  return (
    <div className="bg-[var(--color-surface-muted)] pt-[10px] pb-[10px] pl-[100px]">
      <p className="flex items-center gap-[10px] text-[15px] font-light m-0">
        <Icon fontSize={20} icon="ci:window-code-block" color="rgb(16, 96, 102)" />{' '}
        by <a href="https://dkaushik95.github.io/" target="_blank" rel="noreferrer" className="text-black no-underline hover:underline">Dishant</a>
      </p>
    </div>
  );
}

export default Footer;
