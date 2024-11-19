import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { RiDoubleQuotesL } from "react-icons/ri";


const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    // console.log(review);
    return (
        <div className='my-12 w-11/12 mx-auto'>
            <h2 className="text-4xl text-center font-medium">Testimonials</h2>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center">

                {
                    review.map(rev =>
                        <SwiperSlide key={rev.id}>
                            <div className='flex flex-col items-center mx-auto w-4/5'>
                                <RiDoubleQuotesL className='w-20 h-20 my-6' />
                                <Rating
                                    style={{ maxWidth: 140 }}
                                    value={rev.rating}
                                    readOnly
                                />
                                <p className='my-4 text-lg font-medium'>{rev.review}</p>
                                <h3 className="text-2xl text-lime-600 font-bold">{rev.name}</h3>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Review;