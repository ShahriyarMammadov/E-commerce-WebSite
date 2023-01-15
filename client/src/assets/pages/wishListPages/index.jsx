import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAllFavoritesAction,
  removeFromFavoritesAction,
} from "../../redux/action/favorite.action";
import { message, Popconfirm } from "antd";

const WishList = () => {
  const favorites = useSelector((state) => state.favoritesReducer);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeFromFavoritesAction(id));
  };

  const handleAllRemove = () => {
    dispatch(removeAllFavoritesAction());
  };
  const confirm = (e) => {
    handleDelete(e);
    message.success("Deleted");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("It Was Not Deleted");
  };
  return (
    <div className="favcards">
      <button
        id="delBtn"
        onClick={() => {
          handleAllRemove();
        }}
      >
        Delete All
      </button>
      <div
        style={{
          display: "flex",
          gap: "6%",
        }}
      >
        <div className="wishCard">
          {favorites.length < 1 ? (
            <h1 style={{ fontSize: "28px" }}>it is empty</h1>
          ) : (
            favorites?.map((e) => {
              return (
                <>
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
                    <Popconfirm
                      title="Delete the task"
                      description="Are you sure to delete this task?"
                      onConfirm={() => {
                        confirm(e.id);
                      }}
                      onCancel={cancel}
                      okText="yes"
                      cancelText="No"
                    >
                      <a href="#">Delete</a>
                    </Popconfirm>
                  </Card>
                </>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default WishList;
