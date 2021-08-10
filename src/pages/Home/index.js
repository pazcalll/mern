import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import './index.css'

const Home = () => {
    let i = 0
    const [data, setData] = useState([]);

    const stateGlobal = useSelector(state => state)
    console.log(stateGlobal)
    useEffect(() => {
        axios.get('http://localhost:4000/goods')
        .then(result => {
            const resultAPI = result.data
            console.log(resultAPI)

            setData(resultAPI)
        })
        .catch(err => console.log(err))
    }, []) 
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
                        data.map(data => {
                            i = i+1
                            return(
                                <tr key={data._id}>
                                    <th scope="row">{i}</th>
                                    <td>{data.name}</td>
                                    <td>{data.goodsToChannel}</td>
                                    <td>{data.goodsDate}</td>
                                </tr>
                            )
                        })
                    }
                    {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr> */}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Home
