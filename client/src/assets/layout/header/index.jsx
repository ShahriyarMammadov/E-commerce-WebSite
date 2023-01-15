import React, { useEffect, useState } from "react";
import "./index.scss";
import { color, Heading, Select, Stack } from "@chakra-ui/react";
import { NavLink, Link } from "react-router-dom";
import { Card, CardBody } from "@chakra-ui/react";
import fashion from "./images/catalog_fashion.jpg";
import electronic from "./images/catalog_electronics.jpg";
import bags from "./images/catalog_bags.jpg";
import health from "./images/catalog_health.jpg";
import footWear from "./images/catalog_footwear.jpg";
import food from "./images/catalog_food.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "antd";
import { Input, Space } from "antd";
import axios from "axios";
import { searchAction } from "../../redux/action/homePageCard.action";
const { Search } = Input;

const Header = () => {
  const [first, setFirst] = useState("");
  const [open, setOpen] = useState(false);

  const GetData = useSelector((state) => state.cardReducer);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    localStorage.setItem("exchange", e.target.value);
  };

  useEffect(() => {
    setFirst(localStorage.getItem("exchange"));
  }, [handleChange]);

  window.onscroll = function () {
    myFunction();
  };

  const onSearch = async (value) => {
    let js = await axios.get("http://localhost:8000/allProduct");
    GetData.data = js.data;
    let sndj = GetData.data.filter((element) => {
      element.ProductName.toLocaleLowerCase().includes(
        value.toLocaleLowerCase()
      );
    });
    console.log(sndj);
    // dispatch(searchAction(sndj));
  };
  let header = document.getElementById("headerBottom");
  let sticky = header?.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  return (
    <header>
      <div id="headerTop">
        <Modal
          title="Search By Name"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1000}
        >
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </Modal>
        <div className="icons">
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-pinterest"></i>
          <i className="fa-brands fa-square-google-plus"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
        <div className="dropdown">
          <Select
            focusBorderColor="none"
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <option value="€">€ EURO</option>
            <option value="£">£ POUND STERLING</option>
            <option value="$">$ US DOLLAR</option>
          </Select>
        </div>
        <div className="nav">
          <NavLink to={"/contactPage"}>CONTACT</NavLink>
          <div className="dropdown">
            <button className="dropbtn">
              FAQ <i className="fa-solid fa-angle-down"></i>
            </button>
            <div className="dropdown-content">
              <NavLink to={"/comparePage"}>CREATE</NavLink>
              <NavLink to={"/comparePage"}>UNLIMITED</NavLink>
              <NavLink to={"/comparePage"}>MENUS</NavLink>
            </div>
          </div>
          <NavLink to={"/wishList"}>WISHLIST</NavLink>
          <NavLink to={"/comparePage"}>COMPARE</NavLink>
        </div>
      </div>
      <hr />
      <div id="headerBottom">
        <div className="left">
          <div className="dropdown">
            <button className="dropbtn">
              <i className="fa-solid fa-bars"></i> SHOP{" "}
              <i className="fa-solid fa-angle-down"></i>
            </button>
            <div className="dropdown-content">
              <NavLink to={"/comparePage"} className="category">
                SHOP BY CATEGORY <i className="fa-solid fa-angle-right"></i>
              </NavLink>
              <hr />
              <NavLink to={"/comparePage"}>
                SHOP BY BRAND <i className="fa-solid fa-angle-right"></i>
              </NavLink>
              <hr />
              <NavLink to={"/comparePage"}>
                SPECIAL DEALS <button className="sale">SALE</button>{" "}
                <i className="fa-solid fa-angle-right"></i>
              </NavLink>
              <hr />
              <NavLink to={"/comparePage"}>
                BEST SELLERS <i className="fa-solid fa-angle-right"></i>
              </NavLink>
              <hr />
              <NavLink to={"/comparePage"}>
                CUSTOM LINKS <i className="fa-solid fa-angle-right"></i>
              </NavLink>
              <hr />
              <NavLink to={"/comparePage"}>
                SEE ALL PRODUCTS <button className="new">NEW</button>
              </NavLink>
              <hr />
            </div>
          </div>
          <div className="catalog">
            <div className="dropdown">
              <button className="dropbtn">
                {" "}
                CATALOG <i className="fa-solid fa-angle-down"></i>
              </button>
              <div className="dropdown-content">
                <div className="catalog2">
                  <div className="catalog-left">
                    <div className="top">
                      <Card
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                      >
                        <Stack>
                          <CardBody>
                            <Heading size="md">
                              <Link to={"/sdfas"}>FASHION</Link>
                            </Heading>
                          </CardBody>
                          <div className="images">
                            <img src={fashion} alt="" />
                            <nav>
                              <Link>Accessories</Link>
                              <Link>Dresses</Link>
                              <Link>Pants</Link>
                              <Link>T-Shirt</Link>
                              <Link className="all">See all products</Link>
                            </nav>
                          </div>
                        </Stack>
                      </Card>
                      <Card
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                      >
                        <Stack>
                          <CardBody>
                            <Heading size="md">
                              <Link to={"/sdfas"}>ELECTRONICS</Link>
                            </Heading>
                          </CardBody>
                          <div className="images">
                            <img src={electronic} alt="" />
                            <nav>
                              <Link>Desktops</Link>
                              <Link>Laptops & Notebooks</Link>
                              <Link>Components</Link>
                              <Link>Phines & PDAs</Link>
                              <Link className="all">See all products</Link>
                            </nav>
                          </div>
                        </Stack>
                      </Card>
                      <Card
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                      >
                        <Stack>
                          <CardBody>
                            <Heading size="md">
                              <Link to={"/sdfas"}>BAGS</Link>
                            </Heading>
                          </CardBody>
                          <div className="images">
                            <img src={bags} alt="" />
                            <nav>
                              <Link>Backpacks</Link>
                              <Link>Clutches</Link>
                              <Link>Formal</Link>
                              <Link>Purses</Link>
                              <Link className="all">See all products</Link>
                            </nav>
                          </div>
                        </Stack>
                      </Card>
                    </div>
                    <div className="bottom">
                      <Card
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                      >
                        <Stack>
                          <CardBody>
                            <Heading size="md">
                              <Link to={"/sdfas"}>HEALTH & BEAUTY</Link>
                            </Heading>
                          </CardBody>
                          <div className="images">
                            <img src={health} alt="" />
                            <nav>
                              <Link>Accessories</Link>
                              <Link>Body</Link>
                              <Link>Lipstick</Link>
                              <Link>Makeup</Link>
                              <Link className="all">See all products</Link>
                            </nav>
                          </div>
                        </Stack>
                      </Card>
                      <Card
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                      >
                        <Stack>
                          <CardBody>
                            <Heading size="md">
                              <Link to={"/sdfas"}>FOOTWEAR</Link>
                            </Heading>
                          </CardBody>
                          <div className="images">
                            <img src={footWear} alt="" />
                            <nav>
                              <Link>Flats</Link>
                              <Link>Flip Flops</Link>
                              <Link>Heels</Link>
                              <Link>Running</Link>
                              <Link className="all">See all products</Link>
                            </nav>
                          </div>
                        </Stack>
                      </Card>
                      <Card
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                      >
                        <Stack>
                          <CardBody>
                            <Heading size="md">
                              <Link to={"/assf"}>FOOD</Link>
                            </Heading>
                          </CardBody>
                          <div className="images">
                            <img src={food} alt="" />
                            <nav>
                              <Link>Breakfast</Link>
                              <Link>Dessert</Link>
                              <Link>Grill</Link>
                              <Link>Pasta</Link>
                              <Link className="all">See all products</Link>
                            </nav>
                          </div>
                        </Stack>
                      </Card>
                    </div>
                  </div>

                  <div className="catalog-right">
                    <div className="link">
                      <NavLink>TOP SELLERS</NavLink>
                      <NavLink>SPECIAL DEALS</NavLink>
                    </div>
                    <div className="img">
                      <Card
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                      >
                        <Stack>
                          <div className="img1"></div>
                          <CardBody>
                            <Heading size="md">
                              <Link to={"/sdfas"}>Scrub Gift Set</Link>
                            </Heading>
                            <p>{first} 444,9</p>
                            <div className="footer">
                              <Link>Add to Cart</Link>
                              <div className="icon">
                                <i className="fa-regular fa-heart"></i>
                                <i className="fa-solid fa-arrow-right-arrow-left"></i>
                              </div>
                            </div>
                          </CardBody>
                        </Stack>
                      </Card>
                      <Card
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                      >
                        <Stack>
                          <div className="img2"></div>
                          <CardBody>
                            <Heading size="md">
                              <Link to={"/sdfas"}>Scrub Gift Set</Link>
                            </Heading>
                            <p>{first} 444,9</p>
                            <div className="footer">
                              <Link>Add to Cart</Link>
                              <div className="icon">
                                <i className="fa-regular fa-heart"></i>
                                <i className="fa-solid fa-arrow-right-arrow-left"></i>
                              </div>
                            </div>
                          </CardBody>
                        </Stack>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link className="blog" to={"/sdf"}>
            BLOG
          </Link>
        </div>
        <div className="logo">
          <Link to={"/"}>
            <h1>JOURNAL</h1>
          </Link>
        </div>
        <div className="right">
          <i className="fa-regular fa-user"></i>
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={() => setOpen(true)}
          ></i>
          <i className="fa-solid fa-basket-shopping"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;