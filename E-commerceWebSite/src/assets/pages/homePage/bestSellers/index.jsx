import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import { Outlet } from 'react-router-dom'

const BestSellers = () => {
    return (
        <div>
            bestSellers
            <div className="cardsSec2">
                <Card
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Outlet />
            </div>
        </div>
    )
}

export default BestSellers