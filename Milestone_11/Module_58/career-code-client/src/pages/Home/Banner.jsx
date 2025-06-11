import React from 'react';
import { motion } from "motion/react"
import office1 from "../../assets/team/office1.jpg"
import office2 from "../../assets/team/office2.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={office1}
                        animate={{ y: [100, 150, 100] }}
                        transition={{duration: 5, repeat: Infinity}}
                        className="max-w-sm border-s-8 border-b-8 shadow-2xl border-blue-500 rounded-t-[40px] rounded-e-[40px]"
                    />   <motion.img
                        src={office2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{duration: 10, delay:5, repeat: Infinity}}
                        className="max-w-sm border-s-8 border-b-8 shadow-2xl border-blue-500 rounded-t-[40px] rounded-e-[40px]"
                    />
                </div>
                <div className='flex-1'>
                    <div>
                        <motion.h1 animate={{
                            rotate: 360,
                            transition: { duration: 5 }
                        }} className="text-5xl font-bold">Banner Transition is ON</motion.h1>
                        <h2 className='text-5xl font-bold'>Find your <motion.span
                            animate={
                                {
                                    color: ['#1641d3', '#16d383', '#cd16d3'],
                                    transition: { duration: 2, repeat: Infinity }

                                }}> Remote</motion.span> job</h2>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;