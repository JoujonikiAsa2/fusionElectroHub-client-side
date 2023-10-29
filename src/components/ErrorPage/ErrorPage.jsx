import { Link } from "react-router-dom";
import errorImage from '../../assets/photos/Error/Connection Error.gif'
import { FaArrowLeft } from "react-icons/fa";
const ErrorPage = () => {
    return (
        <div className="h-[100vh] flex flex-col justify-center items-center space-y-8">

            <Link to='/'><button className="btn btn-md text-[#FFF] text-lg capitalize bg-[#3876BF] border-black hover:bg-transparent hover:text-[#3876BF]"><FaArrowLeft></FaArrowLeft>Home Page</button></Link>
            <div>
                <img src={errorImage} alt="" className="h-48" />
            </div>
            <h2 className="text-lg lg:text-xl md:text-xl w-96 text-red-400 font-bold text-center">Something went wrong! Please go back to the Home Page</h2>
        </div>
    );
};

export default ErrorPage;