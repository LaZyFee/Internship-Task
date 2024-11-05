import footerBg from "../../../assets/image/Footer.png";
import { FaRegClock } from "react-icons/fa";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import fb from "../../../assets/image/Fb.png";
import insta from "../../../assets/image/instagram.png";
import twitter from "../../../assets/image/X.png";
import linkedin from "../../../assets/image/linkedin.png";
function Footer() {
  return (
    <div
      className="flex flex-col justify-center items-center mx-auto min-h-screen w-full mt-10 text-white"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-xl md:text-3xl font-bold uppercase mt-10">
        We ready to have you the best dining experiences
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-20 mt-10">
        <div className="flex gap-2 items-center flex-col mb-8">
          <FaRegClock className="text-3xl text-yellow-500 mb-5" />
          <h5 className="font-bold uppercase mb-4">Opening Hours</h5>
          <p className="text-xs">Monday - Sunday</p>
          <p className="text-xs">9:00 AM to 11:30 PM</p>
        </div>

        <div className="flex gap-2 items-center flex-col mb-8">
          <FiPhoneCall className="text-3xl text-yellow-500 mb-5" />
          <h5 className="font-bold uppercase mb-4">Let's Talk</h5>
          <p className="text-xs">Phone: 1-800-222-4545</p>
          <p className="text-xs">Fax: 1-800-222-4545</p>
        </div>

        <div className="flex gap-2 items-center flex-col mb-8">
          <FiMail className="text-3xl text-yellow-500 mb-5" />
          <h5 className="font-bold uppercase mb-4">Book a Table</h5>
          <p className="text-xs">Email: demo@website.com</p>
          <p className="text-xs">Support: support@website.com</p>
        </div>

        <div className="flex gap-2 items-center flex-col mb-8">
          <CiLocationOn className="text-3xl text-yellow-500 mb-5" />
          <h5 className="font-bold uppercase mb-4">Our Address</h5>
          <p className="text-xs">123 Stree New York City, USA</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-8 lg:mt-20">
        <img src={fb} alt="" />
        <img src={twitter} alt="" />
        <img src={insta} alt="" />
        <img src={linkedin} alt="" />
      </div>
      <h6 className="my-5 text-xl">
        © 2024. <span className="text-yellow-500">LazyFee</span> All Rights
        Reserved
      </h6>
    </div>
  );
}

export default Footer;
