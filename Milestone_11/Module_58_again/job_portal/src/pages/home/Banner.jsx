import { MotionConfig } from 'motion/react';
import React from 'react';
import { motion } from "motion/react"
import team_1 from '../../assets/team/office1.jpg'
import team_2 from '../../assets/team/office2.jpg'


const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-120">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        animate={{ y: [100, 150, 100] }}
                        transition={{duration: 5, repeat: Infinity}}
                        src={team_1}
                        className="max-w-sm rounded-lg shadow-2xl border-blue-500 border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl"
                    />
                    <motion.img
                        animate={{ x: [100, 150, 100] }}
                        transition={{duration: 10, delay: 5, repeat: Infinity}}
                        src={team_2}
                        className="max-w-sm rounded-lg shadow-2xl border-blue-500 border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl"
                    />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{
                            rotate: 360,
                            transition: { duration: 10 }

                        }}

                        className="text-5xl font-bold">Latest <motion.span
                            animate={{
                                color: ['#cd16d3', '#38d316', '#1666d3', '#6c16d3'],
                                transition: { duration: 4, repeat: Infinity }
                            }}
                        >Job</motion.span> for you!
                    </motion.h1>
                    <motion.h1
                        initial={{
                            scale: 0
                        }}
                        animate={{
                            scale: 1
                        }}
                        transition={{
                            duration: 10
                        }}

                        className="text-5xl font-bold">
                        Remote Job for you!
                    </motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;