import React, { Component } from 'react'
import {MenuItem} from "./MenuItem"
import { Button } from "../Button"
import './Navbar.css'

class Navbar extends Component {
    state = {click: false}
    
    handleClick = () =>{
        this.setState({click: ! this.state.click})
    }


    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItem.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href= {item.url}> 
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Sign UP</Button>
            </nav>
        )
    }
}

export default Navbar