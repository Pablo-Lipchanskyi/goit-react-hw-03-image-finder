import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { AppStyled } from './App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import fetchImagesWithQuery from 'services/api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { toast } from 'react-toastify';

export class App extends Component {
  state = {
    query: '',
    isLoading: false,
    page:1
  };

  handleQuery = query => {
    this.setState({ query });
  };

  handleLoading = isLoading => {
    this.setState({ isLoading });
  };


  LoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page +1
    }))
    console.log(this.state.page)
  }


  
  render() {
    const { isLoading } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleQuery} />
        {this.state.query && (
          <ImageGallery
            query={this.state.query}
            loadingStatus={this.handleLoading}
            page={this.state.page}
          />
        )}
        {isLoading && <Loader />}
        {this.state.query.length > 0 && <Button onClick={this.LoadMore} />}
        <ToastContainer autoClose={3000} />
      </AppStyled>
    );
  }
}