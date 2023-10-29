import { Component } from 'react';

interface ButtonProps {
  text: string;
}

export default class Button extends Component<ButtonProps> {
  render() {
    const { text } = this.props;
    return <button type="submit">{text}</button>;
  }
}
