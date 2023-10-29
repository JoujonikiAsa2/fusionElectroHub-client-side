import PropTypes from 'prop-types'
import { createContext } from 'react';
export const Total = createContext()
const Cart = ({ cart }) => {
    const { image, name, price } = cart
    return (
        <div className="card shadow hover:shadow-black border space-y-4 p-4 flex flex-col md:flex-row lg:flex-row justify-between items-center gap-3">
            <img src={image} alt="" className='w-12 h-12 ' />
            <h4 className='text-md font-bold'>{name}</h4>
            <p> <span className='font-bold'>Price:</span> {price} Tk</p>
            <p><span className='font-bold'>Subtotal:</span> {price}</p>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object
}

export default Cart;