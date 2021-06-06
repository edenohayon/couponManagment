import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import logo from '../../assets/images/logokidpick.PNG'
const userName = 'Yuval'

const Navbar = () => {
    return (
        <div className="bg-white flex py-4 px-8 items-center justify-between">
            <Link to="/" className="flex items-center">
                <img src={logo} alt="" />
                <p className="text-xl font-bold text-secondary">kidpick  |</p>
                <p className="px-2 text-primary font-semibold">Hello {userName}</p>
            </Link>
            <button className="flex items-center font-medium text-pink">
                <span className="px-1">Logout</span>
                <FiLogOut />
            </button>

        </div>
    )
}

export default Navbar
