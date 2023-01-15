import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavoritesAction } from "../../redux/action/favorite.action";
import { cardAction } from "../../redux/action/homePageCard.action";
import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Navigation, FreeMode, Thumbs } from "swiper";
import { Modal } from "antd";
import axios from 'axios'
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState("");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [modalData, setModalData] = useState([]);
  const dispatch = useDispatch();
  const GetData = useSelector((state) => state.cardReducer);
  const favorites = useSelector((state) => state.favoritesReducer);

  useEffect(() => {
    dispatch(cardAction("allProduct"));
  }, []);

  const wishList = () => {
    dispatch(addToFavoritesAction(modalData));
  };
  const showModal = async (e) => {
    setId(e.target.id);
    let response = await axios.get(
      `http://localhost:8000/allProduct/${e.target.id}`
    );
    setModalData(await response.data);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      id="allData"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2%",
        padding: "0 6%",
      }}
    >
      <Modal
        style={{ textAlign: "center" }}
        title={modalData?.ProductName}
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
            <img src={modalData?.image?.a} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={modalData?.image?.b} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={modalData?.image?.c} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={modalData?.image?.d} />
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
            <img src={modalData?.image?.a} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={modalData?.image?.b} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={modalData?.image?.c} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={modalData?.image?.d} />
          </SwiperSlide>
        </Swiper>
        <p>{modalData?.productBrand}</p>
        <p>
          {localStorage.getItem("exchange")}
          {modalData?.Price}
        </p>
        <button
          onClick={() => {
            wishList();
          }}
        >
          Add to WishList
        </button>
        <Link to={`/detailPage/${id}`}>MORE</Link>
      </Modal>
      {GetData?.data?.map((data) => {
        return (
          <Card
            loading={GetData.loading}
            key={data.id}
            hoverable
            style={{
              width: 300,
              marginTop: "2%",
              textAlign: "center",
            }}
            cover={
              <img
                id={data.id}
                alt="example"
                src={data.image.a}
                onClick={(id) => {
                  showModal(id);
                }}
              />
            }
          >
            <a href="#">{data.productBrand}</a>
            <Meta title={data.ProductName} description={data.Price} />
          </Card>
        );
      })}
    </div>
  );
};

export default AllProducts;
