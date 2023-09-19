import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddCart from "../../components/AddCart";
import { useGlobalContext } from "../../Context";
import Loading from "../../components/Loading";
import "./productinfo.styles.css";

const url = "https://fakestoreapi.com/products/1";

const ProductInfo = () => {
  const { id } = useParams();
  const { isLoading, addCart, products } = useGlobalContext();
  console.log("product xheck", products);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setLoading(true);
    let useParamsId = Number(id);

    if (useParamsId > 21) {
      for (const category in products) {
        const Item = products[category];
        const finditem = Item.find((item) => item.id === useParamsId);
        if (finditem) {
          setProduct(finditem);
          setLoading(false);
        }
      }
    };

    if (useParamsId < 21) {
      async function fetchdata() {
        try {
          const response = await fetch(
            `https://fakestoreapi.com/products/${id}`
          );
          const items = await response.json();
 
          console.log("items",items);
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
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      }
      fetchdata();
    }
  }, [id]);

  if (loading) {
    return (
      <section className="load">
        <Loading />
      </section>
    );
  };

  if (!product) {
    return <h2 className="section-title">no product to display</h2>;
  } else {
    const { id, price, title, description, category, image } = product;

    return (
      <section className="product_info_section">
        <Link to="/" className="btn btn-primary">
          back Home
        </Link>
        <h2 className="section_title">{title}</h2>
        <div className="product_item">
          <img src={image} alt={title} />
          <div className="product_item_info">
          
            <p>
              <span className="product_item_data">title:</span> {title}
            </p>
            <p>
              <span className="product_item_data">category:</span> {category}
            </p>
            <p>
              <span className="product_item_data">price:</span> ${price}
            </p>
            <p>
              <span className="product_item_data">description:</span>{" "}
              {description}
            </p>
            <button className="btn btn-primary big_screen" onClick={() => addCart(id)}>
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    );
  }
};

export default ProductInfo;
