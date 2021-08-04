import React from 'react'
import './index.css' 
import { Input, Button } from '../../components'

const Add = () => {
    return (
        <div className="add">
            <div className="card">
                <div className="card-header">
                    <h3>Add</h3>
                </div>
                <div className="card-body">
                    <form>
                        <Input label="Item Name" placeholder="Item Name"/>
                        <Input label="Amount" placeholder="Number" type="numeric"/>
                        <br/>
                        <Button title="Enter" type="submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add
