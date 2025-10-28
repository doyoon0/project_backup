import React from "react";
import "../Page.css";
import { useHistory } from 'react-router-dom';
import ProductThumb from "../../components/ProductThumb";

function WomenShirt() {
  const products = [
    { id: 1, name: "", desc: "", price: "", img: "/images/women/shirt/women_Shirt1.webp" },
    { id: 2, name: "", desc: "", price: "", img: "/images/women/shirt/women_Shirt2.webp" },
    { id: 3, name: "", desc: "", price: "", img: "/images/women/shirt/women_Shirt3.webp" },
    { id: 4, name: "", desc: "", price: "", img: "/images/women/shirt/women_Shirt4.webp" },
    { id: 5, name: "", desc: "", price: "", img: "/images/women/shirt/women_Shirt5.webp" },
    { id: 6, name: "", desc: "", price: "", img: "/images/women/shirt/women_Shirt6.webp" },
  ];

  return (
    <div className="page">
      <h1>여성 셔츠 페이지</h1>
      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <ProductThumb product={p} />
            <h4>{p.name}</h4>
            <p className="desc">{p.desc}</p>
            <p className="price">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WomenShirt;
