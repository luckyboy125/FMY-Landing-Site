import "./ActionTab.css";

function ActionTab({ className, data, onSelect, select }) {
  const handleClick = (item) => {
    onSelect(item);
  };

  return (
    <div className={`actionTabRoot ${className}`}>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={` actionTabItem ${select === item ? "active" : ""}`}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default ActionTab;
