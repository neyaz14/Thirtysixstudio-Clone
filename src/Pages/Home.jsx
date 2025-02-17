
import React, { useEffect } from 'react';
import Canvas from './Canvas';
import data from '../../data';
import LocomotiveScroll from 'locomotive-scroll';



const Home = () => {
    useEffect(()=>{
        const locomotiveScroll = new LocomotiveScroll();
    },[])
    return (
        <div>
            <div className='w-full relative min-h-screen'>
                {data[0].map((canvasDetails, index) => (
                    <Canvas details={canvasDetails}></Canvas>
                ))}
            </div>

            <div className='w-full h-screen'>
                
            </div>



        </div>
    );
};



export default Home;
