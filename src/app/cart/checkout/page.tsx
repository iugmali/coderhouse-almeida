import SignupForm from "@/components/user/SignupForm";
import {auth} from "@/lib/auth";
import Checkout from "@/components/cart/Checkout";
import {placeOrder} from "@/lib/actions/order";
import {signUp} from "@/lib/actions/auth";

const CheckoutPage = async () => {
  const session = await auth();

  return (
    <main className={`w-full flex flex-col mt-4`}>
      {(session && session.user) ? (
        <Checkout user={session.user} placeOrder={placeOrder} />
      ) : (
        <SignupForm signUp={signUp} />
      )}
    </main>
  );
}

export default CheckoutPage;
