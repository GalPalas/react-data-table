type InputProps = {
  name: string;
  placeholder: string;
  value?: string;
  onChange: (e: Event) => void;
};

const Input = ({ name, placeholder, onChange }: InputProps) => {
  return (
    <input
      required
      type="text"
      name={name}
      onChange={() => onChange}
      placeholder={placeholder}
      className="form-control mx-2"
    />
  );
};

export default Input;
