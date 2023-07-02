import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carouselapp"
const CarouselApp = ({ data }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-20-px"
    >
            {data?.map((carousel, index) => (
                <div className="px-5 py-5" key={index}><img style={{maxHeight: 400,maxWidth: 700,}}
                className="py-1 poster"
                src={
                    carousel.Poster !== "N/A"
                    ? carousel.Poster
                    : "https://via.placeholder.com/700"
                }
              /></div>
          ))}
    </Carousel>
//     <Carousel responsive={responsive}>
//   <div>Item 1</div>
//   <div>Item 2</div>
//   <div>Item 3</div>
//   <div>Item 4</div>
// </Carousel>
  );
};

export default CarouselApp;
