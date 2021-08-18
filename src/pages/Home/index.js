import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Button } from '../../components'
import { updateGoods } from '../../config/redux/action/homeActions'
import './index.css'

const Home = () => {
    let i = 0
    let j = 0
    const [data, setData] = useState([]);
    const [counter, setCounter] = useState(1);
    // const stateGlobal = useSelector(state => state)
    let {dataGoods, name, page} = useSelector(state => state)
    const dispatch = useDispatch()
    
    // console.log(stateGlobal)
    useEffect(() => {
        dispatch(updateGoods(counter))
    }, [counter, dispatch]) 

    const next = () => {
        if (counter + 1 <= page.totalPage) {
            setCounter(counter + 1)
        }
    }
    const prev = () => {
        if (counter != 1) {
            setCounter(counter - 1)
        }
    }
    return (
        <div className="table-center">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Channel</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // data.map(data => {
                        dataGoods.map(data => {
                            i = i + 1
                            return(
                                <tr key={data._id}>
                                    <td>{5 * (counter - 1) + i}</td>
                                    <td>{data.name}</td>
                                    <td>{data.goodsToChannel}</td>
                                    <td>{data.goodsDate}</td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
            <div style={{display:'flex'}}>
                <Button title='prev' onClick={prev}/>
                <span style={{marginLeft:'10px', marginRight:'10px'}}>{page.currentPage} / {page.totalPage}</span>
                <Button title='next' onClick={next}/>
            </div>
        </div>
    )
}

export default Home
