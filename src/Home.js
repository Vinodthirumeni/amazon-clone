import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/AugOffers/GW22Aug/DesktopHero_3000x1200._CB407658175_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="11"
          title="Cinthol Charcoal Deep Cleansing and Deo Bath Soap – for Oil-free Skin, Pack of 3 (125g each)"
          price={252}
          rating={3}
          image="https://m.media-amazon.com/images/I/61+WrddUnQL._AC_UL320_.jpg"
        />
        <Product
          id="22"
          title="Samsung Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)"
          price={(13, 599)}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/41xg1z2h-uL._AC_US160_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="33"
          title="OneAssist 3 Years Total Appliance Protection Plan for Washing Machine from 12,001 to 18,000 - Email Delivery - No Physical Kit"
          price={31490}
          rating={2}
          image="https://m.media-amazon.com/images/I/61N7WN13e+L._AC_UY218_.jpg"
        />
        <Product
          id="44"
          title="Samsung 253 L 1 Star Frost Free Double Door Refrigerator(RT28M3022S8, Elegant Inox, Inverter Compressor"
          price={19590}
          rating={5}
          image="https://m.media-amazon.com/images/I/81eTOAZQ9PL._AC_UY218_.jpg"
        />
        <Product
          id="55"
          title="HP 14q cs2002TU 14-inch Laptop (Celeron N4020/4GB/256GB SSD/Windows 10 Home/Integrated Graphics), Jet Black"
          price={25236}
          rating={1}
          image="https://m.media-amazon.com/images/I/71-wF9anccL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="66"
          title="Samsung 27 inch (68.6 cm) Curved Bezel Less LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Display, Audio in, Heaphone Ports - LC27F591FDWXXL (Silver)"
          price={20389}
          rating={2}
          image="https://m.media-amazon.com/images/I/71Dwx3x6m9L._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}
export default Home;
