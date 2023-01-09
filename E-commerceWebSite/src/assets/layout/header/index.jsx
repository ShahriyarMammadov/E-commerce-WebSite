import React, { useEffect, useState } from 'react'
import './index.scss'
import { color, Heading, Select, Stack } from '@chakra-ui/react'
import { NavLink, Link } from 'react-router-dom'
import { Card, CardBody } from '@chakra-ui/react'
import fashion from './images/catalog_fashion.jpg'
import electronic from './images/catalog_electronics.jpg'
import bags from './images/catalog_bags.jpg'
import health from './images/catalog_health.jpg'
import footWear from './images/catalog_footwear.jpg'
import food from './images/catalog_food.jpg'

const Header = () => {
    const [first, setFirst] = useState('')
    const [active, setActive] = useState(false)

    const handleChange = (e) => {
        localStorage.setItem('exchange', e.target.value)
    }


    useEffect(() => {
        setFirst(localStorage.getItem('exchange'))
    }, [handleChange])

    const wishListHeart = () => {
        setActive(!active)
    }

    return (
        <header>
            <div id="headerTop">
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
                        focusBorderColor='none'
                        onChange={(e) => {
                            handleChange(e)
                        }}>
                        <option value='€'>€ EURO</option>
                        <option value='£'>£ POUND STERLING</option>
                        <option value='$'>$ US DOLLAR</option>
                    </Select>
                </div>
                <div className="nav">
                    <NavLink to={'/contactPage'}>CONTACT</NavLink>
                    <div className="dropdown">
                        <button className="dropbtn">FAQ <i className="fa-solid fa-angle-down"></i></button>
                        <div className="dropdown-content">
                            <NavLink to={'/comparePage'}>CREATE</NavLink>
                            <NavLink to={'/comparePage'}>UNLIMITED</NavLink>
                            <NavLink to={'/comparePage'}>MENUS</NavLink>
                        </div>
                    </div>
                    <NavLink to={'/wishList'}>WISHLIST</NavLink>
                    <NavLink to={'/comparePage'}>COMPARE</NavLink>
                </div>
            </div>
            <hr />
            <div id="headerBottom">
                <div className="left">
                    <div className="dropdown">
                        <button className="dropbtn"><i className="fa-solid fa-bars"></i> SHOP <i className="fa-solid fa-angle-down"></i></button>
                        <div className="dropdown-content">
                            <NavLink to={'/comparePage'} className='category'>SHOP BY CATEGORY <i className="fa-solid fa-angle-right"></i></NavLink>
                            <hr />
                            <NavLink to={'/comparePage'}>SHOP BY BRAND <i className="fa-solid fa-angle-right"></i></NavLink>
                            <hr />
                            <NavLink to={'/comparePage'}>SPECIAL DEALS <button className='sale'>SALE</button> <i className="fa-solid fa-angle-right"></i></NavLink>
                            <hr />
                            <NavLink to={'/comparePage'}>BEST SELLERS <i className="fa-solid fa-angle-right"></i></NavLink>
                            <hr />
                            <NavLink to={'/comparePage'}>CUSTOM LINKS <i className="fa-solid fa-angle-right"></i></NavLink>
                            <hr />
                            <NavLink to={'/comparePage'}>SEE ALL PRODUCTS <button className='new'>NEW</button></NavLink>
                            <hr />
                        </div>
                    </div>
                    <div className="catalog">
                        <div className="dropdown">
                            <button className="dropbtn"> CATALOG <i className="fa-solid fa-angle-down"></i></button>
                            <div className="dropdown-content">
                                <div className="catalog2">
                                    <div className="catalog-left">
                                        <div className="top">
                                            <Link to={'/gsd'}>
                                                <Card
                                                    direction={{ base: 'column', sm: 'row' }}
                                                    overflow='hidden'
                                                    variant='outline'
                                                >
                                                    <Stack>
                                                        <CardBody>
                                                            <Heading size='md'><Link to={'/sdfas'}>FASHION</Link></Heading>
                                                        </CardBody>
                                                        <div className="images">
                                                            <img src={fashion} alt="" />
                                                            <nav>
                                                                <Link>Accessories</Link>
                                                                <Link>Dresses</Link>
                                                                <Link>Pants</Link>
                                                                <Link>T-Shirt</Link>
                                                                <Link className='all'>See all products</Link>
                                                            </nav>
                                                        </div>
                                                    </Stack>
                                                </Card>
                                            </Link>
                                            <Link to={'/fjgn'}>
                                                <Card
                                                    direction={{ base: 'column', sm: 'row' }}
                                                    overflow='hidden'
                                                    variant='outline'
                                                >
                                                    <Stack>
                                                        <CardBody>
                                                            <Heading size='md'><Link to={'/sdfas'}>ELECTRONICS</Link></Heading>
                                                        </CardBody>
                                                        <div className="images">
                                                            <img src={electronic} alt="" />
                                                            <nav>
                                                                <Link>Desktops</Link>
                                                                <Link>Laptops & Notebooks</Link>
                                                                <Link>Components</Link>
                                                                <Link>Phines & PDAs</Link>
                                                                <Link className='all'>See all products</Link>
                                                            </nav>
                                                        </div>
                                                    </Stack>
                                                </Card>
                                            </Link>
                                            <Link to={'/adsaf'}>
                                                <Card
                                                    direction={{ base: 'column', sm: 'row' }}
                                                    overflow='hidden'
                                                    variant='outline'
                                                >
                                                    <Stack>
                                                        <CardBody>
                                                            <Heading size='md'><Link to={'/sdfas'}>BAGS</Link></Heading>
                                                        </CardBody>
                                                        <div className="images">
                                                            <img src={bags} alt="" />
                                                            <nav>
                                                                <Link>Backpacks</Link>
                                                                <Link>Clutches</Link>
                                                                <Link>Formal</Link>
                                                                <Link>Purses</Link>
                                                                <Link className='all'>See all products</Link>
                                                            </nav>
                                                        </div>
                                                    </Stack>
                                                </Card>
                                            </Link>
                                        </div>
                                        <div className="bottom">
                                            <Link to={'/freg'}>
                                                <Card
                                                    direction={{ base: 'column', sm: 'row' }}
                                                    overflow='hidden'
                                                    variant='outline'
                                                >
                                                    <Stack>
                                                        <CardBody>
                                                            <Heading size='md'><Link to={'/sdfas'}>HEALTH & BEAUTY</Link></Heading>
                                                        </CardBody>
                                                        <div className="images">
                                                            <img src={health} alt="" />
                                                            <nav>
                                                                <Link>Accessories</Link>
                                                                <Link>Body</Link>
                                                                <Link>Lipstick</Link>
                                                                <Link>Makeup</Link>
                                                                <Link className='all'>See all products</Link>
                                                            </nav>
                                                        </div>
                                                    </Stack>
                                                </Card>
                                            </Link>
                                            <Link to={'/asd'}>
                                                <Card
                                                    direction={{ base: 'column', sm: 'row' }}
                                                    overflow='hidden'
                                                    variant='outline'
                                                >
                                                    <Stack>
                                                        <CardBody>
                                                            <Heading size='md'><Link to={'/sdfas'}>FOOTWEAR</Link></Heading>
                                                        </CardBody>
                                                        <div className="images">
                                                            <img src={footWear} alt="" />
                                                            <nav>
                                                                <Link>Flats</Link>
                                                                <Link>Flip Flops</Link>
                                                                <Link>Heels</Link>
                                                                <Link>Running</Link>
                                                                <Link className='all'>See all products</Link>
                                                            </nav>
                                                        </div>
                                                    </Stack>
                                                </Card>
                                            </Link>
                                            <Link to={'/asddf'}>
                                                <Card
                                                    direction={{ base: 'column', sm: 'row' }}
                                                    overflow='hidden'
                                                    variant='outline'
                                                >
                                                    <Stack>
                                                        <CardBody>
                                                            <Heading size='md'><Link to={'/assf'}>FOOD</Link></Heading>
                                                        </CardBody>
                                                        <div className="images">
                                                            <img src={food} alt="" />
                                                            <nav>
                                                                <Link>Breakfast</Link>
                                                                <Link>Dessert</Link>
                                                                <Link>Grill</Link>
                                                                <Link>Pasta</Link>
                                                                <Link className='all'>See all products</Link>
                                                            </nav>
                                                        </div>
                                                    </Stack>
                                                </Card>
                                            </Link>
                                        </div>

                                    </div>

                                    <div className="catalog-right">
                                        <div className="link">
                                            <NavLink>TOP SELLERS</NavLink>
                                            <NavLink>SPECIAL DEALS</NavLink>
                                        </div>
                                        <div className="img">
                                            <Link to={'/gsd'}>
                                                <Card
                                                    direction={{ base: 'column', sm: 'row' }}
                                                    overflow='hidden'
                                                    variant='outline'
                                                >
                                                    <Stack>
                                                        <div className="img1"></div>
                                                        <CardBody>
                                                            <Heading size='md'><Link to={'/sdfas'}>Scrub Gift Set</Link></Heading>
                                                            <p>{first} 444,9</p>
                                                            <div className="footer">
                                                                <Link>Add to Cart</Link>
                                                                <div className="icon">
                                                                    <i className="fa-regular fa-heart"
                                                                        style={active ? { color: 'red' } : { color: 'black' }}
                                                                        onClick={() => {
                                                                            wishListHeart()
                                                                        }}></i>
                                                                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                                                </div>
                                                            </div>
                                                        </CardBody>
                                                    </Stack>
                                                </Card>
                                            </Link>
                                            <Link to={'/gsd'}>
                                                <Card
                                                    direction={{ base: 'column', sm: 'row' }}
                                                    overflow='hidden'
                                                    variant='outline'
                                                >
                                                    <Stack>
                                                        <div className="img2"></div>
                                                        <CardBody>
                                                            <Heading size='md'><Link to={'/sdfas'}>Scrub Gift Set</Link></Heading>
                                                            <p>{first} 444,9</p>
                                                            <div className="footer">
                                                                <Link>Add to Cart</Link>
                                                                <div className="icon">
                                                                    <i className="fa-regular fa-heart"
                                                                        style={active ? { color: 'red' } : { color: 'black' }}
                                                                        onClick={() => {
                                                                            wishListHeart()
                                                                        }}></i>
                                                                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                                                </div>
                                                            </div>
                                                        </CardBody>
                                                    </Stack>
                                                </Card>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link className='blog' to={'/sdf'}>BLOG</Link>
                </div>
                <div className="logo">
                    <Link to={'/'}><h1>JOURNAL</h1></Link>
                </div>
                <div className="right">
                    <i className="fa-regular fa-user"></i>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-basket-shopping"></i>
                </div>
            </div>
        </header >
    )
}

export default Header