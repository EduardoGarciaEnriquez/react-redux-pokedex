import React from 'react'

import { Button } from 'antd'
import { StarOutlined, StarFilled } from '@ant-design/icons'

const StarButton = ({ isFavorite, onClick }) => {
    const icon = isFavorite ? <StarFilled style={{color: 'blueviolet'}} /> : <StarOutlined />
    return (
        <Button icon={icon} onClick={onClick}></Button>
    )
}

export default StarButton