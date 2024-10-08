import { useNavigation } from "react-router-dom";
import Loader from "../Shared/Loader";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Check if the environment variable is loaded

const stripePromise = loadStripe(import.meta.env.VITE_REACT_APP_stripe_pk);

function Payment() {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center gap-4 justify-center">
      <h1 className="text-4xl font-bold text-purple-900"> Payment </h1>
      <div className="w-96">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
}

export default Payment;
