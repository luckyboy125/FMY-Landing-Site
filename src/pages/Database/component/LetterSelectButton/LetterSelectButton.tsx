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
}: LetterSelectButtonProps): JSX.Element {
  return (
    <div className={`${className ?? ''} letterSelectButtonRoot`}>
      {data?.map((item, index) => (
        <div key={index} className="item">
          {index === 0 ? <></> : <>/</>}
          <span
            className={selected === item ? 'selected' : ''}
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
