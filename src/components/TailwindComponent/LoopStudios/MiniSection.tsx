import React, { useState } from 'react';
import LogoLoop from '../../../assets/loopstudios/logo.svg'
import HamBurger from '../../../assets/loopstudios/icon-hamburger.svg'
import HamClose from '../../../assets/loopstudios/icon-close.svg'


const LoopNavbar: React.FC<{
    isMenuToggle: boolean,
    setIsMenuToggle: React.Dispatch<React.SetStateAction<boolean>>
}> = ({
    isMenuToggle,
    setIsMenuToggle
}) => {
        const navItems = ['About', 'Careers', 'Events', 'Products', 'Supports'];
        return <>
            <nav className="flex items-center justify-between font-bold text-white">
                <img src={LogoLoop} alt="" />
                {/* LogSearch: Here md: means this will only be applicable on more than it, here is initially set to hidden, but
            moment it goes above (md:)  whatever it has been defined it should set display to flex */}
                <div className="hidden h-10 font-alata md:flex md:space-x-8"> {/** Typicall this one would be hidden but given the condiiton whenever it will go above md: then it will become flex */}
                    {navItems.map(navItem => {
                        return <div className="group">
                            <a href="#">{navItem}</a>
                            <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                        </div>
                    })}
                </div>
                {/* Todo hamburger button */}
                <div className='md:hidden hover:cursor-pointer' onClick={() => { setIsMenuToggle(prevState => !prevState) }}>
                    <img src={isMenuToggle ? HamClose : HamBurger} alt="" />
                </div>
            </nav>
            {
                isMenuToggle &&
                <nav className='md:hidden font-bold text-white p-3 h-72 flex flex-col space-y-4 justify-center items-center'>
                    {navItems.map(navItem => {
                        return <div className="group">
                            <a href="#">{navItem}</a>
                            <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
                        </div>
                    })}
                </nav>
            }
        </>
    }

export const HeroSection: React.FC = () => {
    const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false)
    return <>
        <section id="hero">
            <div className="container max-w-6xl mx-auto px-6 py-12">
                <LoopNavbar isMenuToggle={isMenuToggle} setIsMenuToggle={setIsMenuToggle} />
            </div>
        </section>
    </>
}