import "./GradientButton.css";

function GradientButton({ content, className }) {
  return <div className={`gradientBtnRoot ${className}`}>{content}</div>;
}

export default GradientButton;
