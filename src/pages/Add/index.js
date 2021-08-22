import React, { useEffect, useState } from 'react'
import './index.css' 
import { Input, Button } from '../../components'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItemPost, setForm } from '../../config/redux/action'

const Add = (props) => {
    const {form} = useSelector(state => state.addItemReducer)
    const {title, body} = form
    const dispatch = useDispatch()
    const [isUpdate, setIsUpdate] = useState(false)
    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')

    useEffect(() => {
        if(props.match.params.id){
            const id = props.match.params.id;
            setIsUpdate(true);
            axios.get(`http://localhost:4000/goods/${id}`)
                .then(res => {
                    const data = res.data
                    console.log(data)
                    dispatch(setForm('title', data.name))
                    dispatch(setForm('body', data.goodsToChannel))
                })
                .catch(err => console.log(err))
        }
        // console.log(props)
    }, [])

    const onSubmit = () => {
        addItemPost(form)
    }

    return (
        <div className="add">
            <div className="card">
                <div className="card-header">
                    <h3>{isUpdate ? 'Edit Data' : 'Add'}</h3>
                </div>
                <div className="card-body">
                    <form>
                        <Input label="Item Name" value={title} placeholder="Item Name" onChange={(e)=> dispatch(setForm('title', e.target.value))}/>
                        <Input label="Channel" value={body} placeholder="Channel" onChange={(e)=> dispatch(setForm('body', e.target.value))}/>
                        <br/>
                        <Button title={isUpdate ? 'Update' : 'Enter'} onClick={onSubmit} type="submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Add) 
