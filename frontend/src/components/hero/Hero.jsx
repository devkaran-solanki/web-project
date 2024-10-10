import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import './Hero.css'

const Hero = () => {

    useGSAP(() => {
        gsap
    })

    return (
        <section id='hero'>
            <div id="heroContent">
                <h1>Unleash Your <span>Strength</span></h1>
                <div id="description">
                    <h2>implement <span id='po'>Progressive Overload</span> effectively.</h2>
                    {/* <h2>Elevate Your Workouts.</h2> */}
                    <button>Start Free Trial <img src="./assets/images/arrow.svg" alt=""/></button>
                </div>
            </div>
        </section>
    )
}

export default Hero