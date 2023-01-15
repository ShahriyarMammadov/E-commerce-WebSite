import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "./index.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../../components/loading";
import { Link, Outlet } from "react-router-dom";
import { cardAction } from "../../../redux/action/homePageCard.action";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { addToFavoritesAction } from "../../../redux/action/favorite.action";
import "swiper/css";
import { Navigation, FreeMode, Thumbs } from "swiper";
import { Modal, message } from "antd";
import axios from "axios";

const SpecialDeals = () => {
  const [messageApi, contextHolder] = message.useMessage();
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

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "Already Added",
    });
  };
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Was Added",
    });
  };

  let arr = JSON.parse(localStorage.getItem("wishList")) ?? [];

  const handleAddToWishList = () => {
    if (!arr.find((q) => q.id === modalData.id)) {
      arr.push(modalData);
      localStorage.setItem("wishList", JSON.stringify(arr));
      dispatch(addToFavoritesAction(modalData));
      success();
    } else {
      warning();
    }
  };

  const showModal = async (e) => {
    setId(e.target.id);
    let response = await axios.get(
      `http://localhost:8000/specialDelas/${e.target.id}`
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
    <div>
      {contextHolder}
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
              handleAddToWishList();
            }}
          >
            Add to WishList
          </button>
          <Link to={`/detailPage/${id}`}>MORE</Link>
        </Modal>
        {GetData.loading ? (
          <Loading />
        ) : (
          GetData?.data?.map((data) => {
            return (
              <Card
                loading={GetData?.loading}
                key={data?.id}
                hoverable
                style={{
                  width: 300,
                  textAlign: "center",
                }}
                cover={
                  <img
                    alt="example"
                    id={data?.id}
                    src={data?.image?.a}
                    onClick={(id) => {
                      showModal(id);
                    }}
                  />
                }
              >
                <a href="#">{data?.productBrand}</a>
                <Meta title={data?.ProductName} description={data?.Price} />
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
