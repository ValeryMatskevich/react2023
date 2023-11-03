import { Component } from 'react';
import classes from './Input.module.css';
import { InputProps } from '../type/InputProps';

export default class Input extends Component<InputProps> {
  render() {
    const { type, placeholder, onChange, value } = this.props;
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
}
