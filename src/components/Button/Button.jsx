import { React, Component } from 'react';
import css from '../styles.module.css';
import fetchImagesWithQuery from '../services/API.js';
import { per_page } from '../services/API.js';
export class Button extends Component{
  LoadMore = event => {
    event.preventDefault();
    per_page*=2
  }
  render() {
    return (
       <button type="button" onClick={this.LoadMore}>
      <span>Load more</span>
    </button>
    )
  }
} 
