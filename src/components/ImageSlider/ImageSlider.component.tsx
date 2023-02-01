import React from 'react';
import Image from 'next/image';
import imageSliderStyles from './ImageSlider.module.css';
type ImageSliderProps = {
    images: string[]
}
function ImageSliderComponent({images}: ImageSliderProps) {
    return (
        <div>
            <div className={imageSliderStyles.image_slider}>
                {images.map((image, index) => (
                    <div key={index} className={imageSliderStyles.image}>
                        <Image src={image} alt="image" width={500} height={500} />
                    </div>
                ))}
                </div>
        </div>
    );
}

export default ImageSliderComponent;