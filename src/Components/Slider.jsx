import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // optional: hide default arrows
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [1, 2, 3, 4, 5, 6];

  return (
    <div className="max-w-7xl mx-auto mt-6">
      <Slider {...settings}>
        {slides.map((num) => (
          <div key={num}>
            <div className="relative h-[350px] w-full">
          <img
            src="https://www.marthastewart.com/thmb/K24LIzve6z1Q_Oi_DBeHfzJwPfs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/plants-look-beautiful-when-not-blooming-coleus-lead-getty-0623-c6efce0847fc421fab5f394fe02cda51.jpg"
            className="h-full w-full object-cover"
            alt="Slide 1"
          />
          {/* Overlay text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white text-center">
            <h2 className="text-4xl font-bold">Green World</h2>
            <p className="mt-2 text-lg">Your trusted plant partner</p>
            <button className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg">
              Call Now: 01405174545
            </button>
          </div>
        </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
