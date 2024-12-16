import { IoSearchSharp } from "react-icons/io5";
import style from './Header.module.css';
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const Header = () => {
    const img = 'https://iqftest.my.canva.site/media/c733bfaff51566a7579ee62b33649902.jpg'
    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center pt-2">
                <div className="col-md-3 ">
                    <img src={img} />
                </div>
                <div className="col-lg-4 d-none d-lg-block  ">
                    <div className={`${style.inptdiv} border px-2 rounded-3`}>
                        <IoSearchSharp className="fs-3" />
                        <input type="text" className="py-2 " />
                    </div>
                </div>
                <div className="  col-lg-3 col-5 col-sm-4  d-flex justify-content-between align-items-center">
                    <MdMessage className="fs-3 text-success" />
                    <FaBell className="fs-3 text-success" />
                    <button className={` ${style.btn} text-white bg-success py-2 px-3 rounded-3`}>
                        <FaPlus />
                        Add Course
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;