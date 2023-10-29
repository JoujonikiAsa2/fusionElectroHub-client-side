import PropTypes from 'prop-types'
import { AiFillEdit } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const Product = ({ product, productRat, setProductRat,newProducts,setNewProducts }) => {
    const { image, name, brandName, type, price, rating } = product

    const handleDelete = (id) => {
        console.log(id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/products/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining = newProducts.filter(pro => pro._id !== id);
                            setNewProducts(remaining)
                        }
                    })
            }
        })
    }
    return (
        <div className="card shadow-xl text-[#3876BF] bg-[#F3F0CA] hover:shadow-black border space-y-4 p-4">
            <img src={image} alt="" className='w-80 lg:w-60 md:w-full h-80 lg:h-60 md:h-60'/>
            <h4 className='text-lg font-bold'>{name}</h4>
            <div className='capitalize'>
                <p><span className='text-sm font-bold'>Brand: &nbsp;</span> {brandName}</p>
                <p><span className='text-sm font-bold'>Type: &nbsp;</span> {type}</p>
                <p><span className='text-sm font-bold'>Price: &nbsp;</span> {price} Tk</p>
                <p className='text-sm'><span className='text-sm font-bold'>Rating: &nbsp;</span>
                    {
                        rating && <div className="rating rating-sm rating-half">
                            <input type="radio" name={productRat && setProductRat(productRat + 1)} className="rating-hidden" />
                            <input type="radio" name={productRat && setProductRat(productRat + 1)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name={productRat && setProductRat(productRat + 1)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name={productRat && setProductRat(productRat + 1)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name={productRat && setProductRat(productRat + 1)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name={productRat && setProductRat(productRat + 1)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name={productRat && setProductRat(productRat + 1)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name={productRat && setProductRat(productRat + 1)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name={productRat && setProductRat(productRat + 1)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name={productRat && setProductRat(productRat + 1)} className="bg-yellow-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name={productRat && setProductRat(productRat + 1)} className="bg-yellow-500 mask mask-star-2 mask-half-2" />
                        </div>
                    }
                </p>
            </div>
            <div className='flex flex-row gap-2 text-[#FFF]text-[#FFF]'>
                <Link to={`/details/${product._id}`} className='flex'> <button className='btn btn-sm capitalize bg-green-400 flex justify-center items-center text-[#FFF]'><BsFillInfoCircleFill></BsFillInfoCircleFill> Details</button></Link>
                <Link to={`/update/${product._id}`} className='flex'><button className='btn btn-sm capitalize bg-yellow-400 flex justify-center items-center text-[#FFF]'><AiFillEdit></AiFillEdit> Update</button></Link>
                <button className='btn btn-sm capitalize bg-red-400 flex justify-center items-center text-[#FFF]' onClick={() => handleDelete(product._id)}><RiDeleteBin2Fill></RiDeleteBin2Fill> Delete</button>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object,
    newProducts: PropTypes.object,
    productRat: PropTypes.number,
    setProductRat: PropTypes.func,
    setNewProducts: PropTypes.func
}

export default Product;