import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10">
        <aside>
          <p className="font-bold text-3xl">
            J&J Events. <br />
            <span className="text-lg font-semibold">
              {" "}
              Providing Event Management since 1992
            </span>
          </p>
          <p>
            <small>Copyright © 2024 - All right reserved</small>
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <a>
              <FaTwitter></FaTwitter>
            </a>
            <a>
              <FaYoutube></FaYoutube>
            </a>
            <a>
              <FaFacebook></FaFacebook>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
