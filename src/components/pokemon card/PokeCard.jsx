import React from 'react'
import { useDispatch } from 'react-redux';

import { Card } from 'antd'

import StarButton from './StarButton';
import { setFavorite } from '../../store/slices/dataSlice';

const { Meta } = Card;

const PokeCard = ({ name, img, abilities, types, id, favorite }) => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(setFavorite({id}))
    }

    return (
        <Card
            hoverable
            title={name}
            cover={<img alt="poke-img" src={img} />}
            extra={<StarButton onClick={handleOnClick} isFavorite={favorite} />}
        >
            <Meta description={
                <>
                    <p>types: {types.map(type => type.type.name).join(', ')}</p>
                    <p>abilities: {abilities.map(ability => ability.ability.name).join(', ')}</p>
                </>
            } />
        </Card>
    )
}

export default PokeCard