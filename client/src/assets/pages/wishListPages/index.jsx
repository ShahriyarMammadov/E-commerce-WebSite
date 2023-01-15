import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAllFavoritesAction,
  removeFromFavoritesAction,
} from "../../redux/action/favorite.action";

const WishList = () => {
  const favorites = useSelector((state) => state.favoritesReducer);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeFromFavoritesAction(id));
  };
  const handleAllRemove = () => {
    dispatch(removeAllFavoritesAction());
  };
  return (
    <div className="favcards">
      <button
        style={{ backgroundColor: "red", color: "white", padding: "2%" }}
        onClick={() => {
          handleAllRemove();
        }}
      >
        All Delete WishLust elements
      </button>
      <div>
        {favorites?.map((e) => {
          return (
            <Card
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
              <button
                onClick={() => {
                  handleDelete(e.id);
                }}
              >
                Delete
              </button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default WishList;
