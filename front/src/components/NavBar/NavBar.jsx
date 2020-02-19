import React, { useState, useEffect } from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Link } from "react-router-dom"

const NavBar = (props) =>
    <div id="NavBar">
        <AnchorLink href='#Main' id='nav-main'>Home</AnchorLink>
        <AnchorLink href='#Laugh' id='nav-laugh'>Laugh</AnchorLink>
        <AnchorLink href='#Dream' id='nav-dream'>Dream</AnchorLink>
        <AnchorLink href='#MarvelAt' id='nav-marvelAt'>MarvelAt</AnchorLink>
        <Link to="/about" id='nav-about' target='_blank'>About</Link>
        <AnchorLink href='#Book' id='nav-book'>Book</AnchorLink>
    </div>

export default NavBar