import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import NewsLetter from "./NewsLetter";
import Services from "./Services";
import Team from "./Team";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-between hero py-10 flex-col gap-5  lg:flex-row">
        <div className="flex gap-8  justify-between flex-col  lg:flex-row-reverse">
          <div className=" mr-12">
            <h1 className="text-5xl font-extrabold">
              Event Planning
              <br />
              made Easier
              <br />
              For You...
            </h1>
            <p className="py-6">
              Unleash the magic of flawless event management.
              <br />
              From weddings to birthdays, we turn your visions into reality.
              <br />
              Let us craft unforgettable moments together
            </p>
            <button className="btn btn-outline">Get Started</button>
          </div>
        </div>
        <div className="">
          <img
            src="https://i.ibb.co/Ryd0xYr/pexels-emma-bauso-2253831.jpg"
            className="md:max-w-lg rounded-lg shadow-2xl"
          />
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="10"
        data-aos-duration="300"
        data-aos-easing="ease-in-out"
        data-aos-mirror="fase"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <h1 className="text-3xl font-bold py-4 text-center">Our Services</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
          {services.map((service) => (
            <Services key={service.id} service={service}></Services>
          ))}
        </div>
      </div>
      <Team></Team>
      <NewsLetter></NewsLetter>

      <Footer></Footer>
    </div>
  );
};

export default Home;
