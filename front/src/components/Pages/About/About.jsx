import React, { useState, useEffect } from "react"
import image from "./About.png"
import { Link } from "react-router-dom"


const About = (props) => <div id='About'>
    <div id="backgroundImgAbout" />

    <Link to="/" id='about-nav-home'>⇚</Link>


    <div id='textContainer'>

        <a href='https://codepen.io/notyourphobia/full/KjXEeV' id='old-nav'>First Try</a>


        <div className="text1">
            Hi! Checkout the difference between my first website and this one.Pretty kool huh? (:
    </div>
        <div className="text2">
            This is my Wild Circus page that I've redone after 5 monthe at Wild Code School.
            My progress is huge, I learnt how to make more internetzs and its just awesome to think how far we've came.
    </div>
        <div className="text2">
            I need to fill this page with stuff ASAP to make it look more decent.
            I have no idea so Ill just type random text that goes through my head.
            I think it almost looks good.
            Almost.
            Now it does.
            Nice. xD

        </div>
    </div>
</div >

export default About