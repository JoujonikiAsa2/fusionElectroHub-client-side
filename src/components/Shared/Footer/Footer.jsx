const Footer = () => {
    return (
        <div>
            <footer className="flex lg:flex-row md:flex-row md:flex-wrap-reverse flex-col justify-evenly p-10 bg-[#F3F0CA] text-base-content">
                <nav>
                    <header className="uppercase text-sm text-[#3876BF] font-bold">Services</header>
                    <div className="flex gap-20">
                        <div className="flex flex-col">
                            <a className="link link-hover">Home</a>
                            <a className="link link-hover">Add Product</a>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Products</a>
                        </div>
                        <div className="flex flex-col">
                            <a className="link link-hover">Home</a>
                            <a className="link link-hover">Add Product</a>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Products</a>
                        </div>
                    </div>

                </nav>
                <nav>
                    <header className="uppercase text-sm text-[#3876BF] font-bold">Legal</header>
                    <div className="flex flex-col">
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                    <a className="link link-hover">Security</a>
                    </div>
                </nav>
                <form>
                    <header className="uppercase text-sm text-[#3876BF] font-bold">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="lg:relative md:relative hidden">
                            <input type="text" placeholder="username@site.com" className="input input-bordered lg:w-full md:w-full w-1/2 pr-16" />
                            <button className="btn bg-[#3876BF] md:absolute lg:absolute top-0 right-0 rounded lg:mt-0 md:mt-0 mt-2 md:rounded-l-none lg:rounded-l-none capitalize text-[#FFF]">Subscribe</button>
                        </div>
                        <div className="lg:hidden md:hidden flex flex-col">
                            <input type="text" placeholder="username@site.com" className="input input-bordered lg:w-full md:w-full w-2/3 pr-16" />
                            <button className="btn w-36 bg-[#3876BF] capitalize text-[#FFF]">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;