import React, { useState, useEffect } from "react";
import Product from "./Product";
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

  const getDataById = (arr, id) => {
    const item = [];
    for (let index = 0; index < arr.length; index++) {
      if (id.includes(arr[index].id)) {
        item.push(arr[index]);
      }
    }
    return item;
  };

  const sponsoredItem = getDataById(todaysdeal, [27, 34, 29, 25, 32, 35]);
  const todays_deal = getDataById(todaysdeal, [23, 30, 21, 29, 24, 36]);

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
              <button>{linkTittle}</button>
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
        We are an online shopping destination that offers a wide range of
        products at competitive prices. Sed volutpat metus sed bibendum mollis.
        Our selection includes electronics, mobile phones, computers, fashion,
        beauty products, home and kitchen goods, construction materials, and
        other high-end brands. Nulla tincidunt orci in turpis bibendum, eu
        vestibulum ipsum eleifend. Additionally, we offer food and drinks,
        automotive and industrial equipment, books, musical instruments, items
        for babies and kids, sports and fitness, and more. Our platform is
        designed to make your shopping experience swift and hassle-free, with
        features like gift vouchers, consumer promotions, and delivery for bulk
        purchases. Aenean luctus mauris nisi, vel tincidunt tellus feugiat in.
        We also offer free shipping on select items, discounted shipping rates
        for bulk purchases, and flexible payment options, including debit card
        payments and secure payment solutions. Aliquam eget eros vel quam
        fermentum eleifend at ac dolor. Don't miss out on the biggest sales
        online, which take place on special dates throughout the year. Donec
        pharetra nibh ac orci iaculis, in luctus magna euismod. Shop with us for
        the best lifestyle services online. Nulla facilisi.
      </p>
      </section>
      <Footer/>
    </>

  );
};

export default ProductItem;


