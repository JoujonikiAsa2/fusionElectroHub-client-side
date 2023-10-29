import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Category = ({ product }) => {
    const { image, brandName } = product
    return (
        <Link to={`products/brand/${brandName}`}>
            <div className="card rounded shadow-xl bg-[#F3F0CA] hover:shadow-black p-4 flex flex-col justify-center items-center">
                <img src={image} alt="" className='w-[80px] h-[80px]' />
                <h2 className='card-title capitalize'>{brandName}</h2>
            </div>
        </Link>
    );
};
Category.propTypes = {
    product: PropTypes.object
}
export default Category;