import React from 'react';
import Product from './Product';
import { useGlobalContext } from '../Context';
import Carosel from './Carosel';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import './ProductItem.css';


const ProductItem = () => {
const { products } = useGlobalContext();

return (
    <section className='product_item_container'>
    <Categories/>
    <div className="hero-title">
    <Carosel/>
    </div>
    <div className="hero_categories">
    <Link to='#'><button>kundum Blog</button></Link>
    <Link to='#'><button>Pay Bills</button></Link>
    <Link to='#'><button>Free Delivery</button></Link>
    <Link to='#'><button>Offline Store</button></Link>
    <Link to='#'><button>Brand Stores</button></Link>
    <Link to='#'><button>Book Flights</button></Link>
    </div>

  <div className="today_deal">

    <div className='todays_deal'>
     <h2 className='todays_deal-tittle'><span>Today's Deal</span></h2>
     <Link to='#' className='see_all_link'>See All Items</Link>
    </div>

<section className="deal_item_container">
  <ul className='deal_items deal_list'>
    <li className ='items list'>
     <Link to='#' className='link'>
      <span className='discount'>50%</span>
       <div className="picture_section">
        <picture> 
        <source dataSrcset="https://www-konga-com-res.cloudinary.com/image/upload/w_200,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/J/203255_1655290232.jpg" media="(max-width: 576px)" srcSet="https://www-konga-com-res.cloudinary.com/image/upload/w_200,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/J/203255_1655290232.jpg"/>
        <source dataSrcset="https://www-konga-com-res.cloudinary.com/image/upload/w_200,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/J/203255_1655290232.jpg" media="(max-width: 600px)" srcSet="https://www-konga-com-res.cloudinary.com/image/upload/w_200,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/J/203255_1655290232.jpg"/>

        <img dataExpand="100" dataSrc="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/J/203255_1655290232.jpg" alt="Airtel 4G Pocket Wifi." className="picture_image" src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Z/J/203255_1655290232.jpg"/>
        </picture>
      </div>
      <div> 
        <h3 class="">Airtel 4G Pocket Wifi</h3>
        <div class="">
        <span class="">
        <span style={{fontFamily: "sans-serif", marginRight: 1}}>₦</span>7,500</span>
        <span class="">
        <span style={{fontFamily: "sans-serif", marginRight:1}}>₦</span>15,000</span>
        </div>
        <div class="">
        <span class="">You save <span style={{fontFamily: "sans-serif", marginRight:1}}>₦</span>7,500</span>
        <div class="">
        </div>
        </div>
        </div>
      </Link>
     </li>
 
   
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