import React from 'react';
import LogoLoop from '../../../assets/loopstudios/logo.svg'


const LoopNavbar: React.FC = () => {
    return <>
        <nav className="flex items-center justify-between font-bold text-white">
            <img src={LogoLoop} alt="" />
            <ul className="flex">
                <li className="mr-3">Home</li>
                <li className="mr-3">About Us</li>
                <li className="mr-2">Contact Us</li>
            </ul>
        </nav>
    </>
}

export const HeroSection: React.FC = () => {
    return <>
        <section id="hero">
            <div className="container max-w-6xl mx-auto px-6 py-12">
                <LoopNavbar/>
            </div>
        </section>
    </>
}