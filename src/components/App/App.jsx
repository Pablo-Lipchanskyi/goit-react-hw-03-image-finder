import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { AppStyled } from './App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';

export class App extends Component {
  state = {
    query: '',
    isLoading: false,
  };

  handleQuery = query => {
    this.setState({ query });
  };

  handleLoading = isLoading => {
    this.setState({ isLoading });
  };

  render() {
    const { isLoading } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleQuery} />
        {this.state.query && (
          <ImageGallery
            query={this.state.query}
            loadingStatus={this.handleLoading}
          />
        )}
        {isLoading && <Loader />}
        <Button />
        <ToastContainer autoClose={3000} />
      </AppStyled>
    );
  }
}