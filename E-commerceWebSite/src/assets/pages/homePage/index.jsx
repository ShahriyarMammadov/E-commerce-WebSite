import React, { useEffect, useState } from 'react'
import './index.scss'
import { Carousel, Card } from 'antd';
import { Link, NavLink } from 'react-router-dom'
import { FaAngleUp } from 'react-icons/fa';
import { Outlet } from "react-router-dom"

const HomePage = () => {
    const [topBtn, setTopBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setTopBtn(true);
            } else {
                setTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const { Meta } = Card;

    return (
        <>
            <section id='section1'>
                <div id='carousel'>
                    <Carousel
                        autoplay
                        dotPosition='left'
                        effect='fade'
                    >
                        <div className='imagesCarousel1'>
                            <h1>Organic Beauty</h1>
                            <button><Link to={'/asdas'}>SEE COLLECTION</Link> <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                        <div className='imagesCarousel2'>
                            <h1>PURE & NATURAL</h1>
                            <button><Link to={'/asdas'}>SEE COLLECTION</Link> <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                        <div className='imagesCarousel3'>
                            <h1>NATURAL PRODUCTS</h1>
                            <button><Link to={'/asdas'}>SHOP NOW</Link> <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </Carousel>
                </div>
            </section>

            <section id='section2'>
                <div className="header">
                    <NavLink to={'/'}>Featured</NavLink>
                    <NavLink to={'/newArrivals'}>New Arrivals</NavLink>
                    <NavLink to={'/bestSellers'}>Bestsellers</NavLink>
                    <NavLink to={'/specialDeals'}>Special Deals</NavLink>
                    <NavLink to={'/sdf'}>View All</NavLink>
                </div>

                <div className="cardsSec2">
                    <Outlet />
                </div>

            </section>

            <section id='section3'>
                <div className="shipping">
                    <i className="fa-solid fa-truck-fast"></i>
                    <h3>Free Shipping</h3>
                    <p>Free delivery over $100</p>
                </div>
                <div className="return">
                    <i className="fa-solid fa-rotate-left"></i>
                    <h3>Free Returns</h3>
                    <p>Hassle free returns</p>
                </div>
                <div className="shopping">
                    <i className="fa-solid fa-lock"></i>
                    <h3>Secure Shopping Shipping</h3>
                    <p>Best security features</p>
                </div>
                <div className="blocks">
                    <i className="fa-solid fa-square"></i>
                    <h3>Unlimited Blocks</h3>
                    <p>Any content, any page</p>
                </div>
            </section>


            {
                topBtn && (
                    <div className="top-to-btm">
                        <FaAngleUp className="icon-position icon-style"
                            onClick={goToTop} />
                    </div>
                )
            }
        </>
    )
}

export default HomePage