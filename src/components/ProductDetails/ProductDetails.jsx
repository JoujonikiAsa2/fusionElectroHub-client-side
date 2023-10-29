import PropTypes from 'prop-types'
import { useState } from 'react';
import { IoArrowBackSharp } from 'react-icons/io5';
import {Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const ProductDetails = () => {
    const product = useLoaderData()
    const navigate = useNavigate()
    const [clicked, setClicked] = useState(false)

    console.log(product)
    const { image, name, brandName, type, price, rating, shortDescription } = product
    const cartProduct = { image, name, brandName, type, price, rating }

    // const intPrice = parseInt(price)
    const handleCart = () => {
        fetch('http://localhost:5000/carts', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(cartProduct)
        })
        if (!clicked) {
            Swal.fire("Add to cart successfully")
            setClicked(!clicked)
            navigate('/')
        }
    }
    return (
        <div>
            <Link to='/' className='flex justify-start items-center mt-5 gap-4 text-lg font-bold'>
                <IoArrowBackSharp className='text-xl font-bold'></IoArrowBackSharp><span>Go back home</span>
            </Link>
            <div className="flex flex-col  justify-between items-center p-6 my-8 space-y-4">
                <h2 className='text-2xl font-bold text-[#3876BF] '>{name}</h2>
                <div className='shadow-xl'>
                    <img src={image} alt="" className='w-[300px] h-[300px]' />
                </div>
                <div className='border-2 text-black'>
                    <table className='table'>
                        <thead className='border-b-2 text-lg font-bold'>
                            <th className='border-r-2 text-[#3876BF]'>Name</th>
                            <th className='border-r-2 text-[#3876BF]'>Brand</th>
                            <th className='border-r-2 text-[#3876BF]'>Type</th>
                            <th className='border-r-2 text-[#3876BF]'>Price</th>
                        </thead>
                        <tr className=''>
                            <td className='border-r-2 text-[#3876BF]'>{name}</td>
                            <td className='border-r-2 text-[#3876BF]'>{brandName}</td>
                            <td className='border-r-2 text-[#3876BF]'>{type}</td>
                            <td className='border-r-2 text-[#3876BF]'>{price}</td>
                        </tr>
                    </table>
                </div>
                <div>
                    <h2 className='text-xl font-bold text-[#3876BF]'>Description</h2>
                    <p>{shortDescription}</p>
                    <br />
                    <p><span className='text-[#3876BF] text-xl font-bold'>Rating <br /></span> {rating} out of 5</p>
                </div>
                <div className='text-lg font-tavi capitalize'>
                    <button className='btn btn-sm bg-[#3876BF] hover:bg-transparent text-[#FFF] capitalize hover:text-[#3876BF]' onClick={handleCart}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

ProductDetails.propTypes = {
    product: PropTypes.object
}
export default ProductDetails;