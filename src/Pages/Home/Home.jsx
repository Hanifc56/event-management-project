import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Services from "./Services";

const Home = () => {
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
      <Services></Services>

      <Footer></Footer>
    </div>
  );
};

export default Home;
