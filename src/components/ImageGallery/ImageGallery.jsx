import React, { Component } from 'react';
import fetchImagesWithQuery from 'services/api';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { toast } from 'react-toastify';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1
  };

  async componentDidMount() {
    this.props.loadingStatus(true);
    try {
      const query = this.props.query;
      const images = await fetchImagesWithQuery(query);
      this.setState({ images });
    } catch (error) {
      return toast.error('Whoops, something went wrong: ', error.message);
    } finally {
      this.props.loadingStatus(false);
    }
  }

  async componentDidUpdate(_, prevState) {
    try {
      const page = this.state.page;
      
      if (prevState.page !== page)
        {
        this.props.loadingStatus(true);
        const images = await fetchImagesWithQuery(page);
        this.setState({ images: [...images] });
        this.props.loadingStatus(false);
      }
    } catch (error) {
      return toast.error('Whoops, something went wrong: ', error.message);
    }
  }

  render() {
    const { images } = this.state;
    return (
      <ImageGalleryStyled>
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ImageGalleryStyled>
    );
  }
}