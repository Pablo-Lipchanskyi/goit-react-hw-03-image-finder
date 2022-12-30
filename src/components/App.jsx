import React, { Component } from 'react';
import css from './styles.module.css'
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
export class App extends Component {
  state = {
    query: '',
    isLoading: false,
  };

  handleQuery = query => {
    this.setState({ query })
  };
  handleLoading = isLoading => {
    this.setState({ isLoading });
  };
  render() {
    const { isLoading } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleQuery} />
        {this.state.query && (
          <ImageGallery
            query={this.state.query}
            loadingStatus={this.handleLoading}
          />
        )}
        {isLoading && <Loader />}
        <Button/>
      </div>
    )
  }
}
