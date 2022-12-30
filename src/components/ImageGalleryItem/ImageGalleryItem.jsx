export const ImageGalleryItem = ({ image }) => {
  return (
    <li>
      <img src={image.webformatURL} alt={image.id} />
    </li>
  );
};