import React from "react";
import { useEffect, useState } from "react";

const LazyLoadedImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
  
    useEffect(() => {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        setImageSrc(src);
      };
    }, [src]);
  
    return <img src={imageSrc || ''} alt={alt} />;
  };

export default LazyLoadedImage;
