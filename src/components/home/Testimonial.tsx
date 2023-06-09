import React from "react";
import { Card, Rating } from "flowbite-react";

const Testimonial = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 pb-4 text-center text-3xl font-bold">
          Testimonials
        </h2>

        <div className="grid gap-6 md:grid-cols-3 xl:gap-x-12">
          <div className="mb-6 lg:mb-0">
            <Card
              className="h-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
              imgSrc="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
            >
              <div className="p-6">
                <h5 className="mb-2 text-lg font-bold">John Doe</h5>
                <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                  Web Developer
                </h6>
                <Rating className="justify-center mb-2">
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                </Rating>

                <p>
                  Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                  placerat vulputate. Ut vulputate est non quam dignissim
                  elementum. Donec a ullamcorper diam.
                </p>
              </div>
            </Card>
          </div>

          <div className="mb-6 lg:mb-0">
            <Card
              className="h-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
              imgSrc="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
            >
              <div className="p-6">
                <h5 className="mb-2 text-lg font-bold">Halley Frank</h5>
                <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                  Marketing Specialist
                </h6>
                <Rating className="justify-center mb-2">
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                </Rating>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium accusamus contestatur voluptatum
                  deleniti atque corrupti.
                </p>
              </div>
            </Card>
          </div>

          <div className="mb-0">
            <Card
              className="h-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
              imgSrc="https://mdbcdn.b-cdn.net/img/new/avatars/18.jpg"
            >
              <div className="p-6">
                <h5 className="mb-2 text-lg font-bold">Lisa Trey</h5>
                <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                  Public Relations
                </h6>
                <Rating className="justify-center mb-2">
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
                </Rating>
                <p>
                  Enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid commodi quis
                  nostrum minima.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
