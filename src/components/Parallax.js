import React from 'react'
import './Parallax.css'
import Mammals from '../images/mammal.png';
import Birds from '../images/bird.png';
import Fish from '../images/fish.png';
import Reptiles from '../images/reptile.png';
import './ParallaxEffect.js'
import {Parallax} from 'react-parallax'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

const image1 = "https://cdn.wallpapersafari.com/38/91/re8VcT.jpg";
const eagle = "https://wallpaperaccess.com/full/191517.jpg"
const turtle = "https://images.rove.me/w_1920,q_85/vujwa6wmyc6ylo6zohyo/tanzania-sea-turtle-hatchlings.jpg"
const cheetah = "https://i.natgeofe.com/n/c007d855-3b15-4f0e-bb6e-dab2201fb230/01-animal-speed-cheetah.jpg?w=636&h=424"
const panda = "https://www.wideopenpets.com/wp-content/uploads/2020/11/30-Bear-Puns-770x405.png"

const inlineStyle = {
    background: 'linear-gradient(0deg, #00000088 40%, #ffffff44 100%)',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '100%',
    transform: 'translate(-50%, -50%)',
    color:'white',
    fontSize: '100px',
    //animation: 'fadeIn linear 7s',
}

const ParallaxSection = () => {
    return (
        <div>
            <section className="about"></section>
            
            <Parallax bgImage={image1} strength={600}>
                <div style={{height: 1000}}>
                    
                    <div style={inlineStyle} >Adventure.</div>
                </div>
                
            </Parallax>

            <div style={{display: 'flex'}}>

                <Controller>
                    <Scene duration={3030} triggerElement={".about-title"} triggerHook={0} pin={true}>
                        <div className="about-title">
                            
                            <Tween from={{ x: '-100%' }} to={{ x: '0%' }}>
                            <h2>Some Cool Animals.</h2>
                            </Tween>
                        </div>
                    </Scene>
                </Controller>
                
                
                <div className="about-pages">
                    <div style={{height: '100vh'}}>
                        <h2 className="about-headers">Mammals</h2>
                            <img src={Mammals} width="40%" />
                                <p>
                                Mammals are a group of vertebrate animals constituting the class Mammalia,
                                and characterized by the presence of mammary glands which in females produce milk
                                for feeding their young, a neocortex , fur or hair, and three middle ear bones.
                                </p>
                    </div>
                    <div style={{height: '100vh'}}>
                        <h2 className="about-headers">Birds</h2>
                            <img src={Birds} width="40%" />
                                <p>
                                    Birds are a group of warm-blooded vertebrates constituting the class Aves,
                                    characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs,
                                    a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.
                                </p>
                    </div>
                    <div style={{height: '100vh'}}>
                        <h2 className="about-headers">Fish</h2>
                            <img src={Fish} width="40%" />
                                <p>
                                Fish are aquatic, craniate, gill-bearing animals that lack limbs with digits.
                                They form a sister group to the tunicates, together forming the olfactores.
                                Included in this definition are the living hagfish, lampreys, and cartilaginous
                                and bony fish as well as various extinct related groups.
                                </p>
                    </div>
                    <div style={{height: '100vh'}}>
                        <h2 className="about-headers">Reptiles</h2>
                            <img src={Reptiles} width="40%" />
                                <p>
                                Reptiles, as most commonly defined, are the animals in the class Reptilia,
                                a paraphyletic grouping comprising all amniotes except synapsids and Aves.
                                The class comprises turtles, crocodilians, snakes, amphisbaenians, lizards,
                                tuatara, and their extinct relatives.
                                </p>
                    </div>
                    
                </div>
                
            </div>
            
            <Controller>
            <Scene triggerHook="onLeave" duration="300%" pin>
                <Timeline wrapper={<div id="pinContainer" />}>
                    <section className="panel blue"><span className="text-trans">Explore.</span></section>
                <Tween from={{ x: '100%' }} to={{ x: '0%' }}>
                    <section className="panel blue"><span className="img-trans"><img src={eagle} className="eagle"/></span></section>
                </Tween>

                <Tween from={{ y: '100%' }} to={{ y: '0%' }}>
                    <section className="panel blue"><span className="img-trans"><img src={turtle} className="eagle"/></span></section>
                </Tween>

                <Tween from={{ x: '-100%' }} to={{ x: '0%' }}>
                    <section className="panel turqoise"><span className="text-trans">Breathe.</span></section>
                </Tween>

                <Tween from={{ x: '-100%' }} to={{ x: '0%' }}>
                    <section className="panel blue"><span className="img-trans"><img src={cheetah} className="eagle"/></span></section>
                </Tween>

                <Tween from={{ x: '100%' }} to={{ x: '0%' }}>
                    <section className="panel blue"><span className="img-trans"><img src={panda} className="eagle"/></span></section>
                </Tween>

                <Tween from={{ x: '-100%' }}to={{ x: '0%' }}>
                    <section className="panel green"><span className="text-trans">Discover.</span></section>
                </Tween>

                </Timeline>
            </Scene>
            </Controller>

        </div>
    )
}

export default ParallaxSection
