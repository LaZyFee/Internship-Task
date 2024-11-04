// CarouselCard.jsx
import { CardData } from "./CardData.jsx";
import Square from "../../../assets/image/Square.png";
import RightArrow from "../../../assets/image/arrow-right-bold.png";
import LeftArrow from "../../../assets/image/arrow-leftt-bold.png";

// Import Swiper components and styles
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function CarouselCard() {
  return (
    <div className="flex flex-col lg:mx-20 lg:my-20">
      <div className="flex gap-4 items-center">
        <img src={Square} alt="" className="w-4 h-4" />
        <h4 className="text-xl text-[#8E1B0F]">Crispy, Every Bite Taste</h4>
      </div>
      <h1 className="text-5xl font-bold uppercase my-4">Popular Food Items</h1>
      <div className="flex justify-end space-x-4">
        {/* Custom Swiper Navigation */}
        <div className="swiper-button-prev-custom">
          <img
            src={LeftArrow}
            alt="Previous"
            className="w-20 h-20 cursor-pointer"
          />
        </div>
        <div className="swiper-button-next-custom">
          <img
            src={RightArrow}
            alt="Next"
            className="w-20 h-20 cursor-pointer"
          />
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="lg:my-10 w-full"
      >
        {CardData.map((data) => (
          <SwiperSlide key={data.id} className="flex justify-center">
            <div className="card bg-base-100 shadow-xl h-80">
              <figure className="px-10 pt-10">
                <img src={data.image} alt={data.name} />
              </figure>
              <div className="border-b-2 border-red-600 w-1/3 place-self-center my-2"></div>
              <div className="card-body">
                <h2 className="card-title uppercase whitespace-nowrap">
                  {data.name}
                </h2>
                <p>{data.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselCard;
