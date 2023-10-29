import { BsArrowLeftSquareFill } from "react-icons/bs";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateProduct = () => {

    const product = useLoaderData()
    console.log(product)
    const navigate = useNavigate()
    const handleUpdateProduct = (e) => {
        e.preventDefault()
        console.log("Clicked")

        const form = e.target
        const image = e.target.image.value
        const name = e.target.name.value
        const brandNameUp = e.target.brandName.value
        const type = e.target.type.value
        const price = e.target.price.value
        const shortDescription = e.target.shortDescription.value
        const rating = e.target.rating.value

        const brandName = brandNameUp.toLowerCase()
        const UpdateProduct = { image, name, brandName, type, price, shortDescription, rating }
        console.log(UpdateProduct)

        fetch(`http://localhost:5000/products/${product._id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(UpdateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {

                    Swal.fire({
                        icon: 'success',
                        title: 'Your work has been updated',
                        showConfirmButton: true,
                        timer: 1500
                    })
                    form.reset()
                    navigate('/')
                }
            })
    }
    return (
        <div className="md:max-w-4xl lg:max-w-5xl mx-auto my-4 p-6">
            <Link to='/' className='pt-6 flex gap-2 justify-center items-center'><BsArrowLeftSquareFill></BsArrowLeftSquareFill>Back</Link>
            <h1 className="text-center text-2xl font-bold py-12">Update Your Product</h1>
            <form className="space-y-4 font-tavi bg-[#F3F0CA] p-10 rounded-xl" onSubmit={handleUpdateProduct}>
                <div className="flex lg:flex-row md:flex-col flex-col  gap-4  items-center font-Montserrat">
                    <div className="form-control w-full md:w-1/2 lg:w-1/2">
                        <label className="">
                            <span className="text-lg font-medium font-tavi">Image</span>
                        </label>
                        <input type="text" defaultValue={product.image} name="image" placeholder="Enter product image URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full md:w-1/2 lg:w-1/2">
                        <label className="">
                            <span className="text-lg font-medium font-tavi">Name</span>
                        </label>
                        <input type="text" defaultValue={product.name} name="name" placeholder="Enter product name" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex lg:flex-row md:flex-col flex-col gap-4 items-center font-Montserrat">
                    <div className="form-control w-full md:w-1/2 lg:w-1/2">
                        <label className="">
                            <span className="text-lg font-medium font-tavi">Brand Name</span>
                        </label>
                        <input type="text" defaultValue={product.brandName} name="brandName" placeholder="Enter product brand Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full md:w-1/2 lg:w-1/2">
                        <label className="">
                            <span className="text-lg font-medium font-tavi">Type</span>
                        </label>
                        <select name="type" defaultValue={product.type} id="" className="input input-bordered" required>
                            <option value="" className=" text-gray-400">Select one type</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Television">Television</option>
                            <option value="Watch">Watch</option>
                            <option value="Headphone">Headphone</option>
                            <option value="Earphone">Earphone</option>
                            <option value="Cooler">Cooler</option>
                            <option value="Speaker">Speaker</option>
                            <option value="Earphone">Earphone</option>
                            <option value="RAM">RAM</option>
                            <option value="Keybord">Keybord</option>
                            <option value="Mouse">Mouse</option>
                        </select>
                    </div>
                </div>
                <div className="flex lg:flex-row md:flex-col flex-col gap-4 font-Montserrat">
                    <div className="form-control w-full md:w-1/2 lg:w-1/2">
                        <label className="">
                            <span className="text-lg font-medium font-tavi">Price</span>
                        </label>
                        <input type="text" defaultValue={product.price} name="price" placeholder="Enter product price" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full md:w-1/2 lg:w-1/2">
                        <label className="">
                            <span className="text-lg font-medium font-tavi">Short Description</span>
                        </label>
                        <textarea placeholder="Details" defaultValue={product.shortDescription} name="shortDescription" className="textarea textarea-bordered textarea-lg w-full max-w-lg" ></textarea>
                    </div>
                </div>
                <div className="flex flex-col  gap-4 items-center font-Montserrat">
                    <div className="flex items-center gap-3 w-full">
                        <label className="">
                            <span className="text-lg font-medium font-tavi">Rating</span>
                        </label>
                        <select name="rating" id="" defaultValue={product.rating} className="input input-bordered text-gray-400" required>
                            <option value="">Select a rating number</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className="flex  flex-col gap-4 items-center font-Montserrat">
                        <div className="form-control w-full pb-8 lg:pb-10">
                            <input type="submit" value="Update product" className="input input-bordered font-bold bg-[#D2B48C]" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;