import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect } from "react";
import Loading from "../../../../components/loading";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { cardAction } from "../../../redux/action/homePageCard.action";

const NewArrivals = () => {
  const GetData = useSelector((state) => state.cardReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardAction("newArrivals"));
  }, []);

  return (
    <div>
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
                cover={<img alt="example" src={e.image.a} />}
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
