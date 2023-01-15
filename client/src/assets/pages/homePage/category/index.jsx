import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import axios from "axios";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css";

const Category = () => {
  const [Data, setData] = useState([]);
  const GetData = useSelector((state) => state.cardReducer);
  const dispatch = useDispatch();

  useEffect(async () => {
    let response = await axios.get(`http://localhost:8000/category`);
    setData(response.data);
  }, []);

  return (
    <div className="categoryComponent">
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        modules={[Navigation, EffectFade]}
        speed={1000}
        navigation
      >
        {Data.map((e) => {
          return (
            <SwiperSlide key={e.id}>
              <div className="card" key={e.id}>
                <img src={e.image?.a} alt="" />
                <a href={"/asdasd"}>{e?.categories}</a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Category;
