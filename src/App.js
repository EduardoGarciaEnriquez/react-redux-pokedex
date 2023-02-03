import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Row, Col, Spin } from 'antd';

import Searcher from './components/searcher/Searcher';
import PokeList from './components/pokemons list/PokeList';
import { fetchPokeDetails } from './store/slices/dataSlice';

function App() {
  const pokemons = useSelector(state => state.data.pokemons, shallowEqual)
  const filteredPokemons = useSelector(state => state.data.filteredPokemons, shallowEqual)
  const loading = useSelector(state => state.ui.loading)
  const logo = 'https://static.platzi.com/media/tmp/class-files/github/curso-redux/curso-redux-01-pokeapi/src/statics/logo.svg'
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokeDetails())
  }, [dispatch])

  return (
    <Spin spinning={loading} size='large'>
      <Row justify='space-around' align='middle'>
        <Col span={4}>
          <img style={{ margin: '20px 0' }} src={logo} alt="pokedux-logo" />
        </Col>
      </Row>
      <hr />
      <Row justify='space-around' align='middle'>
        <Col span={12}>
          <Searcher />
        </Col>
        <Col span={22}>
          <PokeList pokemons={pokemons} filteredPokemons={filteredPokemons} />
        </Col>
      </Row>
    </Spin>
  );
}

export default App;