import "./LetterSelectButton.css";

function LetterSelectButton({ data, className, selected, action }) {
  return (
    <div className={`${className} letterSelectButtonRoot`}>
      {data?.map((item, index) => {
        return (
          <div key={index} className="item">
            {index === 0 ? <></> : <>/</>}
            <span
              className={`${selected === item && "selected"}`}
              onClick={() => action(item)}
            >
              {item}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default LetterSelectButton;
