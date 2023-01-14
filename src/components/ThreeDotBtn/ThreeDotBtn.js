import "./ThreeDotBtn.css";

function ThreeDotBtn({ className, action }) {
  return (
    <div className={`${className} dotGroupRoot`} onClick={action}>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
}

export default ThreeDotBtn;
