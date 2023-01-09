import React from 'react'
import './index.scss'
import { Carousel } from 'antd';
import { Link } from 'react-router-dom'

const HomePage = () => {
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
                    
                </div>
            </section>
        </>
    )
}

export default HomePage