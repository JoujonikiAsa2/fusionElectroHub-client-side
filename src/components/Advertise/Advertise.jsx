import PropTypes from 'prop-types'
const Advertise = ({product}) => {
    const {image,name} = product
    return (
        <div className="flex flex-col lg:flex-row md:flex-row items-center">
            <img src={image} alt="" />
            <h2 className="text-2xl font-bold text-[#3876BF]">{name}</h2>
        </div>
    );
};

Advertise.propTypes = {
    product: PropTypes.object
}
export default Advertise;