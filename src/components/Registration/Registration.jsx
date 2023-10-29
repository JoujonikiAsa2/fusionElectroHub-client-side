import { BsFillImageFill, BsFillPersonFill } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'
import { RiLockPasswordFill } from 'react-icons/ri'
import signUp from '../../assets/photos/Athentication/2.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';

const Registration = () => {
    const navigate = useNavigate()
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState()
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const image = form.image.value
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        if (password.length < 6) {
            setError("Password should be at 6 characters or longer")
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setError('Don not have one uppercase character')
            return;
        }
        else if (!format.test(password)) {
            setError("Do not have special charater")
            return;
        }

        console.log(image, name, email, password)
        createUser(email,password)
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
                title: 'Registration successfull'
              })
            navigate('/signIn')
            updateProfile(res.user,{
                displayName: name,
                photoURL: image
            })
        }
        )
        .catch(error => console.log(error.message))
    }
    return (
        <div className='md:max-w-4xl lg:max-w-5xl mx-auto shadow-lg m-5 lg:m-20 md:m-16'> <h1 className="text-center text-2xl font-bold pt-8 text-[#3876BF]">SignUp</h1>
            <div className=" flex flex-col-reverse md:flex-row-reverse lg:flex-row-reverse justify-center items-center gap-4">
                <form className="space-y-4 py-4" onSubmit={handleSignUp}>
                    <div className="flex-col  gap-4  items-center font-Montserrat">
                        <div className="flex items-center gap-6 w-full border-b-2">
                            <label className="">
                                <span className="text-lg font-medium font-tavi"><BsFillImageFill></BsFillImageFill></span>
                            </label>
                            <input type="text" name="image" placeholder="Your image URL" className=" p-1 text-sm" required />
                        </div>
                        <div className="flex items-center gap-6 w-full border-b-2">
                            <label className="">
                                <span className="text-lg font-medium font-tavi"><BsFillPersonFill></BsFillPersonFill></span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className=" p-1 text-sm" required />
                        </div>
                        <div className="flex items-center gap-6 w-full border-b-2">
                            <label className="">
                                <span className="text-lg font-medium font-tavi"><AiTwotoneMail></AiTwotoneMail></span>
                            </label>
                            <input type="email" name="email" placeholder="Your email address" className=" p-1 text-sm" required />
                        </div>
                        <div className="flex items-center gap-6 w-full border-b-2">
                            <label className="">
                                <span className="text-lg font-medium font-tavi"><RiLockPasswordFill></RiLockPasswordFill></span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className=" p-1 text-sm" required />
                        </div>
                        {
                            error && <p className='text-xs text-red-500'>{error}</p>
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
                            <div className="flex items-center gap-6 w-full pb-8 lg:pb-10">
                                <input type="submit" value="SignUp" className="input input-bordered text-sm font-bold bg-[#80B3FF] text-[#FFF]" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to='/signIn' className='underline'>Allready have an account? Login</Link>
                    </div>
                </form>
                <div>
                    <img src={signUp} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Registration;