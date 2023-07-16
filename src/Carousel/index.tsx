import React, {forwardRef, useEffect, useState} from "react";
import classNames from "classnames";
import "./style/index.scss"


export interface CarouselProps {
  className?:string,
  children:React.ReactNode
  time?:number
}

const Carousel = forwardRef<HTMLDivElement,CarouselProps>((props,ref) =>{

  const { className, children,time=3000,...restProps } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const classes = classNames("e-carousel", className);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1

      );
      setOpacity(1); // 重置透明度为1
    }, time);



    return () => clearInterval(interval);

  }, [children]);

  useEffect(() => {
    if (opacity > 0) {
      const fadeOutTimer = setInterval(() => {
        setOpacity((prevOpacity) => prevOpacity - 0.01); // 透明度每次减少0.1
      }, time / 100); // 将总时间分为10个步骤来递减透明度

      return () => clearInterval(fadeOutTimer);
    }
  }, [activeIndex]);


  const goToNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1
    );
    setOpacity(1); // 重置透明度为1
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1
    );
    setOpacity(1); // 重置透明度为1
  };



  return <div className={classes} {...restProps} ref={ref}>
    <div className="e-carousel-content">
      {
        React.Children.map(
          children,(child,index)=>(
            <div
            key={index}
            className={`e-carousel-item ${
              index === activeIndex ? "e-carousel-item-active" : ""
            }`}
            style={{
              opacity: index === activeIndex ? opacity : 0,
            }}
            >
              {child}
            </div>
          )
        )
      }
    </div>
    <div className="e-carousel-nav">
      {React.Children.map(children, (_, index) => (
        <div
          key={index}
          className={`e-carousel-nav-dot ${
            index === activeIndex ? "e-carousel-nav-dot-active" : ""
          }`}
          onClick={() => setActiveIndex(index)}
        ></div>
      ))}
    </div>
    <div className="e-carousel-controls">
      <div className="e-carousel-control" onClick={goToPrevSlide}>
        {`<`}
      </div>
      <div className="e-carousel-control" onClick={goToNextSlide}>
        {`>`}
      </div>
    </div>
  </div>
});

export default Carousel


