import Reactangle4 from "../../../assets/image/Rectangle 4.png";
import heroImage from "../../../assets/image/Frame 2080.png";
import heroimagemobile from "../../../assets/image/heroimage.png";
import { PrimaryButton } from "../../../Components/PrimaryButton";
function Hero() {
  return (
    <div
      className="bg-[#8E1B0F]"
      style={{
        backgroundImage: `url(${Reactangle4})`,
        backgroundRepeat: "repeat",
      }}
    >
      <div className="hidden md:block">
        <img src={heroImage} alt="" />
      </div>

      <div className="flex flex-col mx-5 gap-4 md:hidden">
        <div className="flex flex-col gap-4 text-white">
          <h1 className="text-3xl mt-5 font-bold uppercase">
            Taste the authentic Saudi cuisine
          </h1>
          <p className="text-xl">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <PrimaryButton className="w-1/2 inline-block">
            EXPLORE MENU
          </PrimaryButton>
        </div>
        <img src={heroimagemobile} alt="" />
      </div>
    </div>
  );
}

export default Hero;
