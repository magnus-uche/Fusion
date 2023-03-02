import React from 'react';
import Product from './Product';
import './todayDeal.css';
import { Link } from 'react-router-dom';
import { todaysdeal } from '../data';

const TodayDeal = () => {
  return (
    <>
    {todaysdeal.map((deal, index)=>{
      const {discount, id, price, discountPrice, savePrice, source1, source2, img, productTitle } = deal;
      console.log("jlljlj",source1)
     
      return <li className='items list' key={id}>
      <Link to='#' className='link'>
        <span className='discount'>{discount}</span>
        <div className="picture_section">
        <picture>
         <source datasrcset={source1.dataSrcSet} media={source1.media} srcSet={source1.srcset} />
      
        <source datasrcset={source2.dataSrcSet} media={source2.media} srcSet={source2.srcset} />
        
        <img dataexpand={img.dataexpand} datasrc={img.datasrc} alt={img.alt} className="picture_image" src={img.src} />
        
          </picture>
        </div>
        <div>
          <h3 className="main-items">{productTitle}</h3>
          <div className="main-items-price-section">
            <span className="tag">
              <span className="money-sign" style={{
                fontFamily: "sans-serif",
                marginRight: 1
              }}>₦</span>{price}</span>
            <span className="bonus">
              <span className='bonus-sign' style={{
                fontFamily: "sans-serif",
                marginRight: 1
              }}>₦</span>{discountPrice}</span>
          </div>

          <div className="save-tag">
            <span className="save-title">You save <span style={{
              fontFamily: "sans-serif",
              marginRight: 1
            }}>₦</span>{savePrice}</span>
            <div className="space">
            </div>
          </div>
        </div>
      </Link>
    </li>
    })}
    </>
  )
}

export default TodayDeal;

// <li className='items list'>
//       <Link to='#' className='link'>
//         <span className='discount'>{discount}</span>
//         <div className="picture_section">
//           <picture>
//           {source1.map((source, index)=>{
//             const {dataSrcset, media, srcset } = source;
//             return <source dataSrcset={dataSrcset} media={media} srcSet={srcset} key={index}/>
//           })}
//           {source2.map((source,index)=>{
//             const {dataSrcset, media, srcset} = source;
//             return <source dataSrcset={dataSrcset} media={media} srcSet={srcset} key={index} />
//           })}
//           {img.map((img, index)=>{
//            const {dataExpand, datasrc, alt, src} = img;
//             return <img dataExpand={dataExpand} datasrc={datasrc} alt={alt} className="picture_image" src={ src} key={index}/>
//           })}
   
//           </picture>
//         </div>
//         <div>
//           <h3 className="main-items">{productTitle}</h3>
//           <div className="main-items-price-section">
//             <span className="tag">
//               <span className="money-sign" style={{
//                 fontFamily: "sans-serif",
//                 marginRight: 1
//               }}>₦</span>{price}</span>
//             <span className="bonus">
//               <span className='bonus-sign' style={{
//                 fontFamily: "sans-serif",
//                 marginRight: 1
//               }}>₦</span>{discountPrice}</span>
//           </div>

//           <div className="save-tag">
//             <span className="save-title">You save <span style={{
//               fontFamily: "sans-serif",
//               marginRight: 1
//             }}>₦</span>{savePrice}</span>
//             <div className="space">
//             </div>
//           </div>
//         </div>
//       </Link>
//     </li>