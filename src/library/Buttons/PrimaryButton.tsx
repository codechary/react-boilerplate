import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  size?: 'mini' | 'small' | 'normal' | 'large'; // Define the size types
  width?: string;
};

export const PrimaryButton = ({ children, size = 'normal', width }: ButtonProps) => {
  const sizeClasses = {
     mini: 'py-1 px-2 text-xs',   // Adjust padding and font size for mini
     small: 'py-1.5 px-3 text-sm', // Adjust padding and font size for small
     normal: 'py-2 px-4 text-base', // Default for normal
     large: 'py-3 px-5 text-lg',   // Adjust padding and font size for large
   };
  return (
    <button className={`bg-[#5046e6] hover:bg-[#4a42c6] text-white shadow-md font-weight-500 flex items-center justify-center gap-1 rounded-md ${sizeClasses[size]} ${width || ''}`}>
         {children}
       </button>
  );
}
