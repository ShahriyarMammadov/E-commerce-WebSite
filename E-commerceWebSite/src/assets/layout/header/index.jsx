import React, { useEffect, useState } from 'react'
import './index.scss'
import { Button, CardFooter, Heading, Select, Stack } from '@chakra-ui/react'
import { NavLink, Link } from 'react-router-dom'
import { Card, CardBody } from '@chakra-ui/react'
import axios from 'axios'

const Header = () => {

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
                    <Select placeholder='€ EURO'>
                        <option value='pound'>£ POUND STERLING</option>
                        <option value='dollar'>$ US DOLLAR</option>
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
                                <div className="top">
                                    <Card
                                        direction={{ base: 'column', sm: 'row' }}
                                        overflow='hidden'
                                        variant='outline'
                                    >
                                        <Stack>
                                            <CardBody>
                                                <Heading size='md'>FASHION</Heading>
                                            </CardBody>
                                        </Stack>
                                    </Card>
                                    <Card
                                        direction={{ base: 'column', sm: 'row' }}
                                        overflow='hidden'
                                        variant='outline'
                                    >
                                        <Stack>
                                            <CardBody>
                                                <Heading size='md'>ELECTRONICS</Heading>
                                            </CardBody>
                                        </Stack>
                                    </Card>
                                    <Card
                                        direction={{ base: 'column', sm: 'row' }}
                                        overflow='hidden'
                                        variant='outline'
                                    >
                                        <Stack>
                                            <CardBody>
                                                <Heading size='md'>BAGS</Heading>
                                            </CardBody>
                                        </Stack>
                                    </Card>
                                </div>
                                <div className="bottom">
                                    <Card
                                        direction={{ base: 'column', sm: 'row' }}
                                        overflow='hidden'
                                        variant='outline'
                                    >
                                        <Stack>
                                            <CardBody>
                                                <Heading size='md'>HEALTH & BEAUTY</Heading>
                                            </CardBody>
                                        </Stack>
                                    </Card>
                                    <Card
                                        direction={{ base: 'column', sm: 'row' }}
                                        overflow='hidden'
                                        variant='outline'
                                    >
                                        <Stack>
                                            <CardBody>
                                                <Heading size='md'>FOOTWEAR</Heading>
                                            </CardBody>
                                        </Stack>
                                    </Card>
                                    <Card
                                        direction={{ base: 'column', sm: 'row' }}
                                        overflow='hidden'
                                        variant='outline'
                                    >
                                        <Stack>
                                            <CardBody>
                                                <Heading size='md'>FOOD</Heading>
                                            </CardBody>
                                        </Stack>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link className='blog'>BLOG</Link>
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
        </header>
    )
}

export default Header