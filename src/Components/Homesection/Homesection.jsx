import style from './Homesection.module.css';
import { MdArrowDropDown } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { LiaMosqueSolid } from "react-icons/lia";
import { useEffect, useState } from 'react';
import { CgProfile } from "react-icons/cg";



const Homesection = () => {
    const img = 'https://iqftest.my.canva.site/media/37f2dcba47e58dbe18b3a1be58d76185.jpg';
    const [comments, setcomments] = useState([]);
    const img2 = 'https://iqftest.my.canva.site/media/1ee85b74574a5ecc1fd2746188d633f3.jpg';


    const getData = async () => {
        try {
            await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
                .then(async (res) => {
                    const fnal = await res.json();
                    await setcomments(fnal)
                  
                })

        } catch (er) {
            console.log(er);
        }
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div className="d-md-flex ">
            <div className="col-md-7 ">
                <div className='d-flex  justify-content-between'>
                    <div className={`${style.imgdiv} d-flex `}>
                        <img src={img} width={100} className='rounded-circle' />
                        <h4>Ustazah Anum Muneer</h4>
                    </div>
                    <div className={`${style.icon} d-flex`}>
                        <p>All Times</p>
                        <MdArrowDropDown className='fs-4' />

                    </div>
                </div>
                <div className='border p-3 mt-3 rounded-3 d-flex justify-content-between'>
                    <div className='bg-success text-white col-6 justify-content-around text-center rounded-3 py-2 d-flex align-items-center'>
                        <div >
                            Total Students
                            <h6>50 Students</h6>
                        </div>
                        <div className='d-flex flex-column'>
                            <IoMdTrendingUp className='fs-3' />
                            +50%
                        </div>

                    </div>
                    <div className='border  col-5 justify-content-around text-center rounded-3 py-2 d-flex align-items-center'>
                        <div >
                            Total Students
                            <h6>50 Students</h6>
                        </div>
                        <div className='d-flex flex-column'>
                            <IoMdTrendingUp className='fs-3 text-danger' />
                            +50%
                        </div>

                    </div>
                </div>
                <div className=''>
                    {
                        comments.length != 0 &&
                        comments.map((res, i) => {
                            return (
                                <div className='mt-3'>
                                    <div className=''>
                                        <CgProfile className='fs-1  text-success' />
                                        <h6>{res.name}</h6>
                                        <div>
                                            {res.email}
                                            {res.body}
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>


            <div className="col-md-5 ">
                <div className='d-flex align-items-center justify-content-between'>
                    <h4>Courses</h4>
                    <div className={`${style.icon} d-flex`}>
                        <p>Selected</p>
                        <MdArrowDropDown className='fs-4 text-success' />
                    </div>
                </div>

                <div className=' mt-5 px-4 '>
                    <div className='d-flex border-bottom'>
                        <LiaMosqueSolid className={`${style.icon} fs-1`} />
                        <h6 className='ms-2'>Fundamentals of
                            Arabic Grammar
                            and Morphology</h6>
                        <h6 className={`${style.icon}  `} >11 Months</h6>
                    </div>
                </div>
                <div className=' mt-5 px-4 '>
                    <div className='d-flex border-bottom'>
                        <LiaMosqueSolid className={`${style.icon} fs-1`} />
                        <h6 className='ms-2'>Fundamentals of
                            Arabic Grammar
                            and Morphology</h6>
                        <h6 className={`${style.icon}  `} >11 Months</h6>
                    </div>
                </div>
                <div className=' mt-5 px-4 '>
                    <div className='d-flex '>
                        <LiaMosqueSolid className={`${style.icon} fs-1`} />
                        <h6 className='ms-2'>
                            Quranic Rhetoric
                            (and Eloquence)
                        </h6>
                        <h6 className={`${style.icon}  `} >11 Months</h6>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-between mt-3'>
                    <h4>Assignment</h4>
                    <div className={`${style.icon} d-flex`}>
                        <p>All</p>
                        <MdArrowDropDown className='fs-4 text-success' />
                    </div>
                </div>

                <div className=' mt-4'>
                    <div className='d-flex'>
                        <img src={img2} width={100} className='rounded-3' />
                        <div className='ms-3'>
                            <h6>
                                Quranic Tajweed
                            </h6>
                            <div className=''>
                                Yesterday, 10:30 AM
                                The task has been submitted.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Homesection;