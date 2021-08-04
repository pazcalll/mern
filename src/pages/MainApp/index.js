import React from 'react'
import { Navbar } from '../../components'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import Home from '../Home'
import Add from '../Add'
import { Home, Login, Register } from '../../pages'

const MainApp = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/add'>
                    <Add/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
            <p>Footer</p>
        </Router>
    )
}

export default MainApp
