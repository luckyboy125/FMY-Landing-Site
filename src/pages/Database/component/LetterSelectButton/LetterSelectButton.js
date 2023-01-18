import "./LetterSelectButton.css";

function LetterSelectButton({ data, className, selected, action }) {
  return (
    <div className={`${className} letterSelectButtonRoot`}>
      {data?.map((item, index) => {
        return (
          <>
            {index === 0 ? <></> : <>/</>}
            <span
              key={index}
              className={`${selected === item && "selected"}`}
              onClick={() => action(item)}
            >
              {item}
            </span>
          </>
        );
      })}
    </div>
  );
}

export default LetterSelectButton;
