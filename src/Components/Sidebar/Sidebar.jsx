import { RiDashboard2Line } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineTaskAlt } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { BiSolidLogOut } from "react-icons/bi";



const SideBar = () => {


    const data = [
        {
            name: 'DashBoard',
            icon: <RiDashboard2Line />
        },
        {
            name: 'Courses',
            icon: <IoBookSharp />
        },
        {
            name: "Task",
            icon: <MdOutlineTaskAlt />
        },
        {
            name: "Home",
            icon: <FaHome />
        },
        {
            name: 'Notification',
            icon: <IoMdNotifications />
        },
        {
            name: 'Setting',
            icon: <IoMdSettings />
        },
        {
            name: 'Setting',
            icon: <BiSolidLogOut />
        },
    ]

    return (
        <div className="">
            {data.map((val, i) => {
                return (
                    <div key={i} className="d-flex align-items-end text-success mt-3">
                        <div className="fs-3">
                            {val.icon}
                        </div>
                        <h6 className="ms-2">
                            {val.name}
                        </h6>
                    </div>
                )
            })}
        </div>
    )
}

export default SideBar