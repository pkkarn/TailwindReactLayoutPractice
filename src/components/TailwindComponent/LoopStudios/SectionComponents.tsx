import React, { useState } from 'react';
import LogoLoop from '../../../assets/loopstudios/logo.svg'
import HamBurger from '../../../assets/loopstudios/icon-hamburger.svg'
import HamClose from '../../../assets/loopstudios/icon-close.svg'
import InteractiveImage from '../../../assets/loopstudios/desktop/image-interactive.jpg'


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
                        return <div className="group transition-all duration-500 hover:opacity-50">
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

                {/* Title */}
                <div className='max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2
                md:p-10 md:m-32 md:mx-0 md:text-6xl'>
                    Programming is more of an art than anything else.
                    {/* Impressive experience that delivers */}
                </div>
            </div>
        </section>
    </>
}


export const FeatureSection: React.FC = () => {
    return <>
        <section id="loop_feature">
            <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0 md:flex-row">
                <img src={InteractiveImage} alt="" />
                <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
                    <h2 className='max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left'>
                        The leader in interactive VR
                    </h2>
                    <p className="max-w-md">Founded in 2011, Loopstudios has been producing world-class virtual
                        reality projects for some of the best companies around the globe. Our award-winning creations
                        have transformed businesses through digital experiences that bind to their brand</p>
                </div>
            </div>
        </section>
    </>
}

export const CreationSection: React.FC = () => {
    type Mode = 'desktop' | 'mobile';
    const [imageDataFirst] = useState([{
        text: 'curiosity',
        path: (mode: Mode) => `/src/assets/loopstudios/${mode}/image-curiosity.jpg`
    }, {
        text: 'Deep Earth',
        path: (mode: Mode) => `/src/assets/loopstudios/${mode}/image-deep-earth.jpg`
    }, {
        text: 'Fisheye',
        path: (mode: Mode) => `/src/assets/loopstudios/${mode}/image-fisheye.jpg`
    }, {
        text: 'Night Arcade',
        path: (mode: Mode) => `/src/assets/loopstudios/${mode}/image-night-arcade.jpg`
    }])
    const [imageDataSecond] = useState([{
        text: 'Soccer Team',
        path: (mode: Mode) => `/src/assets/loopstudios/${mode}/image-soccer-team.jpg`
    }, {
        text: 'Pocket Boreails',
        path: (mode: Mode) => `/src/assets/loopstudios/${mode}/image-pocket-borealis.jpg`
    }, {
        text: 'From Above',
        path: (mode: Mode) => `/src/assets/loopstudios/${mode}/image-from-above.jpg`
    }, {
        text: 'The Grid',
        path: (mode: Mode) => `/src/assets/loopstudios/${mode}/image-grid.jpg`
    }])

    const [showAll, setShowAll] = useState(false)
    return <>
        <section id="creations">
            <div className="duration-200 transition-all container mx-auto max-w-6xl my-32 px-6 tex-gray-900 md:px-0">
                <div className="flex justify-center md:justify-between mb-20">
                    <h2 className="font-sans text-4xl self-center uppercase">Our Creations</h2>
                    <button className="hidden md:block btn" onClick={() => { setShowAll(prevState => !prevState) }}>See All</button>
                </div>
                <div className="image-section">
                    {imageDataFirst.map((imageItem) => <div className="group relative overflow-hidden md:w-1/4">
                        <img className="hidden w-full duration-200 md:block group-hover:scale-110" src={imageItem.path('desktop')} alt="" />
                        <img className="md:hidden w-full duration-200 group-hover:scale-110" src={imageItem.path('mobile')} alt="" />
                        <div className="black-grey-gradient">

                        </div>
                        <h5 className="image-title">
                            {imageItem.text}
                        </h5>
                    </div>)
                    }
                </div>
                {
                    showAll &&
                    <div className="image-section">
                        {imageDataSecond.map((imageItem) => <div className="group relative overflow-hidden md:w-1/4">
                            <img className="hidden w-full duration-200 md:block group-hover:scale-110" src={imageItem.path('desktop')} alt="" />
                            <img className="md:hidden w-full duration-200 group-hover:scale-110" src={imageItem.path('mobile')} alt="" />
                            <div className="black-grey-gradient">

                            </div>
                            <h5 className="image-title">
                                {imageItem.text}
                            </h5>
                        </div>)
                        }
                    </div>
                }
                <button className="md:hidden w-full btn" onClick={() => { setShowAll(prevState => !prevState) }}>See All</button>


            </div>
        </section>
    </>
}


export const FooterSection: React.FC = () => {
    return (
        <>
            <footer className="bg-black px-6 py-0">
                <div className="md:flex md:justify-between px-10 py-16">
                    <div className="md:flex md:flex-col space-y-4 mb-10">
                        <div className='flex justify-center md:block md:mb-0 mb-10'>
                            <img src={LogoLoop} className="w-32" alt="" />
                        </div>

                        <nav className="md:space-x-6 md:space-y-0 space-y-5 flex flex-col md:flex-row items-center md:justify-center font-bold">
                            <div>
                                <a href="#" className="text-white inline-block hover:underline">About</a>
                            </div>

                            <div>
                                <a href="#" className="text-white hover:underline">Careers</a>
                            </div>
                            <div>
                                <a href="#" className="text-white hover:underline">Events</a>
                            </div>
                            <div>
                                <a href="#" className="text-white hover:underline">Products</a>
                            </div>
                            <div>
                                <a href="#" className="text-white hover:underline">Support</a>
                            </div>
                        </nav>
                    </div>

                    <div className='md:flex md:flex-col md:items-end'>
                        <div className="space-x-4 flex justify-center">
                            <a href="#" className="text-white hover:underline hover:scale-125 duration-200">
                                <img src="/src/assets/loopstudios/icon-facebook.svg" alt="" />
                            </a>
                            <a href="#" className="text-white hover:underline hover:scale-125 duration-200">
                                <img src="/src/assets/loopstudios/icon-twitter.svg" alt="" />
                            </a>
                            <a href="#" className="text-white hover:underline hover:scale-125 duration-200">
                                <img src="/src/assets/loopstudios/icon-pinterest.svg" alt="" />
                            </a>
                            <a href="#" className="text-white hover:underline hover:scale-125 duration-200">
                                <img src="/src/assets/loopstudios/icon-instagram.svg" alt="" />
                            </a>
                        </div>

                        <p className="text-white text-center mt-6">&copy; 2021 Loopstudios. All rights reserved.</p>
                    </div>

                </div>

            </footer>
        </>
    )
}