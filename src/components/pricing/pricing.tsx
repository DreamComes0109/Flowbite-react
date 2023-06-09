import React from "react";
import { Card, Button } from "flowbite-react";

const pricing = () => {
  return (
    <div className="w-full">
      <section className="mb-32">
        <div className="overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/154.jpg')] text-center text-sky-700 lg:h-[400px] h-[300px] lg:pt-[80px] pt-[55px]">
          <h2 className="mb-12 text-center text-6xl font-bold">Pricing</h2>
        </div>

        <div
          className="grid px-6 md:px-12 lg:grid-cols-3 xl:px-32"
          style={{ marginTop: "-200px" }}
        >
          <div className="p-0 py-12">
            <Card className="h-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:rounded-tr-none lg:rounded-br-none">
              <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                <p className="mb-4 text-sm uppercase">
                  <strong>Basic</strong>
                </p>
                <h3 className="mb-6 text-3xl">
                  <strong>$ 129</strong>
                  <small className="text-base text-neutral-500 dark:text-neutral-300">
                    /year
                  </small>
                </h3>

                <Button
                  className="w-full bg-sky-100 text-xs font-medium uppercase leading-normal hover:bg-sky-200"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <p className="text-sky-700">Buy</p>
                </Button>
              </div>
              <div className="p-6">
                <ol className="list-inside">
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Unlimited updates
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Git repository
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    npm installation
                  </li>
                </ol>
              </div>
            </Card>
          </div>

          <div>
            <Card
              className="h-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
              style={{ zIndex: "1" }}
            >
              <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                <p className="mb-4 text-sm uppercase">
                  <strong>Enterprise</strong>
                </p>
                <h3 className="mb-6 text-3xl">
                  <strong>$ 499</strong>
                  <small className="text-base text-neutral-500 dark:text-neutral-300">
                    /year
                  </small>
                </h3>

                <Button
                  className="w-full bg-sky-600 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-sky-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Buy
                </Button>
              </div>
              <div className="p-6">
                <ol className="list-inside">
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Unlimited updates
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Git repository
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    npm installation
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Code examples
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Premium snippets
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Premium support
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Drag&amp;Drop builder
                  </li>
                </ol>
              </div>
            </Card>
          </div>

          <div className="py-12">
            <Card className="h-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:rounded-tl-none lg:rounded-bl-none">
              <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                <p className="mb-4 text-sm uppercase">
                  <strong>Advanced</strong>
                </p>
                <h3 className="mb-6 text-3xl">
                  <strong>$ 299</strong>
                  <small className="text-base text-neutral-500 dark:text-neutral-300">
                    /year
                  </small>
                </h3>

                <Button
                  className="w-full bg-sky-100 text-xs font-medium uppercase leading-normal hover:bg-sky-200"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <p className="text-sky-700">Buy</p>
                </Button>
              </div>
              <div className="p-6">
                <ol className="list-inside">
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Unlimited updates
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Git repository
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    npm installation
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Code examples
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Premium snippets
                  </li>
                </ol>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default pricing;
