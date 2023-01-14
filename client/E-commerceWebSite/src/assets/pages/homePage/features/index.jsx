import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { featuredAction } from "../../../redux/action/featured.action";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css";
import Loading from "../../../../components/loading";

const Featured = () => {
  const GetData = useSelector((state) => state.cardReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(featuredAction());
  }, []);

  return (
    <div className="featured">
      {GetData.loading ? (
        <Loading />
      ) : (
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          modules={[Navigation, EffectFade]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          speed={1000}
          navigation
        >
          {GetData?.featuredData?.map((element, i) => {
            return (
              <>
                <SwiperSlide>
                  {GetData?.featuredData?.map((e) => {
                    e.gift && <p>{e.gift}</p>;
                  })}
                  <Card
                    loading={GetData.loading}
                    key={element.id}
                    hoverable
                    style={{
                      width: 300,
                      textAlign: "center",
                    }}
                    cover={<img alt="example" src={element.image.a} />}
                  >
                    <a href="">{element.productBrand}</a>
                    <Meta
                      title={element.ProductName}
                      description={element.Price}
                    />
                  </Card>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      )}
      <Outlet />
    </div>
  );
};

export default Featured;