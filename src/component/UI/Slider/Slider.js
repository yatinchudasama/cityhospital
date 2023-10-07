import React, { useEffect, useState } from 'react';
import { Heading } from '../Heading/Heading';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Profile from '../../../containers/Home/Review';
import Review from '../../../containers/Home/Review';

function Slider(props) {

    const [rData, setRData] = useState([])

    const getdata = async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/comments');

        let data = await response.json()
        setRData(data)
    }
    useEffect(() => {
        getdata();
    })
    // console.log(data);
    return (
        <div>
            <section id="testimonials" className="testimonials">
                <div className="container">
                    <div className="section-title"><Heading>Reviews</Heading></div>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            '@1.50': {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                    // modules={[Pagination]}
                    // className="mySwiper"
                    >

                        {

                            rData.map((v) => {
                                return (
                                    <SwiperSlide>
                                        <Link to={"/review-detail/" + v.id}>
                                            {/* <Profile data={v.name}/> */}
                                            <Review data={v.name} />
                                            {v.id}
                                            {v.name}
                                        </Link>
                                    </SwiperSlide>
                                )
                            })
                        }


                    </Swiper>





                </div>
            </section>
        </div>
    );
}

export default Slider;