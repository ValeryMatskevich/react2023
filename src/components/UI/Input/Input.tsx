import classes from './Input.module.css';

type InputProps = React.HTMLProps<HTMLInputElement>;

function Input({ type, placeholder, onChange, value }: InputProps) {
  return (
    <input
      className={classes.searchInput}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;
