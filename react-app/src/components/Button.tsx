import "./Button.css";

interface ButtonProp {
  buttonContext: string;
  handleOnClick: () => void;
}

function Button({ buttonContext, handleOnClick }: ButtonProp) {
  return (
    <button className="buttonDefaultStyle" onClick={handleOnClick}>
      {buttonContext}
    </button>
  );
}

export default Button;
