import './DatabaseInput.css';

export interface DatabaseInputProps {
  placeholder?: string;
  inputValue: string;
  action: (value: string) => void;
  className?: string;
  tool?: React.ReactNode;
}

function DatabaseInput({
  placeholder,
  inputValue,
  action,
  className,
  tool
}: DatabaseInputProps) {
  return (
    <div className={`${className ?? ''} databaseInputRoot`}>
      <input
        placeholder={placeholder}
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          action(e.target.value)
        }
      />
      {tool}
    </div>
  );
}

export default DatabaseInput;
