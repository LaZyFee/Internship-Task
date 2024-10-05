import { useForm } from "react-hook-form";
import { PrimaryButton } from "../../Components/PrimaryButton";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Process form data here
  };
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 lg:mb-20">
      {/* Billing Details Section */}
      <div className=" p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">First Name *</label>
              <input
                type="text"
                {...register("firstName", {
                  required: "First Name is required",
                })}
                className={`input input-bordered w-full ${
                  errors.firstName ? "input-error" : ""
                }`}
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name *</label>
              <input
                type="text"
                {...register("lastName", { required: "Last Name is required" })}
                className={`input input-bordered w-full ${
                  errors.lastName ? "input-error" : ""
                }`}
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">
              Company Name (Optional)
            </label>
            <input
              type="text"
              {...register("companyName")}
              className="input input-bordered w-full"
              placeholder="Company Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Country / Region *
            </label>
            <select
              {...register("country", { required: "Country is required" })}
              className={`select select-bordered w-full ${
                errors.country ? "input-error" : ""
              }`}
            >
              <option value="">Select a country / region</option>
              {/* Add more options */}
            </select>
            {errors.country && (
              <p className="text-red-500">{errors.country.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">
              Street Address *
            </label>
            <input
              type="text"
              {...register("streetAddress", {
                required: "Street Address is required",
              })}
              className={`input input-bordered w-full ${
                errors.streetAddress ? "input-error" : ""
              }`}
              placeholder="Street Address"
            />
            {errors.streetAddress && (
              <p className="text-red-500">{errors.streetAddress.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Town / City *</label>
            <input
              type="text"
              {...register("townCity", { required: "Town / City is required" })}
              className={`input input-bordered w-full ${
                errors.townCity ? "input-error" : ""
              }`}
              placeholder="Town / City"
            />
            {errors.townCity && (
              <p className="text-red-500">{errors.townCity.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">
              Postcode / ZIP *
            </label>
            <input
              type="text"
              {...register("postcode", { required: "Postcode is required" })}
              className={`input input-bordered w-full ${
                errors.postcode ? "input-error" : ""
              }`}
              placeholder="Postcode / ZIP"
            />
            {errors.postcode && (
              <p className="text-red-500">{errors.postcode.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Phone *</label>
            <input
              type="text"
              {...register("phone", { required: "Phone is required" })}
              className={`input input-bordered w-full ${
                errors.phone ? "input-error" : ""
              }`}
              placeholder="Phone"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Email *</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className={`input input-bordered w-full ${
                errors.email ? "input-error" : ""
              }`}
              placeholder="Email address"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
        </form>
      </div>

      {/* Order Summary Section */}
      <div className="flex flex-col gap-4 p-6 rounded-lg shadow-lg mt-8">
        <div className="p-4 rounded-xl space-y-4 border-2 border-gradient-to-r from-[#007991] to-[#78FFD6]">
          <h3 className="text-xl font-semibold">Available Addons</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="addons"
                  className="radio radio-primary"
                />
                <label className="ml-2">7 day payouts vs 14 Days</label>
              </div>
              <p className="ml-4">+5%</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="addons"
                    className="radio radio-primary"
                  />
                  <label className="ml-2">90% profit split vs 85% </label>
                </div>
                <p className="ml-4">+0%</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="addons"
                    className="radio radio-primary"
                  />
                  <label className="ml-2">Both (Save 5%)</label>
                </div>
                <p className="ml-4">+0%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-base-100 p-4 rounded-lg shadow-md space-y-4">
          <h2 className="text-2xl font-semibold mb-6">Your Order</h2>

          <div className="mt-6">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold my-2">Product</h3>
              <h3>Subtotal</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>2 Step - Power Challenge (100K) × 1</span>
                <span>$400.00</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$400.00</span>
              </div>
              <div className="flex justify-between">
                <span>7 day payouts vs 14 Days</span>
                <span>$20.00</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$420.00</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Tazapay</h3>

            <p className="text-xs text-gray-500 mt-2">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
          </div>

          <div className="mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="ml-2 text-sm">
                I have read and agree to the website terms and conditions *
              </span>
            </label>
            <label className="flex items-center mt-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="ml-2 text-sm">
                Create a new Account with these information
              </span>
            </label>
          </div>

          <NavLink
            className="btn btn-info bg-primary-gradient text-white rounded-md lg:px-6 w-full mt-6"
            to="/payment"
          >
            {" "}
            <Icon icon="simple-icons:startrek" /> Procced to Payment
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
