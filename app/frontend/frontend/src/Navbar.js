import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = (props) => {
    const buttons = props.pages.map((page, index) => {
        if("hidden" in page){
            return []
        }
        return(<li key={index}><NavLink exact activeClassName="active" to={page.url} target="_self">{page.text}</NavLink></li>)
    })

    return (
        <div id="navBar">
            <ul>
                {buttons}
            </ul>
        </div>
    )
}

export default Navbar
