import React from "react";
import { Card } from "flowbite-react";

const Article = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 pb-4 text-center text-3xl font-bold">
          Latest articles
        </h2>

        <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
          <div className="mb-6 lg:mb-0">
            <Card
              className="shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
              imgSrc="https://mdbcdn.b-cdn.net/img/new/standard/city/024.webp"
            >
              <div className="p-6">
                <h5 className="mb-3 text-lg font-bold">My paradise</h5>
                <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                  <small>
                    Published <u>13.01.2022</u> by
                    <a href="#!">Anna Maria Doe</a>
                  </small>
                </p>
                <p className="mb-4 pb-2">
                  Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                  placerat vulputate. Ut vulputate est non quam dignissim
                  elementum. Donec a ullamcorper diam.
                </p>
                <a
                  href="#!"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="rounded-full bg-sky-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-sky-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Read more
                </a>
              </div>
            </Card>
          </div>

          <div className="mb-6 lg:mb-0">
            <Card
              className="shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
              imgSrc="https://mdbcdn.b-cdn.net/img/new/standard/city/031.webp"
            >
              <div className="p-6">
                <h5 className="mb-3 text-lg font-bold">Travel to Italy</h5>
                <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                  <small>
                    Published <u>12.01.2022</u> by
                    <a href="#!">Halley Frank</a>
                  </small>
                </p>
                <p className="mb-4 pb-2">
                  Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet
                  diam orci, nec ornare metus semper sed. Integer volutpat
                  ornare erat sit amet rutrum.
                </p>
                <a
                  href="#!"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="rounded-full bg-sky-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-sky-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Read more
                </a>
              </div>
            </Card>
          </div>

          <div className="mb-0">
            <Card
              className="shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
              imgSrc="https://mdbcdn.b-cdn.net/img/new/standard/city/081.webp"
            >
              <div className="p-6">
                <h5 className="mb-3 text-lg font-bold">Chasing the sun</h5>
                <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                  <small>
                    Published <u>10.01.2022</u> by
                    <a href="#!">Joe Svan</a>
                  </small>
                </p>
                <p className="mb-4 pb-2">
                  Curabitur tristique, mi a mollis sagittis, metus felis mattis
                  arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
                  massa volutpat feugiat. Donec.
                </p>
                <a
                  href="#!"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="rounded-full bg-sky-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-sky-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Read more
                </a>
              </div>
            </Card>
          </div>

          <div className="mb-0">
            <Card
              className="shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
              imgSrc="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.jpg"
            >
              <div className="p-6">
                <h5 className="mb-3 text-lg font-bold">Nostalgic waves</h5>
                <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                  <small>
                    Published <u>10.01.2022</u> by
                    <a href="#!">Joe Svan</a>
                  </small>
                </p>
                <p className="mb-4 pb-2">
                  Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                  placerat vulputate. Ut vulputate est non quam dignissim
                  elementum. Donec a ullamcorper diam.
                </p>
                <a
                  href="#!"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="rounded-full bg-sky-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-sky-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Read more
                </a>
              </div>
            </Card>
          </div>

          <div className="mb-0">
            <Card
              className="shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
              imgSrc="https://mdbcdn.b-cdn.net/img/new/standard/nature/114.jpg"
            >
              <div className="p-6">
                <h5 className="mb-3 text-lg font-bold">Winter wildlife</h5>
                <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                  <small>
                    Published <u>12.01.2022</u> by
                    <a href="#!">Halley Frank</a>
                  </small>
                </p>
                <p className="mb-4 pb-2">
                  Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet
                  diam orci, nec ornare metus semper sed. Integer volutpat
                  ornare erat sit amet rutrum.
                </p>
                <a
                  href="#!"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="rounded-full bg-sky-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-sky-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Read more
                </a>
              </div>
            </Card>
          </div>

          <div className="mb-0">
            <Card
              className="shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
              imgSrc="https://mdbcdn.b-cdn.net/img/new/standard/city/028.jpg"
            >
              <div className="p-6">
                <h5 className="mb-3 text-lg font-bold">Camping travel</h5>
                <p className="mb-4 text-neutral-500 dark:text-neutral-300">
                  <small>
                    Published <u>13.01.2022</u> by
                    <a href="#!">Anna Maria Doe</a>
                  </small>
                </p>
                <p className="mb-4 pb-2">
                  Curabitur tristique, mi a mollis sagittis, metus felis mattis
                  arcu, non vehicula nisl dui quis diam. Mauris ut risus eget
                  massa volutpat feugiat.
                </p>
                <a
                  href="#!"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="rounded-full bg-sky-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-sky-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Read more
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
