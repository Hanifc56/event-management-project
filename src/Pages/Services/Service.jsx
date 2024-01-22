import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import {
  ArrowRightCircleIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { toast } from "sonner";

const Service = () => {
  const { id } = useParams();
  const services = useLoaderData();
  const service = services.find((service) => service.id === parseInt(id));
  console.log(service);

  return (
    <div>
      <Navbar></Navbar>
      <div className="overflow-hidden bg-white py-8 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  {service.category}
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {service.title}
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {service.detailed_descriptions}
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900"></dt>{" "}
                    <dd className="inline"></dd>
                  </div>
                </dl>
              </div>
            </div>
            <img
              src={service.img}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
      <div className="bg-white pb-8 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Book Now!
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to manage you event
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Experience the magic of events brought to life by our dedicated
              team at our Event Management Company. We blend creativity,
              precision, and a whole lot of good vibes to create unforgettable
              moments. Join us in making every event a masterpiece of joy and
              celebration! 😊
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <ArrowRightCircleIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {service.key_features.gathering}
                </dt>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <ArrowRightCircleIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {service.key_features.festivities}
                </dt>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <ArrowRightCircleIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {service.key_features.memories}
                </dt>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <ArrowRightCircleIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {service.key_features.decorations}
                </dt>
              </div>
            </dl>
            <div className="text-center font-bold  text-2xl ">
              <p className="flex items-center justify-center py-5">
                Starting form :
                <CurrencyDollarIcon className="h-8 w-8 mx-2 text-green-400"></CurrencyDollarIcon>
                <span className="text-red-400">{service.price}</span>
              </p>
              <button
                onClick={() => toast.success("Successfully booked an Event!")}
                className="btn btn-outline w-2/3"
              >
                Book Your Event Today!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
