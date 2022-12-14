import "./ColorBtn.css";

function ColorBtn({ icon, className, color, width, name, arrowShow }) {
  return (
    <div
      className={`colorBtn ${className}`}
      style={{ background: `${color}33`, width: `${width}px` }}
    >
      {icon}
      <span className="btnName" style={{ color: color }}>
        {name}
      </span>
      {arrowShow ? (
        <i className="fas fa-angle-down" style={{ color: color }}></i>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ColorBtn;
