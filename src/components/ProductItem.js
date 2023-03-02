import React from 'react';
import Product from './Product';
import { useGlobalContext } from '../Context';
import Carosel from './Carosel';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import './ProductItem.css';
import { heroCategories } from '../data';
import TodayDeal from './todayDeal';
// import { todaysdeal } from '../data';


const ProductItem = () => {
const { products } = useGlobalContext();

return (
    <section className='product_item_container'>
    <Categories/>
    <div className="hero-title">
    <Carosel/>
    </div>
    <div className="hero_categories">
    {heroCategories.map((category)=>{
      const {linkTittle, link} = category;
      return <Link to={link}><button>{linkTittle}</button></Link>
    })}
    </div>

  <div className="today_deal">
    <div className='todays_deal'>
     <h2 className='todays_deal-tittle'><span>Today's Deal</span></h2>
     <Link to='#' className='see_all_link'>See All Items</Link>
    </div>

<section className="deal_item_container">
  <ul className='deal_items deal_list'>
    <TodayDeal  />
    </ul> 
</section>
  </div>

    <div className="products-center div">
    {products.map((productItem)=>{
      const {id} = productItem;
      return <Product key={id} {...productItem}/>
    })}
    { <ul>
      <li className='phone-slider'></li>
      </ul>}
    </div>
    </section>
  )
};

export default ProductItem;