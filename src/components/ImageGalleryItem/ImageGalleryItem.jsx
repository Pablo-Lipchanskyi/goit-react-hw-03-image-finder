import { ImageGalleryItemStyled } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image }) => {
  return (
    <ImageGalleryItemStyled>
      <img src={image.webformatURL} alt={image.id} />
    </ImageGalleryItemStyled>
  );
};