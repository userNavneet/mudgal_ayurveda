import { useState } from 'react';

function ProductImage({ src, alt, className, fallback = '/images/placeholder.jpg' }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      // Try to use a placeholder image if the original fails
      setImgSrc(fallback);
      setHasError(true);
    }
  };

  const handleLoad = () => {
    setHasError(false);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      onLoad={handleLoad}
      style={{
        backgroundColor: hasError ? '#f0f8f0' : 'transparent',
        border: hasError ? '2px dashed #8fbc8f' : 'none'
      }}
    />
  );
}

export default ProductImage;
