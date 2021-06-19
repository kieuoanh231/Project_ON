import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default (props) => {
  const [sliderRef, slider] = useKeenSlider({
    spacing: 10,
    slidesPerView: 3,
    vertical: true,
  });

  return (
    <>
      <div ref={sliderRef} className="keen-slider height-slider">
        <div class="image-additional keen-slider__slide">
          <a href="#">
            <img
              src="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/8-750x750.jpg"
              title="Zip-Front Jacket"
              alt="Zip-Front Jacket"
              width="80"
              height="80"
            />
          </a>
        </div>
        <div class="image-additional keen-slider__slide">
          <a href="#">
            <img
              src="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/8-750x750.jpg"
              title="Zip-Front Jacket"
              alt="Zip-Front Jacket"
              width="80"
              height="80"
            />
          </a>
        </div>
        <div class="image-additional keen-slider__slide">
          <a href="#">
            <img
              src="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/8-750x750.jpg"
              title="Zip-Front Jacket"
              alt="Zip-Front Jacket"
              width="80"
              height="80"
            />
          </a>
        </div>
        <div class="image-additional keen-slider__slide">
          <a href="#">
            <img
              src="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/8-750x750.jpg"
              title="Zip-Front Jacket"
              alt="Zip-Front Jacket"
              width="80"
              height="80"
            />
          </a>
        </div>
      </div>
      {slider && (
        <>
          <ArrowUp
            onClick={(e) => e.stopPropagation() || slider.prev()}
            // disabled={currentSlide === 0}
          />
          <ArrowDown
            onClick={(e) => e.stopPropagation() || slider.next()}
            // disabled={currentSlide === slider.details().size - 1}
          />
        </>
      )}
    </>
  );
};

function ArrowUp(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrows arrow--up" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowDown(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrows arrow--down" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}
