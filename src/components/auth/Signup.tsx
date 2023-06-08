import React from 'react'
import { Card, Label, TextInput, Button, Checkbox } from "flowbite-react";
import { AiOutlineFacebook, AiOutlineGoogle, AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";

const Signup = () => {
  return (
    <section className='background-radial-gradient lg:h-screen overflow-hidden'>
        <div className="px-6 py-12 text-center md:px-12 lg:py-24 lg:text-left">
            <div className="w-100 mx-auto text-neutral-800 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="mt-12 lg:mt-0" style={{zIndex: "10"}}>
                        <h1
                            className="mt-0 mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
                            The best offer <br /><span className="text-[hsl(218,81%,75%)]">for your business</span>
                        </h1>
                        <p className="opacity-70 text-[hsl(218,81%,85%)]">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Temporibus, expedita iusto veniam atque, magni tempora
                            mollitia dolorum consequatur nulla, neque debitis eos
                            reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
                        </p>
                    </div>
                    <div className="relative mb-12 lg:mb-0">
                        <div id="radius-shape-1" className="absolute rounded-full shadow-lg"></div>
                        <div id="radius-shape-2" className="absolute shadow-lg"></div>
                        <Card className='relative'>
                            <form className="flex flex-col gap-4">
                                <div className='grid md:grid-cols-2 md:gap-6'>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label
                                            htmlFor="firstName"
                                            value="First Name"
                                            />
                                        </div>
                                        <TextInput
                                            id="firstName"
                                            required
                                            type="text"
                                        />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label
                                            htmlFor="lastName"
                                            value="Last Name"
                                            />
                                        </div>
                                        <TextInput
                                            id="lastName"
                                            required
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                        htmlFor="email1"
                                        value="Your email"
                                        />
                                    </div>
                                    <TextInput
                                        id="email1"
                                        required
                                        placeholder='name@example.com'
                                        type="email"
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                        htmlFor="password1"
                                        value="Your password"
                                        />
                                    </div>
                                    <TextInput
                                        id="password1"
                                        required
                                        type="password"
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox id="remember" />
                                    <Label htmlFor="remember">
                                        Remember me
                                    </Label>
                                </div>
                                <Button type="submit">
                                    SIGN UP
                                </Button>
                                <div className="text-center">
                                    <p className="mb-6 dark:text-neutral-50">
                                    or sign up with:
                                    </p>
                                </div>
                                <div className="flex justify-center gap-3">
                                    <AiOutlineFacebook size={30} href='#' role='button' className="text-sky-700 dark:text-sky-600 hover:text-sky-600 focus:text-primary-600 dark:hover:text-sky-500 dark:focus:text-sky-500" />
                                    <AiOutlineGoogle size={30} href='#' role='button' className='text-red-700 dark:text-red-600 hover:text-red-600 focus:text-red-600 dark:hover:text-red-500 dark:focus:text-red-500' />
                                    <AiOutlineTwitter size={30} href='#' role='button' className="text-sky-700 dark:text-sky-600 hover:text-sky-600 focus:text-primary-600 dark:hover:text-sky-500 dark:focus:text-sky-500" />
                                    <AiOutlineGithub size={30} href='#' role='button' />
                                </div>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Signup;