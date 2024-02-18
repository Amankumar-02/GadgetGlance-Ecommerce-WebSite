import { IMG_URL } from "../../utils/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./ExploreProducts.css";
import { Link } from "react-router-dom";

function ExploreProducts({ exploreProductsData }) {
  const { name, data } = exploreProductsData;
  return (
    <>
      {!exploreProductsData ? null : (
        <>
          <div className="py-8 px-10">
            <div>
              <h1 className="text-center text-2xl font-bold">{name}</h1>
            </div>
            <div className="pt-10">
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                // pagination={{
                //   clickable: true,
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper px-[30px]"
              >
                {data.map(({ name, imageUrl }, index) => (
                  <SwiperSlide key={index}>
                    <div className="">
                      <Link
                        to={`/search/${name
                          .toLowerCase()
                          .replaceAll("%", " ")
                          .replaceAll("|", " ")
                          .replaceAll("/", " ")
                          .replaceAll("&", "and")}`}
                      >
                        <div>
                          <img
                            src={IMG_URL + imageUrl}
                            alt=""
                            className="scale-[0.95] hover:scale-[1.02] transition"
                          />
                        </div>
                      </Link>
                      <p>{name}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex items-center justify-center pt-8">
              <Link
                to={`/search/${name
                  .toLowerCase()
                  .replaceAll("%", " ")
                  .replaceAll("|", " ")
                  .replaceAll("/", " ")
                  .replaceAll("&", "and")}`}
              >
                <button className="bg-[#003380] text-white text-sm px-4 py-2 rounded-3xl font-semibold">
                  View All
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ExploreProducts;
