import './LetterSelectButton.css';

export interface LetterSelectButtonProps {
  data: string[];
  className?: string;
  selected: string;
  action: (item: string) => void;
}

function LetterSelectButton({
  data,
  className,
  selected,
  action
}: LetterSelectButtonProps) {
  return (
    <div className={`${className ?? ''} letter-select-button`}>
      {data?.map((item, index) => (
        <div key={index} className="letter-select-button__item">
          {index === 0 ? <></> : <>/</>}
          <span
            className={selected === item ? 'letter-select-button__item--selected' : ''}
            onClick={() => action(item)}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default LetterSelectButton;
