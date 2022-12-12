import "./ColorBtn.css";

function ColorBtn({ className, color, width, name, iconShow }) {
  return (
    <div
      className={`colorBtn ${className}`}
      style={{ background: `${color}33`, width: `${width}px` }}
    >
      <span className="btnName" style={{ color: color }}>
        {name}
      </span>
      {iconShow ? (
        <i className="fas fa-angle-down" style={{ color: color }}></i>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ColorBtn;
