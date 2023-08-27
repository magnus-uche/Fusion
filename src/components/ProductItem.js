import React, { useState, useEffect } from "react";
// import Product from "./Product";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
import HeroItems from "./heroitem/heroitem";
import Carosel from "./Carosel";
import Categories from "./Categories";
import "./ProductItem.css";
import { heroCategories, todaysdeal } from "../data";
import Footer from "./Footer/Footer";
import TodayDeal from "./todayDeal";

const ProductItem = () => {
  const { products } = useGlobalContext();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  const getDataById = (arr, id) => {
    const item = [];
    for (let index = 0; index < arr.length; index++) {
      if (id.includes(arr[index].id)) {
        item.push(arr[index]);
      }
    }
    return item;
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sponsoredItem = getDataById(todaysdeal, [27, 34, 29, 25, 32, 35]);
  const todays_deal = getDataById(todaysdeal, [23, 30, 26, 28, 24, 36]);

  const handleVeiw =  () => {
  setScreenWidth(707)
  }

  return (
    <>
      <section className="product_item_container">
        <Categories />
        <div className="hero-title">
          <Carosel />
        </div>
        <div className="hero_categories">
          {heroCategories.map((category, index) => {
            const { linkTittle, link } = category;

            return (
              <Link to={link} key={index}>
                {/* <button>{linkTittle}</button> */}
              </Link>
            );
          })}
        </div>
        <TodayDeal
          deal={todays_deal}
          title="Today's Deal"
          ClassName="deal_list"
        />

        <div className="divider"></div>

        <TodayDeal deal={sponsoredItem} title="sponsored" className="sponsor" />
        <div className="products-center">
          <HeroItems />
        </div>

        <h4>kundum Top Nigerian shopping site.</h4>
        <p>
          Experience shopping redefined at Kundum, Nigeria's leading online
          marketplace. Explore a vast array of products at unbeatable prices,
          catering to your every need. From electronics to fashion, home goods
          to beauty essentials, we curate quality and variety{" "}
          {screenWidth < 700 ? (
          <span><p onClick={handleVeiw} style={{color: "#ff479d", fontSize: "0.8em"}}>View more...</p></span>
          ) : (
            <>
              Our platform offers a seamless journey with gift vouchers,
              promotions, and swift bulk delivery options. Whether you're a tech
              enthusiast, a fashionista, or a home decor aficionado, Kundum is
              your one-stop shop. Enjoy free shipping on select items,
              discounted rates for bulk orders, and secure payment solutions.
              Don't miss our exclusive online sales events, timed perfectly for
              special occasions. At Kundum, shopping is a pleasure. Embrace
              lifestyle excellence with ease, convenience, and the finest
              products. Discover Kundum today.
            </>
          )}
        </p>
      
      </section>
      <Footer />
    </>
  );
};

export default ProductItem;
