import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsFacebook,BsInstagram,BsTwitter,BsGithub} from 'react-icons/bs'

export const FotterComponent = () => {
    return (
        <Footer container className="border border-t-8 border-teal-500">
            <div className='w-full max-w-7xl mx-auto' >
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                    <Link to='/' className='self-center font-semibold whitespace-nowrap text-lg sm:text-xl dark:text-white'>
                        <span className='px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>Varun Blog</span>
                    </Link>
                    </div>
                </div>
                <div className='grid grid-col-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>

                    <div >
                        <Footer.Title title='About' />
                        <Footer.LinkGroup col>
                            <Footer.Link href="https://www.linkedin.com/in/varun-rao-2000/" target='_blank' rel="noopner noreferrer          ">
                                Linkedin
                            </Footer.Link>
                            <Footer.Link href="/about" target='_blank' rel="noopner noreferrer          ">
                                Varun's Blog
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>

                    <div >
                        <Footer.Title title='Follow Us' />
                        <Footer.LinkGroup col>
                            <Footer.Link href="https://github.com/varun3019" target='_blank' rel="noopner noreferrer          ">
                                Github
                            </Footer.Link>
                            <Footer.Link href="/about" target='_blank' rel="noopner noreferrer          ">
                                Varun's Blog
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
                </div>
                <Footer.Divider/>
                <div className='w-full sm:flex sm:items-center sm:justify-between  '>
                    <Footer.Copyright href='#' by='varuns blog' year={new Date().getFullYear()}/>
                </div>
                <div className="flex   gap-6 sm:mt-0  sm:justify-center ">
                    <Footer.Icon href='#' icon={BsFacebook}/>
                    <Footer.Icon href='#' icon={BsInstagram}/>
                    <Footer.Icon href='https://twitter.com/Varunra65924691' icon={BsTwitter}/>
                    <Footer.Icon href='https://github.com/varun3019' icon={BsGithub}/>
                </div>
            </div>
        </Footer>
    )
}
