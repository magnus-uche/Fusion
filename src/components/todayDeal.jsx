import React, { useEffect } from 'react';
import Product from './Product';
import './todayDeal.css';
import { Link } from 'react-router-dom';
import { todaysdeal } from '../data';



const TodayDeal = ({deal, className, title }) => {

  return (
    <div className="today-container">
    <div className='todays_deal todays_deal-1'>
      <h2 className='todays_deal-tittle'><span>{title}</span></h2>
      <Link to='#' className='see_all_link'>{`${title ==  "Today's Deal" ? 'See All Items' : ''}`}</Link>
    </div>
    <section className="deal_item_container">
    <ul className='deal_list'>
      {deal.map((deal, index) => {
        const { discount, id, initialPrice, source1, source2, image, title } = deal;
        const getCurrentPrice = (price, discount) => {
          return (price / 100) * discount;
        };

        const savePrice = getCurrentPrice(initialPrice, discount);
        const currentPrice = initialPrice - savePrice;

        return <li className=' list' key={id}>
            <Link to={`/products/${id}`} className='link-left '>
              <span className='discount'>{`${discount}%`}</span>
              <div className="picture_section">
                <picture>
                  <source datasrcset={source1.dataSrcSet} media={source1.media} srcSet={source1.srcset} />

                  <source datasrcset={source2.dataSrcSet} media={source2.media} srcSet={source2.srcset} />

                  <img dataexpand={image.dataExpand} datasrc={image.datasrc} alt={image.alt} className="picture_image" src={image.src} />

                </picture>
              </div>
              <div className='second'>
                <h3 className="main-items">{title}</h3>
                <div className="price-section-left">
                  <span className="tag">
                    <span className="money-sign" style={{
                      fontFamily: "sans-serif",
                      marginRight: 1
                    }}>$</span>{currentPrice}</span>
                  <span className="bonus">
                    <span className='bonus-sign' style={{
                      fontFamily: "sans-serif",
                      marginRight: 1
                    }}>$</span>{initialPrice}</span>
                </div>

                <div className="save-tag">
                  <span className="save-title">You save <span style={{
                    fontFamily: "sans-serif",
                    marginRight: 1
                  }}>$</span>{savePrice}</span>
                
                </div>
              </div>
            </Link>
          </li>
        })}
        </ul>
    </section>
  </div>
  )
}

export default TodayDeal;

