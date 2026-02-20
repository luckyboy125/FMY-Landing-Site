import { memo } from 'react';
import './GradientButton.css';

export interface GradientButtonProps {
  content?: React.ReactNode;
  className?: string;
}

function GradientButton({
  content,
  className = ''
}: GradientButtonProps) {
  return <div className={`gradientBtnRoot ${className}`}>{content}</div>;
}

export default memo(GradientButton);
