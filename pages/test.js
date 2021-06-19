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
      <div ref={sliderRef} className="keen-slider">
        <div className="image-additional keen-slider__slide">
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
        <div className="image-additional keen-slider__slide">
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
        <div className="image-additional keen-slider__slide">
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
        <div className="image-additional keen-slider__slide">
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

// export default (props) => {
//   const [currentSlide, setCurrentSlide] = React.useState(0);
//   const [pause, setPause] = React.useState(false);
//   const timer = React.useRef();

//   const [sliderRef, slider] = useKeenSlider({
//     initial: 0,
//     loop: true,
//     duration: 1000,
//     dragStart: () => {
//       setPause(true);
//     },
//     dragEnd: () => {
//       setPause(false);
//     },
//     slideChanged(s) {
//       setCurrentSlide(s.details().relativeSlide);
//       console.log(s.details().relativeSlide);
//     },
//   });

//   React.useEffect(() => {
//     sliderRef.current.addEventListener("mouseover", () => {
//       setPause(true);
//     });
//     sliderRef.current.addEventListener("mouseout", () => {
//       setPause(false);
//     });
//   }, [sliderRef]);

//   React.useEffect(() => {
//     timer.current = setInterval(() => {
//       if (!pause && slider) {
//         slider.next();
//       }
//     }, 2000);
//     return () => {
//       clearInterval(timer.current);
//     };
//   }, [pause, slider]);

//   return (
//     <>
//       <div className="product-additional">
//         <div
//           ref={sliderRef}
//           id="additional-carousel"
//           className="slick-carousel clearfix"
//         >
//           {/* <div className="navigation-wrapper">
//         <div ref={sliderRef} className="keen-slider"> */}
//           <div className="image-additional keen-slider__slide">
//             <a href="#">
//               <img
//                 src="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/8-750x750.jpg"
//                 title="Zip-Front Jacket"
//                 alt="Zip-Front Jacket"
//                 width="80"
//                 height="80"
//               />
//             </a>
//           </div>
//           <div className="image-additional keen-slider__slide">
//             <a href="#">
//               <img
//                 src="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/1-750x750.jpg"
//                 title="Zip-Front Jacket"
//                 alt="Zip-Front Jacket"
//                 width="80"
//                 height="80"
//               />
//             </a>
//           </div>
//           <div className="image-additional keen-slider__slide">
//             <a href="#">
//               <img
//                 src="https://opencart.mahardhi.com/MT04/noriva/02/image/cache/catalog/products/12-750x750.jpg"
//                 title="Zip-Front Jacket"
//                 alt="Zip-Front Jacket"
//                 width="80"
//                 height="80"
//               />
//             </a>
//           </div>

//           {/* <div className="keen-slider__slide number-slide1">
//             <a href="#">
//               <img
//                 src="/images/mainbanner1-1920x900.jpg"
//                 alt="Main-banner1"
//                 className="img-responsive"
//               />
//             </a>
//           </div>
//           <div className="keen-slider__slide number-slide2">
//             <a href="#">
//               <img
//                 src="/images/mainbanner2-1920x900.jpg"
//                 alt="Main-banner2"
//                 className="img-responsive"
//               />
//             </a>
//           </div>
//         */}
//         </div>
//         {slider && (
//           <>
//             <ArrowLeft
//               onClick={(e) => e.stopPropagation() || slider.prev()}
//               disabled={currentSlide === 0}
//             />
//             <ArrowRight
//               onClick={(e) => e.stopPropagation() || slider.next()}
//               disabled={currentSlide === slider.details().size - 1}
//             />
//           </>
//         )}
//       </div>
//       {slider && (
//         <div className="dots">
//           {[...Array(slider.details().size).keys()].map((idx) => {
//             return (
//               <button
//                 key={idx}
//                 onClick={() => {
//                   slider.moveToSlideRelative(idx);
//                 }}
//                 className={"dot" + (currentSlide === idx ? " active" : "")}
//               />
//             );
//           })}
//         </div>
//       )}
//     </>
//   );
// };

function ArrowUp(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--up" + disabeld}
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
      className={"arrow arrow--down" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}
