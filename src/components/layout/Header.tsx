import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Button } from 'flowbite-react';

const Header = () => {
  return (
    <Navbar fluid rounded>
        <Navbar.Brand href='#' className='text-sky-400 dark:text-sky-500'>
            <Navbar.Toggle />
            <span className="[&>svg]:ml-2 [&>svg]:mr-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:lg:ml-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
            </span>
        </Navbar.Brand>
        <div className="flex items-center md:order-2">
            <Link to='/login' className='bg-white hover:bg-gray-100 text-sky-600 mr-6 px-3 py-2'>LOGIN</Link>
            <form action="/signup" method='get'>
                <Button type="submit" className='bg-sky-600'>
                    SIGNUP FOR FREE 
                </Button>
            </form>
            
        </div>
        <Navbar.Collapse>
            <Navbar.Link active href='/home'>
                <p>Home</p>
            </Navbar.Link>
            <Navbar.Link href='#'>
                About
            </Navbar.Link>
            <Navbar.Link href='#'>
                Sevices
            </Navbar.Link>
            <Navbar.Link href='#'>
                Pricing
            </Navbar.Link>
            <Navbar.Link href='#'>
                Contact
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;
