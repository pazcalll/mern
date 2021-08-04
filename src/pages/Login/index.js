import React from 'react'
import './index.css' 
import { Input, Button } from '../../components'
// import { Button } from ''

const Login = () => {
    return (
        <div className="login">
            <div className="card">
                <div className="card-header">
                    <h3>Login</h3>
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

export default Login
