import { Component } from 'react';
import classes from './Button.module.css';
import { ButtonProps } from '../interface/ButtonProps';

export default class Button extends Component<ButtonProps> {
  render() {
    const { text } = this.props;
    return (
      <button className={classes.searchBtn} type="submit">
        {text}
      </button>
    );
  }
}
