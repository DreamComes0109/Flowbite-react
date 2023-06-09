import React from "react";
import { Button, Card, TextInput } from "flowbite-react";

const Newsletter = () => {
  return (
    <div className="container my-24 mx-auto md:px-6 xl:px-32">
      <section className="mb-32 text-center lg:text-left">
        <Card className="shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="flex flex-wrap items-center">
            <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/004.jpg"
                alt="Trendy Pants and Shoes"
                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              />
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="mb-6 text-3xl font-bold">
                  Do not miss any updates.
                  <br />
                  <span className="text-primary dark:text-primary-400">
                    Subscribe to the newsletter
                  </span>
                </h2>
                <p className="mb-12 text-neutral-500 dark:text-neutral-300">
                  We will write rarely and only high-quality content.
                </p>
                <div className="mb-6 flex-row md:mb-0 md:flex">
                  <div
                    className="relative mb-3 w-full md:mr-3 md:mb-0"
                    data-te-input-wrapper-init
                  >
                    <TextInput
                      className="bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Enter your email"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Newsletter;
