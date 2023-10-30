import { Component } from 'react';
import { ErrorBoundaryProps } from '../interface/ErrorBoundaryProps';
import { ErrorBoundaryState } from '../interface/ErrorBoundaryState';
import ErrorButton from './ErrorButton';
import classes from './ErrorBoundary.module.css';

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  handleErrorButtonClick = () => {
    this.setState({ hasError: true });
    throw new Error('This is a test error.');
  };

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div className={classes.errorWrapper}>
          <div className={classes.errorContainer}>
            <h1>Sorry, something went wrong.</h1>
            <p>Please refresh the page.</p>
          </div>
        </div>
      );
    }

    return (
      <>
        {children}
        <ErrorButton onClick={this.handleErrorButtonClick} />
      </>
    );
  }
}
