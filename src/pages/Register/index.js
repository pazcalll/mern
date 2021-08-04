import React from 'react'
import './index.css'
import { Input, Button } from '../../components'

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="card-header">
                    <h3>Registration</h3>
                </div>
                <div className="card-body">
                    <form>
                        <Input label="Username" placeholder="Username"/>
                        <Input label="Password" placeholder="Password"/>
                        <br/>
                        <Button title="Enter" type="submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
