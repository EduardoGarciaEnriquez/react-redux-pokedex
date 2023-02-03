import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';

import { Input } from "antd"

import { filterPokemons } from '../../store/slices/dataSlice';
import './Searcher.scss'

const { Search } = Input;

const Searcher = () => {
    const [value, setValue] = useState()

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(filterPokemons(value))
    }, [value, dispatch])
    

    const hanldeOnChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <Search allowClear onChange={hanldeOnChange} placeholder="Search..." className="searcher-container" value={value}/>
    )
}

export default Searcher