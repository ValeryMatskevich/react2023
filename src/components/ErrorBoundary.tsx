import { Component, ErrorInfo, ReactNode } from 'react';
import classes from './ErrorBoundary.module.css';

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children?: ReactNode;
}

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

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

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

    return children;
  }
}
