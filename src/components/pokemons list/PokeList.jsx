import React from 'react'

import { Row, Col } from 'antd'

import PokeCard from '../pokemon card/PokeCard'
import './PokeList.scss'

const PokeList = ({ pokemons, filteredPokemons }) => {

    return (
        <Row gutter={[0, 24]} justify='space-between' align='middle' className='pokelist-container'>
            {filteredPokemons.length > 0 ?
                filteredPokemons.map((pokemon) => (
                    <Col span={5} key={pokemon.data.name} >
                        <PokeCard
                            name={pokemon.data.name}
                            img={pokemon.data.sprites.front_default}
                            abilities={pokemon.data.abilities}
                            types={pokemon.data.types}
                            id={pokemon.data.id}
                            favorite={pokemon.data.favorite}
                        />
                    </Col>
                ))
                :
                pokemons.map((pokemon) => (
                    <Col span={5} key={pokemon.data.name} >
                        <PokeCard
                            name={pokemon.data.name}
                            img={pokemon.data.sprites.front_default}
                            abilities={pokemon.data.abilities}
                            types={pokemon.data.types}
                            id={pokemon.data.id}
                            favorite={pokemon.data.favorite}
                        />
                    </Col>
                ))
            }
        </Row>
    )
}

PokeList.defaultProps = {
    pokemons: Array(10).fill(''),
}

export default PokeList