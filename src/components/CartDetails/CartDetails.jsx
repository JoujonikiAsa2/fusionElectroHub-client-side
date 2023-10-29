import { useLoaderData, useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const CartDetails = () => {
    const navigate = useNavigate()

    const [total, setTotal] = useState([])
    const [carts, setCarts] = useState([])

    const url = 'http://localhost:5000/carts'

    axios.get(url, { withCredentials: true })
        .then(data => setCarts(data.data))

    useEffect(() => {
        const totalPrice = carts.reduce((acc, cart) => acc + parseInt(cart.price), 0);
        setTotal(totalPrice);
    }, [carts]);

    const handleProcced = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sure'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch('http://localhost:5000/cartshttp://localhost:5000/carts', {
                    method: "DELETE"
                })
                    .then(res => console.log(res.json))
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Order Confirmed!',
                                'Your order procced successfully.',
                                `Please pay ${total} Tk`,
                                'success'
                            )
                            navigate('/')
                        }
                    })
            }
        })
    }
    return (
        <div className="flex lg:flex-row md:flex-row flex-col gap-8 justify-center items-start relative">
            <div className="grid grid-cols-1 py-12 gap-6 flex-grow min-w-xl mx-auto">
                {
                    carts.map(cart => <Cart key={cart._id} cart={cart}></Cart>)
                }
            </div>
            <div className="min-w-xl mx-auto w-80 bg-base-300 rounded-lg p-4 relative lg:top-12 md:top-12  -top-6 mb-12">
                <div className="space-y-3">
                    <h2 className="text-xl font-bold">Cart Totals</h2>
                    <div className="text-lg flex justify-between items-center">
                        <p className=""><span className="text-[#3876BF] font-bold">Shipping:</span></p>
                        <p>Dhaka,Bangladesh</p>
                    </div>
                    <div className="text-lg flex justify-between items-center">
                        <p className=""><span className="text-[#3876BF] font-bold">Total:</span></p>
                        <p>{total} Tk</p>
                    </div>
                    <div>
                    </div>
                    <button className="btn btn-sm bg-green-500 text-[#FFF]" onClick={handleProcced}>Procced</button>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;