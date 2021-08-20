import {Link} from 'react-router-dom';
import React from 'react';
import HomeBanner from '../videos/home_video.mp4';
import "./Home.css";
import Card from './Card';

// Image Data
import Panda from '../images/panda.jpg';
import Owl from '../images/owl.jpg'
import Tiger from '../images/tiger.jpg'
import Meerkat from '../images/meerkat.jpg'

function Home() {
    return (
    <>
        <div className="bannerContainer_home">
            <div className="gradient_home"></div>
            <video autoPlay loop muted className="bannerVideo_home">
                <source src={HomeBanner} type="video/mp4" />
            </video>

            <h1 className="bannerHeader_home">Welcome to National Geographic</h1>
        </div>

        <div className="primary_container_home">
            <h1 style={{color: 'white', fontSize: '45px', padding: '40px 0'}}>Recent Posts</h1>
            <div className="cardContainer">
                <Card
                title="Pandas"
                image={Panda}
                body ="The giant panda, also known as the panda bear, is a bear native to South Central China. It is characterised by its bold black-and-white coat and rotund body."
                url="./PhotoGallery"
                />

                <Card
                title="Owls"
                image={Owl}
                body ="Owls are birds from the order Strigiformes, which includes over 200 species of mostly solitary and nocturnal birds typified by feathers adapted for silent flight."
                url="./PhotoGallery"
                />

                <Card
                title="Cheetahs"
                image={Tiger}
                body ="The cheetah is a large cat native to Africa and central Iran. It is the fastest land animal, estimated to be capable of running at 80 to 128 km/h."
                url="./PhotoGallery"
                />


            </div>
        </div>


    </>
    )

}

export default Home
