import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "./index.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../../components/loading";
import { Outlet } from "react-router-dom";
import { cardAction } from "../../../redux/action/homePageCard.action";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { addToFavoritesAction } from "../../../redux/action/favorite.action";
import "swiper/css";
import { Navigation, FreeMode, Thumbs } from "swiper";
import { Modal } from "antd";
import axios from "axios";

const SpecialDeals = () => {
  const GetData = useSelector((state) => state.cardReducer);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState("");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [modalData, setModalData] = useState([]);
  const favorites = useSelector((state) => state.favoritesReducer);

  useEffect(() => {
    dispatch(cardAction("specialDelas"));
  }, []);

  const showModal = async (e) => {
    setId(e.target.id);
    let response = await axios.get(
      `http://localhost:8000/specialDelas/${e.target.id}`
    );
    setModalData(await response.data);
    setIsModalOpen(true);
  };
  const wishList = () => {
    dispatch(addToFavoritesAction(modalData));
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="specialDeals">
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
        </Modal>
        {GetData.loading ? (
          <Loading />
        ) : (
          GetData?.data?.map((data) => {
            return (
              <Card
                loading={GetData.loading}
                key={data.id}
                hoverable
                style={{
                  width: 300,
                  textAlign: "center",
                }}
                cover={
                  <img
                    alt="example"
                    id={data.id}
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
          })
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default SpecialDeals;
