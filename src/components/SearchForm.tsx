import { Component } from 'react';
import Input from './Input';
import Button from './Button';

interface SearchProps {
  onSubmit: (value: string) => void;
}

interface SearchState {
  inputValue: string;
}

export default class SearchForm extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      inputValue: localStorage.getItem('pokemonName') || '',
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { inputValue } = this.state;
    onSubmit(inputValue);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="search"
          placeholder="Pokemon name"
          onChange={this.handleInputChange}
          value={inputValue}
        />
        <Button text="🔍" />
      </form>
    );
  }
}
