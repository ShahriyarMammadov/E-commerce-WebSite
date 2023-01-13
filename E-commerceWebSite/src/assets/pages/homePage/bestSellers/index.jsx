import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React, { useEffect } from 'react'
import './index.scss'
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from 'react-router-dom'
import { bestSellersAction } from '../../../redux/action/bestSellers.action';

const BestSellers = () => {

    const GetData = useSelector((state) => state.cardReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(bestSellersAction())
    }, [])

    return (
        <div>
            <div className="bestSellers">
                {GetData?.bestSellersData?.map((data) => {
                    return (
                        <Card
                            loading={GetData.loading}
                            key={data.id}
                            hoverable
                            style={{
                                width: 300,
                                textAlign: 'center',
                            }}
                            cover={<img alt="example" src={data.image.a} />}
                        >
                            <a href="#">{data.productBrand}</a>
                            <Meta title={data.ProductName} description={data.Price} />
                        </Card>
                    )
                })}
                <Outlet />
            </div>
        </div>
    )
}

export default BestSellers