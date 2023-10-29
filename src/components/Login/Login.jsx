import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaGoogle } from 'react-icons/fa'
import signInPhoto from '../../assets/photos/Athentication/1.jpg'
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../../firebase.config";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {

    const { signIn } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate()
    const [error, setError] = useState()
    const handleLogin = (e) => {

        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log('clicked ang get', email, password)


        signIn(email, password)
            .then(res => {
                const loggedUser = res.user
                const user = { email }
                console.log(loggedUser)

                const url = 'http://localhost:5000/jwt'
                axios.post(url, user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state ? location.state : '/')
                        }
                    })

                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                })

            }
            )
            .catch(error => setError(error.message))

    }
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                console.log(res.user)
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                })
                navigate(location?.state ? location.state : '/')
            }
            )
            .catch(error => console.log(error.message))
    }
    return (
        <div className='md:max-w-4xl lg:max-w-5xl mx-auto shadow-lg m-5 lg:m-20 md:m-16'> <h1 className="text-center text-2xl font-bold pt-8 text-[#3876BF]">SignIn</h1>
            <div className=" flex flex-col-reverse md:flex-row-reverse lg:flex-row justify-center items-center gap-3">
                <div>
                    <form className="space-y-4 pt-4" onSubmit={handleLogin}>
                        <div className="flex-col  gap-4  items-center font-Montserrat">
                            <div className="flex items-center gap-6 w-full border-b-2">
                                <label className="">
                                    <span className="text-lg font-medium font-tavi"><AiTwotoneMail></AiTwotoneMail></span>
                                </label>
                                <input type="text" name="email" placeholder="Your email address" className=" p-1 text-sm" required />
                            </div>
                            <div className="flex items-center gap-6 w-full border-b-2">
                                <label className="">
                                    <span className="text-lg font-medium font-tavi"><RiLockPasswordFill></RiLockPasswordFill></span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className=" p-1 text-sm" required />
                            </div>
                            {
                                error && <p className='text-xs text-red-500'>{error.slice(17, 47)}</p>
                            }
                            <div className="flex items-center gap-3 pt-5">
                                <input type="checkbox" className=" p-1 text-sm" required />
                                <label className="">
                                    <span className="font-medium font-tavi text-xs">I agree all statement in Terms of ervice</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col  gap-4 items-center font-Montserrat">
                            <div className="flex  flex-col gap-4 items-center font-Montserrat">
                                <div className="flex items-center gap-6 w-full">
                                    <input type="submit" value="SignIn" className="input input-bordered text-sm font-bold bg-[#80B3FF] text-[#FFF]" />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="flex justify-center">
                        <p className="font-bold">Or</p>
                    </div>
                    <div className='pb-6 flex flex-col justify-center items-center text-lg font-bold text-[#3876BF]'>
                        <span className="pb-2">SignIn with </span>
                        <button className='flex flex-row items-center gap-2 btn capitalize' onClick={handleGoogleSignIn}><span className='text-xl text-[#3876BF] font-bold'></span>
                            <FaGoogle className='text-yellow-600 text-xl'></FaGoogle>Google</button>
                    </div>
                    <div>
                        <Link to='/signUp' className='underline'>Do not have an account? SignUp</Link>
                    </div>
                </div>
                <div>
                    <img src={signInPhoto} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;