import React, { useEffect, useState, useRef } from "react";
import { Card, Modal } from "antd";
import Meta from "antd/es/card/Meta";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [Data, setData] = useState([]);
  const favorites = useSelector((state) => state.favoritesReducer);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(async () => {
    let response = await axios.get(`http://localhost:8000/bestSellers/${id}`);
    setData(await response.data);
  }, []);
  const showModal = async () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div>
        <Modal
          style={{ textAlign: "center" }}
          title={Data?.ProductName}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Swiper
            style={{
              "--swiper-navigation-color": "#black",
              "--swiper-pagination-color": "#black",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src={Data?.image?.a} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Data?.image?.b} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Data?.image?.c} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Data?.image?.d} />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Data?.image?.a} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Data?.image?.b} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Data?.image?.c} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Data?.image?.d} />
            </SwiperSlide>
          </Swiper>
          <p>{Data?.productBrand}</p>
          <p>
            {localStorage.getItem("exchange")}
            {Data?.Price}
          </p>
          <button
            onClick={() => {
              wishList();
            }}
          >
            Add to WishList
          </button>
        </Modal>
        <Card
          key={Data?.id}
          hoverable
          style={{
            width: 300,
            textAlign: "center",
          }}
          cover={<img alt="example" src={Data?.image?.a} />}
        >
          <a href="#">{Data?.productBrand}</a>
          <Meta
            title={Data?.ProductName}
            description={localStorage.getItem("exchange") + Data?.Price}
          />
        </Card>
      </div>
    </div>
  );
};

export default DetailPage;
