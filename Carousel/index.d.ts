import React from "react";
import "./style/index.scss";
export interface CarouselProps {
    className?: string;
    children: React.ReactNode;
    time?: number;
}
declare const Carousel: React.ForwardRefExoticComponent<CarouselProps & React.RefAttributes<HTMLDivElement>>;
export default Carousel;
