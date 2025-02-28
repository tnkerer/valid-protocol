// Button.tsx
import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'blue' | 'whiteBg';

const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) => {
  const baseStyles =
    'px-6 py-3 rounded-full font-light transition-all duration-300 text-lg';

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-gray-900 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-200/50',
    secondary:
      'bg-transparent text-gray-900 hover:bg-white hover:shadow-lg border border-gray-200',
    blue:
      'bg-[#0052FF] text-white hover:bg-[#004ce6] hover:shadow-lg hover:shadow-blue-200/50',
    whiteBg:
      'bg-white text-[#0052FF] hover:bg-gray-100 hover:shadow-lg border border-transparent',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
