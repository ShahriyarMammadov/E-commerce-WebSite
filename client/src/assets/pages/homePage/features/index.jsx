import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination, FreeMode, Thumbs } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Loading from "../../../../components/loading";
import { cardAction } from "../../../redux/action/homePageCard.action";
import { Modal, message } from "antd";
import axios from "axios";
import { addToFavoritesAction } from "../../../redux/action/favorite.action";

const Featured = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState("");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [modalData, setModalData] = useState([]);

  const GetData = useSelector((state) => state.cardReducer);
  const favorites = useSelector((state) => state.favoritesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardAction("featured"));
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

  const showModal = async (e) => {
    setId(e.target.id);
    let response = await axios.get(
      `http://localhost:8000/featured/${e.target.id}`
    );
    setModalData(await response.data);
    setIsModalOpen(true);
  };

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
  // const wishList = () => {
  //   arr.push(modalData);
  //   localStorage.setItem("wishList", JSON.stringify(arr));
  //   dispatch(addToFavoritesAction(modalData));
  // };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="featured">
      {contextHolder}
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
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, EffectFade, Pagination]}
          speed={1000}
          navigation
        >
          {GetData?.data?.map((element, i) => {
            return (
              <>
                <SwiperSlide key={element.id}>
                  {GetData?.featuredData?.map((e) => {
                    e.gift && <p>{e.gift}</p>;
                  })}
                  <Card
                    loading={GetData.loading}
                    id={element.id}
                    hoverable
                    style={{
                      width: 300,
                      textAlign: "center",
                    }}
                    cover={
                      <img
                        id={element.id}
                        alt="example"
                        src={element.image.a}
                        onClick={(id) => {
                          showModal(id);
                        }}
                      />
                    }
                  >
                    <a href="">{element.productBrand}</a>
                    <Meta
                      title={element.ProductName}
                      description={
                        localStorage.getItem("exchange") + element.Price
                      }
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
