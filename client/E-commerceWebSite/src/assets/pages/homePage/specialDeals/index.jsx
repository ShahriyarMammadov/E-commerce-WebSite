import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import './index.scss'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Loading from '../../../../components/loading';
import { Outlet } from 'react-router-dom'
import { specialDealsAction } from '../../../redux/action/specialDeals.action';

const SpecialDeals = () => {

    const GetData = useSelector((state) => state.cardReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(specialDealsAction())
    }, [])

    return (
        <div>
            <div className="specialDeals">
                {GetData.loading ? (
                    <Loading />
                ) : (
                    GetData?.specialDealsData?.map((data) => {
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
                    })
                )}
                <Outlet />
            </div>
        </div>
    )
}

export default SpecialDeals