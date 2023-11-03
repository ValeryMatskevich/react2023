import classes from './Button.module.css';

interface ButtonProps {
  text: string;
}

function Button({ ...props }: ButtonProps) {
  return (
    <button className={classes.searchBtn} type="submit">
      {props.text}
    </button>
  );
}

export default Button;
