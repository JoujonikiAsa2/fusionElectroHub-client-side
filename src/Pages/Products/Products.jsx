import { Link} from "react-router-dom";
// import Product from "../../components/Product/Product";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Product from "../../components/Product/Product";
import Advertise from "../../components/Advertise/Advertise";
import { IoArrowBackSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
    // const products = useLoaderData()
    const [mainProducts, setMainProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/products', { withCredentials: true })
            .then(res => setMainProducts(res.data))
    })
    // const id = useParams()

    const [showAll, setShowAll] = useState(3)
    // console.log(id)

    const handleShowAll = () => {
        setShowAll(mainProducts.length)
    }
    return (
        <div>
            <div>
                <Link to='/' className='flex justify-start items-center mt-5 gap-4 text-lg font-bold'>
                    <IoArrowBackSharp className='text-xl font-bold'></IoArrowBackSharp><span>Go back home</span>
                </Link>
                {
                    mainProducts.length > 0
                        ?
                        <div className="my-20">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                freeMode={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[FreeMode, Pagination]}
                                className="mySwiper"
                            >
                                {
                                    mainProducts.slice(0, 3).map(product => <SwiperSlide className="bg-[#F3F0CA]" key={product._id}><Advertise product={product}></Advertise></SwiperSlide>)
                                }

                            </Swiper>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                                {
                                    mainProducts.slice(0, showAll).map(product => <Product key={product._id} product={product}></Product>)
                                }
                            </div>
                            {
                                showAll != mainProducts.length &&

                                <div className="flex justify-center items-center py-8">
                                    <button className="btn text-[#FFF] bg-[#3876BF] hover:bg-transparent hover:text-[#3876BF]" onClick={handleShowAll}>See more</button>
                                </div>
                            }
                        </div>
                        :
                        <div>
                            <div className="">
                                <h2 className="flex justify-center items-center text-3xl font-bold text-[#3876BF] py-12 h-[20rem]">No Product found</h2>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Products;