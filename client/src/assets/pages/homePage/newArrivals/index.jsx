import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import Loading from "../../../../components/loading";
import { Navigation, FreeMode, Thumbs } from "swiper";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { cardAction } from "../../../redux/action/homePageCard.action";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Modal, message } from "antd";
import axios from "axios";
import { addToFavoritesAction } from "../../../redux/action/favorite.action";

const NewArrivals = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState("");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [modalData, setModalData] = useState([]);
  const GetData = useSelector((state) => state.cardReducer);
  const favorites = useSelector((state) => state.favoritesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardAction("newArrivals"));
  }, []);

  const showModal = async (e) => {
    setId(e.target.id);
    let response = await axios.get(
      `http://localhost:8000/newArrivals/${e.target.id}`
    );
    setModalData(await response.data);
    setIsModalOpen(true);
  };

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

  const handleAddToWishList = (customer) => {
    if (!arr.find((q) => q.id === modalData.id)) {
      arr.push(modalData);
      localStorage.setItem("wishList", JSON.stringify(arr));
      dispatch(addToFavoritesAction(modalData));
      success();
    } else {
      warning();
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="new">
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
      <div className="cardsSec2">
        {GetData.Loading ? (
          <Loading />
        ) : (
          GetData?.data?.map((e) => {
            return (
              <Card
                loading={GetData.loading}
                key={e.id}
                hoverable
                style={{
                  width: 300,
                  textAlign: "center",
                }}
                cover={
                  <img
                    id={e.id}
                    alt="example"
                    src={e.image.a}
                    onClick={(id) => {
                      showModal(id);
                    }}
                  />
                }
              >
                <a href="#">{e.productBrand}</a>
                <Meta title={e.ProductName} description={e.Price} />
              </Card>
            );
          })
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default NewArrivals;
