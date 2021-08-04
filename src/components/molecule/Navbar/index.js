import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Home } from '../../../pages'
import Add from '../../../pages/Add'

const Navbar = () => {
    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <div className="d-flex navbar-nav">
                            <a className="nav-link" href="#">Home</a>
                            <a className="nav-link" href="#">Add</a>
                            <Router>
                                <Switch>
                                    <Route exact path="/">
                                        <Home/>
                                    </Route>
                                    <Route path="/add">
                                        <Add/>
                                    </Route>
                                </Switch>
                            </Router>
                        </div>
                    </div>
                </div>
            </nav> */}
        </div>
    )
}

export default Navbar
