import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddCart from "../../../AddCart";

const url = "https://fakestoreapi.com/products/1";

const ProductInfo = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setLoading(true);

    const fetch = async () => {
      const response = await fetch(`${url}${id}`);
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
        setProduct(newProduct)
      } else {
        setLoading(false);
      }
    };
  },[]);

  if(loading){
    return <loading />;
  }

  if (!product) {
    return <h1>no product to display</h1>
  } else {
      
 const {
      id, 
      price,
      title,
      description,
      category,
      image
 } = product

  return <section className='cocktail-section'>
        <Link to='/' className='btn btn-primary'>back Home</Link>
        <h2 className="section-title">{title}</h2>
        <div className="drink">
        <img src={image} alt={title} />
        <div className="drink">
        <p>
        <span>title:</span>{title}
        </p>
        <p>
        <span>category:</span>{category}
        </p>
        <p>
        <span>price:</span>{price}
        </p>
        <p>
        <span>description:</span>{description}
        </p>
        <AddCart />
        </div>
        </div>
</section> 
}
};

export default ProductInfo;
