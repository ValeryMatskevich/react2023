import { Component } from 'react';
import classes from './Loader.module.css';
import loaderImg from '../assets/loader.png';

export default class Loader extends Component {
  render() {
    return (
      <div className={classes.loaderContainer}>
        <img src={loaderImg} className={classes.loader} alt="Loading..." />
      </div>
    );
  }
}
