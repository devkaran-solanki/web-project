import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <header>
            <nav>
                <a id='navAnchor' href=""><h1 id='navH1'>voyage</h1></a>
                <div id="routes">
                    <ul>
                        <li><a id='navAnchor' href="#">Home</a></li>
                        <li><a id='navAnchor' href="#">About</a></li>
                        <li><a id='navAnchor' href="#">Contact Us</a></li>
                        <li><a id='navAnchor' href="#"><button>Sign In</button></a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar