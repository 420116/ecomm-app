import "./Button.css";

const Button = (props) => {
  const clickHandler = () => {
    props.onClick(props.context);
  };
  return (
    <button onClick={clickHandler} className={props.className}>
      {props.children}
    </button>
  );
};

export default Button;
