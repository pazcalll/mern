import React from 'react'
import './index.css' 
import { Input, Button } from '../../components'
import { Link } from 'react-router-dom'
// import { Button } from ''
import { useHistory } from 'react-router-dom'

const Login = () => {
    const histoy = useHistory();
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
                        <Button title="Enter" type="submit" onClick={()=>histoy.push('/')}/>
                        <br/>
                        <Link className="card-text text-muted" to='/register'>Register</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
