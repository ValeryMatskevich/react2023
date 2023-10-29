import { Component } from 'react';

type InputProps = React.HTMLProps<HTMLInputElement>;

export default class Input extends Component<InputProps> {
  render() {
    const { type, placeholder, onChange, value } = this.props;
    return (
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    );
  }
}
