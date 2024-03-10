import { Navbar, TextInput, Button } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'

export default function Header() {
    const path = useLocation().pathname;
    return (
        <Navbar className='border-b-2'>
            <Link to='/' className='self-center font-semibold whitespace-nowrap text-small sm:text-xl dark:text-white'>
                <span className='px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>Varun Blog</span>
            </Link>
            <form >
                <TextInput type='text'
                    placeholder='Search...'
                    rightIcon={AiOutlineSearch}
                    className='hidden lg:inline' ></TextInput>
            </form>
            <Button className='w-12 h-10 lg:hidden' color='grey' pill>
                <AiOutlineSearch />
            </Button>
            <div className='flex gap-2 md:order-2'>
                <Button className='hidden w-12 h-10 sm:inline' color='grey' pill>
                    <FaMoon />
                </Button>
                <Link to='/signin'>
                    <Button gradientDuoTone='purpleToBlue' >
                        SignIn
                    </Button>
                </Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse >
                <Navbar.Link active ={path==="/"} as={"div"}>
                    <Link to='/'>
                        Home
                    </Link>
                </Navbar.Link >
                <Navbar.Link active ={path==="/about"} as={"div"}>
                    <Link to='/about'>
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active ={path==="/projects"} as={"div"}>
                    <Link to='/projects'>
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
