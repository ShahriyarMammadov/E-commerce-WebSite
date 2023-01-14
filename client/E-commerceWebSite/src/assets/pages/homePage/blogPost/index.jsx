import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./index.scss";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const BlogComponent = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(async () => {
    let data = await axios.get("http://localhost:8000/blog");
    setBlogData(data.data);
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={4}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="blogCards">
          {blogData?.map((e) => {
            return (
              <SwiperSlide>
                <p>{e.date}</p>
                <Card
                  key={e?.id}
                  style={{
                    width: 400,
                  }}
                  cover={<img alt="example" src={e?.image?.a} />}
                >
                  <Meta title={e?.title} description={e?.post} />
                </Card>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </>
  );
};

export default BlogComponent;
