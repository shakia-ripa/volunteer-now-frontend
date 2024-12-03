import React from 'react';
import bannerImage from '../../../assets/images/banner1.avif';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <section className=" bg-lime-100 bg-cover bg-center h-full">
                <div className='w-11/12 mx-auto'>
                <div className=" h-full flex lg:flex-row flex-col-reverse justify-between items-center gap-8  text-black py-16">
                    <div className="lg:my-16 ">
                        <h1 className="text-4xl md:text-5xl font-bold">Make a Difference Today!</h1>
                        <p className="text-lg md:text-xl mt-4">Join thousands of volunteers impacting lives around the world.</p>
                        <div className="mt-6">
                            <Link to='/events'>
                            <a href="/apply" className="bg-lime-600 hover:bg-gray-300 text-white text-lg font-bold py-2 px-4 rounded-lg mr-4">Apply Now</a>
                            </Link>
                            <a href="" className="btn bg-transparent border-2 border-black  hover:bg-gray-300 text-black text-lg font-bold py-2 px-4 rounded-lg">Explore Opportunities</a>
                        </div>
                    </div>
                    <div className='lg:w-1/2 '>
                        <img className='' src={bannerImage} alt="" />
                    </div>
                </div>
                </div>
            </section>

        </div>
    );
};

export default Banner;