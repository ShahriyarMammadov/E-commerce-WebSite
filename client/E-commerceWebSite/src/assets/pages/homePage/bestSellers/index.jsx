import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect } from "react";
import Loading from "../../../../components/loading";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { cardAction } from "../../../redux/action/homePageCard.action";

const BestSellers = () => {
  const GetData = useSelector((state) => state.cardReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardAction("bestSellers"));
  }, []);

  return (
    <div>
      <div className="bestSellers">
        {GetData.Loading ? (
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
                cover={<img alt="example" src={data.image.a} />}
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

export default BestSellers;
