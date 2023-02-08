import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddCart from "../components/AddCart";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
import Loading from "../components/Loading";

const url = "https://fakestoreapi.com/products/1";

const ProductInfo = () => {
  const { id } = useParams();
  const {isLoading,addCart} = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function fetchdata(){
        try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const items = await response.json();
        if (items) {
          const { id, title, price, description, category, image } = items;
          const newProduct = {
            id: id,
            price: price,
            title: title,
            description: description,
            category: category,
            image: image,
          };
          setProduct(newProduct); 
          } else {
          setProduct(null);
        }
      } catch(error) {
        console.log(error);
      }
      setLoading(false);
  }
    fetchdata();
  },[id]);
  
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setLoading(false)
  //   }, 2000)
  // }, [])

  if(loading){
    return (
      <section className="loader"> 
      <Loading/>
      </section>
    )
  };

  if (!product) {
    return <h2 className='section-title'>no product to display</h2>
  } else {
 const {
      id, 
      price,
      title,
      description,
      category,
      image
 } = product;

  return <section className='section product-section'>

        <Link to='/' className='btn btn-primary'>back Home</Link>
        <h2 className="section-title">{title}</h2>
        <div className="product-item">
        <img src={image} alt={title}  />
        <div className="product-item-info">
        <p>
        <span className="product-item-data">title:</span>{title}
        </p>
        <p>
        <span className="product-item-data">category:</span>{category}
        </p>
        <p>
        <span className="product-item-data">price:</span>${price}
        </p>
        <p>
        <span className="product-item-data">description:</span>{description}
        </p>
        <button className="btn btn-primary" onClick={()=>addCart(id)}>Add to Cart</button>
        </div>
        </div>
</section> 
};

};

export default ProductInfo;
