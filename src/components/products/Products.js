import React from "react";
import "./Products.css";

function Header() {
  return (
    <div className="product-body">
        <div className="product-name">Мои продукты</div>
        <div className="product-cards">
            <a href="#Tours" className="product-card tour-card">Туры</a>
            <a href="#Header" className="product-card course-card">Курсы</a>
            <a href="#Header" className="product-card club-card">Ом клуб</a>
            <a href="#Header" className="product-card yoga-card">О йоге</a>
        </div>    
    </div>
  );
}

export default Header;