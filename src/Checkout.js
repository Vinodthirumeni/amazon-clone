import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider"; //context
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue(); //context
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/AugOffers/GW22Aug/DesktopHero_3000x1200._CB407658175_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping basket is empty</h2>
            <p>
              You have no items in the basket please add items to proceed
              further.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                item={item.id}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}
export default Checkout;
