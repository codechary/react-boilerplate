import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  size?: 'mini' | 'small' | 'normal' | 'large'; // Define the size types
  styles?: string;
};

export const SecondaryButton = ({ children, size = 'normal', styles }: ButtonProps) => {
  const sizeClasses = {
     mini: 'py-1 px-2 text-xs',   // Adjust padding and font size for mini
     small: 'py-1.5 px-3 text-sm', // Adjust padding and font size for small
     normal: 'py-2 px-4 text-base', // Default for normal
     large: 'py-3 px-5 text-lg',   // Adjust padding and font size for large
   };
  return (
    <button className={` bg-white shadow-md border border-[#5046e6] hover:bg-[#f3f2ff] text-[#5046e6] font-weight-500 rounded-md flex text-center items-center gap-1 ${sizeClasses[size]} ${styles || ''}`}>
         {children}
       </button>
  );
}
