import { useState, useEffect } from "react";
import * as styles from "./progressive-image.module.css";

export type ProgressiveImageProps = {
  placeholderImageSrc: string;
  imageSrc: string;
  [x: string]: string;
};

const ProgressiveImage = ({
  placeholderImageSrc,
  imageSrc,
  ...props
}: ProgressiveImageProps) => {
  const [src, setSrc] = useState(placeholderImageSrc || imageSrc);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      setTimeout(() => {
        setSrc((_) => imageSrc);
        setIsLoading(false);
      }, 2000);
    };
  }, [imageSrc]);

  return (
    <img
      src={src}
      className={isLoading ? styles.loading : styles.loaded}
      {...props}
    />
  );
};

export default ProgressiveImage;
