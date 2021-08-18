import React, { useState } from 'react'
import './index.css' 
import { Input, Button } from '../../components'
import axios from 'axios'

const Add = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const onSubmit = () => {
        console.log('title: ', title)
        console.log('body: ', body)

        // const data = new FormData();
        // data.append('name', title)
        // data.append('goodsToChannel', body)

        const data = {
            name: title,
            goodsToChannel: body
        }

        console.log(data)
        axios.post('http://localhost:4000/goods', data)
        .then(res=>{
            console.log("insert data: ", res)
        })
        .catch(err =>{
            console.log("error: ", err)
        })
    }

    return (
        <div className="add">
            <div className="card">
                <div className="card-header">
                    <h3>Add</h3>
                </div>
                <div className="card-body">
                    <form>
                        <Input label="Item Name" placeholder="Item Name" onChange={(e)=>setTitle(e.target.value)}/>
                        <Input label="Channel" placeholder="Channel" onChange={(e)=>setBody(e.target.value)}/>
                        <br/>
                        <Button title="Enter" onClick={onSubmit} type="submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add
