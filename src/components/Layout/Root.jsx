import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { useState } from "react";

const Root = () => {
    const [isChecked, setIsChecked] = useState('checked')
    const handleTheme = () => {
        setIsChecked(!isChecked)
    }
    return (
        <div className="font-Montserrat font-noto font-tavi" data-theme={isChecked == false ? "light" : "dark" }>
            <div>
                <div className=" w-56">
                    <label className="label cursor-pointer">
                        <span className="label-text">Change Theme</span>
                        <input type="checkbox" className="toggle"  onClick={handleTheme}/>
                    </label>
                </div>
            </div>
            <Header></Header>
            <div className="lg:max-w-5xl md:max-w-5xl max-w-xl lg:mx-auto md:mx-auto m-5">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;