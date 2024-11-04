// AboutPage.js
import Tab from "../../../Components/Tab";
import { PrimaryButton } from "../../../Components/PrimaryButton";
import { FiPhoneCall } from "react-icons/fi";

function AboutPage() {
  return (
    <>
      <Tab />
      <div className="mt-4">
        {" "}
        {/* Add margin for spacing */}
        <h1 className="text-4xl font-bold uppercase">
          Exceptional culinary experience and delicious food
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
          sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
          bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur
          adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna
          minim veniam nostrud exercitation.
        </p>
        <div className="flex items-center gap-8 mt-4">
          <PrimaryButton className="py-4 px-4">ABOUT MORE</PrimaryButton>
          <div className="flex items-center gap-2 font-bold">
            <FiPhoneCall className=" text-rose-500" /> +88 3426 739 485
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
