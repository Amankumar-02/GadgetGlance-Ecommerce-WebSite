import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";
import "./ProductSlider.css";
import { ProductCard } from "../index";
import { Link } from "react-router-dom";

function ProductSlider({ productSlideData }) {
  const { name, displayName, data } = productSlideData;
  return (
    <>
      {!productSlideData ? null : (
        <>
          <div className="py-4 lg:py-8 px-2 lg:px-10">
            <div className="flex justify-between items-center">
              <h1 className="text-base lg:text-lg font-semibold">{displayName}</h1>
              <Link
                to={`/search/${name
                  .toLowerCase()
                  .replaceAll("%", " ")
                  .replaceAll("|", " ")
                  .replaceAll("/", " ")
                  .replaceAll("&", "and")}`}
              >
                <button className="bg-[#003088] text-white text-xs lg:text-sm px-2 lg:px-4 py-1 font-semibold rounded-lg w-[60px] lg:w-[100px]">
                  View all
                </button>
              </Link>
            </div>
            <div className="pt-4 lg:pt-10">
              <Swiper
                slidesPerView={2}
                spaceBetween={20}
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                breakpoints={{
                  350: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                  1280: { slidesPerView: 5 },
                }}
                className="mySwiper productSwiper"
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <ProductCard items={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProductSlider;
