import React from "react";
import cement from "../assets/cement.jpeg";
import steel from "../assets/steel.jpeg";
import bulk from "../assets/bulk.jpeg";

function Products() {
return (
    <section  id="products" className="products">

    <h2>Our Products</h2>

    <div className="product-grid">

        <div className="card">
        <img src={cement} alt="" />
        <h3>Cement</h3>
        <p>UltraTech, Ramco, Dalmia & more.</p>
        </div>

        <div className="card">
        <img src={steel} alt="" />
        <h3>Steel</h3>
        <p>High strength steel bars</p>
        </div>

        <div className="card">
        <img src={bulk} alt="" />
        <h3>Bulk Supply</h3>
        <p>Bulk materials for builders</p>
        </div>

    </div>

    </section>
);
}

export default Products;