/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'
import NavLinkImage from "../images/navlinkimg.png";

const Navbar = () => {
  return (
    <Popover className="relative text-white ">
      <div className=" mx-auto sm:px-6 my-nav" >
        <div className="md:h-1/5 flex justify-between items-center md:justify-start md:space-x-10 pt-8 md:pt-12 md:pl-10">
          <div className="flex justify-between items-center lg:w-0 md:pl-6 h-fit">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <h1 className='text-3xl font-bold'>Merka</h1>
            </a>
          </div>
          <div className="-mr-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="relative z-20 hidden md:flex space-x-10 md:w-full flex-1 md:justify-center md:items-center">
           

            <NavLink className={"text-xl font-semibold "} to={"/home"}>Home</NavLink>
            <NavLink className={"text-xl font-semibold "} to={"/projects"}>Projects</NavLink>
            <NavLink className={"text-xl font-semibold "} to={"/service"}>Service</NavLink>
            <NavLink className={"text-xl font-semibold "} to={"/blog"}>Blog</NavLink>
          </Popover.Group>
            <img className='hidden md:block h-fit w-32 absolute md:right-44 top-6 right-4' srcSet={NavLinkImage} alt="nav image print"/>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6">
              <div className="flex items-center justify-between text-black">
                <h1 className='text-xl font-semibold pl-4'>Merka</h1>
                <div className="mr-4">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className=" mt-6">
                <nav className=" grid gap-y-3 text-black justify-center text-center font-semibold text-blue-600">
                 
                  <NavLink to={"/home"}>Home</NavLink>
                  <NavLink to={"/projects"}>Projects</NavLink>
                  <NavLink to={"/service"}>Service</NavLink>
                  <NavLink to={"/blog"}>Blog</NavLink>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
export default Navbar;