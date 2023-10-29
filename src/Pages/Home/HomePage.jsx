import banner1 from "../../assets/photos/Banner/banner1.png"
import banner2 from "../../assets/photos/Banner/banner2.png"
import banner3 from "../../assets/photos/Banner/banner4.png"
import banner4 from "../../assets/photos/Banner/banner5.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {  Pagination } from 'swiper/modules';
import { useLoaderData } from "react-router-dom";
import Product from "../../components/Product/Product";
import Category from "../../components/Category/Category";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const HomePage = () => {
    const { user } = useContext(AuthContext)
    const [showAll, setShowAll] = useState(6)
    const [newProducts, setNewProducts] = useState(6)
    const products = useLoaderData()
    const [productRat, setProductRat] = useState(2)
    const [categories, setCategories] = useState([])

    const handleShowAll = () => {
        if (user) {
            setShowAll(products.length)
        }
        else {
            return <span>Please Login</span>
        }
    }

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div> 
            <div className="flex justify-center items-center py-8">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="hero-content flex-col lg:flex-row bg-[#F3F0CA]">
                            <img src={banner3} alt="" className="rounded-lg w-[40rem] md:h-[28rem] lg:h-[28rem] z-10" />
                            <div className="max-w-lg py-20 space-y-3 herotext">
                                <h1 className="lg:text-5xl md:text-4xl text-2xl  font-bold text-[#3876BF]">Best Offer</h1>
                                <p><span className="text-xl uppercase text-red-500">10% discount on Television</span></p>
                                <button className="btn capitalize bg-[#E1AA74] text-[#FFF] font-bold text-lg hover:bg-transparent hover:text-[#E1AA74]">View Details</button>
                            </div>
                        </div>
                    </SwiperSlide><SwiperSlide>
                        <div className="hero-content flex-col lg:flex-row bg-[#F3F0CA]">
                            <img src={banner2} alt="" className="rounded-lg w-[40rem] md:h-[28rem] lg:h-[28rem] z-10" />
                            <div className="max-w-lg py-20">
                                <h1 className="lg:text-5xl md:text-4xl text-2xl  font-bold text-[#3876BF]">Best Watches</h1>
                                <p className="text-xl py-6">Explore to find best televisions with best price</p>
                                <button className="btn capitalize bg-[#E1AA74] text-[#FFF] font-bold text-lg hover:bg-transparent hover:text-[#E1AA74]">Explore</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-content flex-col lg:flex-row bg-[#F3F0CA]">
                            <img src={banner4} alt="" className="rounded-lg w-[40rem] md:h-[28rem] lg:h-[28rem] z-10" />
                            <div className="max-w-lg py-20">
                                <h1 className="lg:text-5xl md:text-4xl text-2xl  font-bold text-[#3876BF]">Best Headphones</h1>
                                <p className="text-xl py-6">Explore to find best headphones with best price</p>
                                <button className="btn capitalize bg-[#E1AA74] text-[#FFF] font-bold text-lg hover:bg-transparent hover:text-[#E1AA74]">Explore</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero-content flex-col lg:flex-row bg-[#F3F0CA]">
                            <img src={banner1} alt="" className="rounded-lg w-[40rem] md:h-[28rem] lg:h-[28rem] z-10" />
                            <div className="max-w-lg py-20">
                                <h1 className="lg:text-5xl md:text-4xl text-2xl  font-bold text-[#3876BF]">Best Mobiles</h1>
                                <p className="text-xl py-6">Explore to find best mobiles with best price</p>
                                <button className="btn capitalize bg-[#E1AA74] text-[#FFF] font-bold text-lg hover:bg-transparent hover:text-[#E1AA74]">Explore</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="pb-12">
                <div className="border-b-2 border-b-[#E1AA74] mb-8">
                    <h2 className="text-center text-3xl font-bold text-[#3876BF] py-12 ">About us</h2>
                </div>
                <p className="text-center">FusionElectroHub Shop in Bangladesh
                    The FusionElectroHub is nothing but very useful and small tools specially designed for particular work and to makes our life easy. FusionElectroHubs basically invent for solving a particular problem in easy and very effective way. The aim is to make the work done in few steps and withing few moments. In recent days, everyone loves and uses FusionElectroHubs in their daily life. From smart wristbands to Virtual Reality and from Smartwatch to kitchen FusionElectroHubs, demand of all of this small tools is growing too fast and worldwide. You ca not just avoid it. We are using it everyday. It makes our life easy and faster and smarter than ever.

                    To make your life smart, we have some world class branded FusionElectroHubs collection and available in Bangladesh. Now you can buy all original Xiaomi Mi Bands, Google Chromecast, Virtual Reality Box, Mini Projector, Spy Camera, Spy FusionElectroHubs, Spy recorder and much more. Now you can buy all coolest FusionElectroHubs online at the best price in Bangladesh.</p>
            </div>
            <div>
                <div className="border-b-2 border-b-[#E1AA74] mb-8">
                    <h2 className="text-center text-3xl font-bold text-[#3876BF] py-12 ">Brands</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-4">
                    {
                        categories.map(product => <Category key={product.brandName} product={product}></Category>)
                    }
                </div>
            </div>
            <div>
                <div className="border-b-2 border-b-[#E1AA74] mb-8">
                    <h2 className="text-center text-3xl font-bold text-[#3876BF] py-12 ">Products</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-4">
                    {
                        products && products.slice(0, showAll).map(product => <Product
                            key={product._id}
                            product={product}
                            rating={productRat}
                            setRating={setProductRat}
                            newProducts={newProducts}
                            setNewProducts={setNewProducts}></Product>)
                    }
                </div>
                {
                    showAll != products.length &&

                    <div className="flex justify-center items-center py-8">
                        <button className="btn text-[#FFF] bg-[#3876BF] hover:bg-transparent hover:text-[#3876BF]" onClick={handleShowAll}>See more</button>
                    </div>
                }

            </div>
        </div>
    );
}

export default HomePage
