import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from "swiper/modules";
import "./ProductSlider.css";
import {ProductCard} from '../index';
import { Link } from "react-router-dom";

function ProductSlider({ productSlideData }) {
  const {name, data } = productSlideData;
  return (
    <>
      {!productSlideData ? null : (
        <>
          <div className="py-4 lg:py-8 px-2 lg:px-10">
            <div className="flex">
              <h1 className="me-4 text-sm lg:text-base font-semibold">{name}</h1>
              <Link to={`/search/${name.toLowerCase().replaceAll("%", " ").replaceAll("|", " ").replaceAll("/", " ").replaceAll("&", "and")}`}>
                <button className="bg-[#003380] text-white text-xs px-2 lg:px-4 py-1 font-semibold min-w-[64px]">
                  View all
                </button>
              </Link>
            </div>
            <div className="pt-4 lg:pt-10">
              <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                // pagination={{
                //   clickable: true,
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                breakpoints={{
                  // when window width is >= 350px
                  350: {
                    slidesPerView: 2
                  },
                  // when window width is >= 1024px
                  1024: {
                    slidesPerView: 5
                  }
                }}
                className="mySwiper productSwiper px-[30px]"
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <ProductCard items={item}/>
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
