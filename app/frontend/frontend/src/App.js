import React, {Component} from 'react'
import Navbar from './Navbar'
import Test from './Test'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Map from './Map'
import Login from './Login'
import Results from './Results'
import Settings from './Settings'


const SwitchFactory = (props) => {
    const routes = props.pages.map((route, index) => {
        return (
            <Route key={index} exact path={route.url}>
                {route.page}
            </Route>
        )
    })

    return (
        <Switch>
            {routes}
        </Switch>
    )
}

class App extends Component {
  render() {
    const pages = [
        {
            url: "/test",
            text: "Test",
            page: <Test />
        },
        {
            url: "/",
            hidden: true,
            page: <Login />

        },
        {
            url: "/results",
            text: "Results",
            page: 
                <Results />
        },
        {
            url: "/map",
            text: "Map",
            page: <Map />
        },
        {
            url: "/settings",
            text: "Settings",
            page: <Settings />,
        },
    ]
    return (
                <Router>
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
                    <Navbar pages={pages}/>

                    <SwitchFactory pages={pages} />

                </Router>
    )
  }
}

export default App