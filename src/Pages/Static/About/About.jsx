import aboutImage from "../../../assets/image/about.png";
import AboutPage from "./AboutPage";
import button1 from "../../../assets/image/button1.png";
import button2 from "../../../assets/image/button2.png";
import button3 from "../../../assets/image/button3.png";

function About() {
  return (
    <div className="mx-5 my-5 lg:mx-20 lg:my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
        <img src={aboutImage} alt="about" className="" />
        <div className=" ">
          <AboutPage />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10">
        <div className="flex gap-4 items-center">
          <img src={button1} alt="" />
          <div>
            <h5 className="font-bold uppercase">Fast Delivery</h5>
            <p>Within 30 minutes</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <img src={button2} alt="" />
          <div>
            <h5 className="font-bold uppercase">Absoulate Dining</h5>
            <p>Best buffet resturant</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <img src={button3} alt="" />
          <div>
            <h5 className="font-bold uppercase">Pickup Delivery</h5>
            <p>Grab your food order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
