import React, { Component } from 'react';
import fetchImagesWithQuery from '../services/API.js';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
  };

  async componentDidMount() {
    this.props.loadingStatus(true);
    try {
      const query = this.props.query;
      const images = await fetchImagesWithQuery(query);
      this.setState({ images });
    } catch (error) {
      this.setState({error})
    } finally {
      this.props.loadingStatus(false);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    try {
      const query = this.props.query;
      if (prevProps.query !== query) {
        this.props.loadingStatus(true);
        const images = await fetchImagesWithQuery(query);
        this.setState({ images: [...images] });
        this.props.loadingStatus(false);
      }
    } catch (error) {
      
    }
  }

  render() {
    const { images,error } = this.state;
    return (
      <>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </>
    );
  }
}