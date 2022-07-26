import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SharedStyle.css';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    return (
        <nav className='container w-auto mx-auto sticky flex flex-wrap items-center justify-between px-2 py-3 mb-3'>
            <div className="w-full relative flex justify-between lg:w-auto ">
                <h1 className="text-2xl py-3 text-purple-800 font-semibold">E-Commerce</h1>
                <button
                    className="text-gray-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNav(!nav)}
                >
                    {
                        !nav ? "True" : "False"
                    }
                </button>

            </div>
            <div className={
                "lg:flex items-center" +
                (nav ? " flex" : " hidden")
            }>
                <div className="flex flex-col lg:flex-row list-none">
                    <Link class="nav-link nav-link-ltr" to="/">Home</Link>
                    <Link class="nav-link nav-link-ltr" to="/">Category</Link>
                    <Link class="nav-link nav-link-ltr" to="/">Contact</Link>
                    <Link class="nav-link nav-link-ltr" to="/">Sign in</Link>
                    <Link class="nav-link nav-link-ltr" to="/">Sign up</Link>
                </div>
            </div>

        </nav>
    )
}

export default NavBar

