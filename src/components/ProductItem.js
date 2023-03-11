import React,{ useState, useEffect } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
import HeroItems from "./heroitem/heroitem";
import Carosel from "./Carosel";
import Categories from "./Categories";
import "./ProductItem.css";
import { heroCategories, todaysdeal } from "../data";
import TodayDeal from "./todayDeal";

const ProductItem = () => {
  const { products } = useGlobalContext();

    const getDataById = (arr, id) =>{
      const item = [];
      for (let index = 0; index < arr.length; index++) {
          if(id.includes(arr[index].id)){
              item.push(arr[index]);
          }
      }
      return item;
      };

      const sponsoredItem =  getDataById(todaysdeal, [27,34,29,25,32,36]);
      const todays_deal =  getDataById(todaysdeal, [23,30,21,29,24,36]);


  return (
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
      <TodayDeal deal={todays_deal} title="Today's Deal" ClassName='deal_list'/>

      <div className="divider"></div>

      <TodayDeal deal={sponsoredItem} title='sponsored' className='sponsor'/>
      <div className="products-center">
        <HeroItems />
      </div>
    </section>
  );
};

export default ProductItem;

// <div className="today_deal">
// <div className='todays_deal sponsored-product'>
//  <p className='todays_deal-tittle sponsored'><span>Sponsored Product</span></p>

// </div>

// <section className="deal_item_container sponsored-item">
// <ul className=' deal_items sponsored-deal'>
// <TodayDeal   />
// </ul>
// </section>
// </div>
