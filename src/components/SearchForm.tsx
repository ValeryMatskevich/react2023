import { Component } from 'react';
import Input from './Input';
import Button from './Button';
import classes from './SearchForm.module.css';
import { SearchFormProps } from '../interface/SearchFormProps';
import { SearchFormState } from '../interface/SearchFormState';

export default class SearchForm extends Component<
  SearchFormProps,
  SearchFormState
> {
  constructor(props: SearchFormProps) {
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
      <form className={classes.searchForm} onSubmit={this.handleSubmit}>
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
