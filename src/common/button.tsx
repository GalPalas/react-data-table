type ButtonType = "button" | "submit" | "reset" | undefined;

type ButtonProps = {
  type?: ButtonType;
  className: string;
  onClick?: () => void;
  lable: string;
};

const Button = ({ type, className, onClick, lable }: ButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {lable}
    </button>
  );
};

export default Button;
