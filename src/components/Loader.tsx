import { Component } from 'react';
import classes from './Loader.module.css';

export default class Loader extends Component {
  render() {
    return (
      <div className={classes.loaderContainer}>
        <img
          src="../../public/loader.png"
          className={classes.loader}
          alt="Loading..."
        />
      </div>
    );
  }
}
