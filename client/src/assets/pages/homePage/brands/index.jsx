import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination, Navigation } from "swiper";
import "./index.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "antd";

const BrandsComponent = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    let brands = await axios.get("http://localhost:8000/brand");
    setData(brands.data);
  }, []);

  return (
    <div>
      <Swiper
        slidesPerView={10}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="blogCards">
          {data?.map((e) => {
            return (
              <SwiperSlide key={e.id}>
                <Card
                  style={{
                    width: 150,
                  }}
                >
                  <img src={e?.image?.a} alt="" />
                  <h2>{e?.name}</h2>
                </Card>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default BrandsComponent;
