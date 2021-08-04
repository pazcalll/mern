import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { Home, Login } from '../../../pages'
import Add from '../../../pages/Add'
import { useHistory } from 'react-router-dom'
import { Button } from '../..'

const Navbar = () => {
    const history = useHistory();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <div className="d-flex navbar-nav">
                            <Button onClick={() => history.push('/add')} title="Add"/>
                            <Button onClick={() => history.push('/')} title="Home"/>
                            <Button onClick={() => window.location='/login'} title="Logout"/>
                            {/* <Router>
                                <Switch>
                                    <Route path="/login">
                                        <Login/>
                                    </Route>
                                </Switch>
                            </Router> */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
