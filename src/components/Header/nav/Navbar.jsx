import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {NavLink } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(true)
    return (
        <div>
            {/* for list item for mobile device */}
            <div className='md:hidden'>
                <div className='text-4xl' onClick={() => setOpen(!open)}>
                    {
                        open ? <AiOutlineMenu></AiOutlineMenu>
                            : <AiOutlineClose></AiOutlineClose>
                    }
                </div>
                {/* For menu list item */}
                
                <ul className={`bg-[#000] ${open ? 'hidden' : ''}  text-[#FFF] py-5 absolute w-56 z-50`}>
                    <li className='p-2 hover:bg-lime-200 hover:text-[#000]'>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className='p-2 hover:bg-lime-200 hover:text-[#000]'>
                        <NavLink to="/Chart">Chart</NavLink>
                    </li>
                    <li className='p-2 hover:bg-lime-200 hover:text-[#000]'>
                        <NavLink to="/About">About</NavLink>
                    </li>
                    <li className='p-2 hover:bg-lime-200 hover:text-[#000]'>
                        <NavLink to="/Service">Service</NavLink>
                    </li>
                    <li className='p-2 hover:bg-lime-200 hover:text-[#000]'>
                        <NavLink to="/Users">Users</NavLink>
                    </li>
                </ul>
            </div>
            {/* for list item for all device without mobile */}
            <div className='hidden md:block'>
                <ul className={`bg-[#000] text-[#FFF] flex `}>
                    <li className='p-2 hover:bg-lime-200 hover:text-[#000]'>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className='p-2 hover:bg-lime-200 hover:text-[#000]'>
                        <NavLink to="/Chart">Chart</NavLink>
                    </li>
                    <li className='p-2 hover:bg-lime-200 hover:text-[#000]'>
                        <NavLink to="/About">About</NavLink>
                    </li>
                    <li className='p-2 hover:bg-lime-200 hover:text-[#000]'>
                        <NavLink to="/Service">Service</NavLink>
                    </li>
                    <li className='p-2 hover:bg-lime-200 hover:text-[#000]'>
                        <NavLink to="/Users">Users</NavLink>
                    </li>
                    <li className='p-2 hover:bg-lime-200 hover:text-[#000]'>
                        <NavLink to="/Post">Post</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;