import "./DatabaseInput.css";

function DatabaseInput({ placeholder, inputValue, action, className, tool }) {
  return (
    <div className={`${className} databaseInputRoot`}>
      <input
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => action(e.target.value)}
      />
      {tool}
    </div>
  );
}

export default DatabaseInput;
