/* eslint-disable */
import { useState } from "react";
import bg from "../../../assets/image/bookingbg.png";
import square from "../../../assets/image/Square.png";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { PrimaryButton } from "../../../Components/PrimaryButton";

function BookForm() {
  const [formData, setFormData] = useState();
  const { register, handleSubmit, reset } = useForm();

  const handleBooking = (data) => {
    setFormData(data);
    toast.success("Your Booking has been Successful");
    console.log(data);
    reset();
  };

  return (
    <div
      className="flex flex-col justify-center mx-auto min-h-screen w-full px-4 py-8 lg:px-8"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="text-white text-left max-w-4xl mx-auto mb-8 lg:mx-28 lg:ml-[5%] lg:mt-20">
        <div className="flex gap-2 items-center">
          <img src={square} alt="" className="w-4 h-4" />
          <h4 className="text-lg md:text-xl text-[#8E1B0F]">Book Now</h4>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold uppercase my-4">
          Book Your Table
        </h1>
        <p className="text-sm md:text-base leading-relaxed">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo{" "}
          <br className="hidden md:block" />
          molestie vel, ornare non id blandit netus.
        </p>

        <form
          className="flex flex-col gap-4 w-full max-w-2xl items-center mt-5"
          onSubmit={handleSubmit(handleBooking)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <input
              type="text"
              placeholder="Your Name *"
              className="input bg-transparent w-full border border-white text-white placeholder-white py-2 px-3 "
              {...register("name", { required: true })}
            />
            <input
              type="email"
              placeholder="Total Email"
              className="input bg-transparent w-full border border-white text-white placeholder-white py-2 px-3 "
              {...register("email", { required: true })}
            />
            <input
              type="date"
              placeholder="Reservation Date"
              className="input bg-transparent w-full border border-white text-white placeholder-white py-2 px-3 "
              {...register("date", { required: true })}
            />
            <input
              type="number"
              placeholder="Total People"
              className="input bg-transparent w-full border border-white text-white placeholder-white py-2 px-3 "
              {...register("guests", { required: true })}
            />
          </div>
          <textarea
            placeholder="Message"
            className="textarea w-full bg-transparent border border-white text-white placeholder-white py-2 px-3 h-36"
            {...register("message", { required: true })}
          />
          <div className="w-full text-left">
            <PrimaryButton className="px-6 py-2" type="submit">
              BOOK NOW
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
