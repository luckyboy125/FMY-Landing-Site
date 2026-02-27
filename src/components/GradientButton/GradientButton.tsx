import { memo } from 'react';
import './GradientButton.css';

export interface GradientButtonProps {
  children?: React.ReactNode;
  className?: string;
}

function GradientButton({
  children,
  className = '',
}: GradientButtonProps) {
  return (
    <div className={`gradient-button ${className}`.trim()}>
      {children}
    </div>
  );
}

export default memo(GradientButton);
