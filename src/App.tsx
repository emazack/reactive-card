import React from 'react';
import './App.css';

interface Product {
  title: string,
  image: string,
  description: string,
  size: string,
  gender: string,
  color: string,
  price: number,
  brand: string,
  returnAvailable: boolean
}

const product: Product = {
  title: "TShirt",
  image: 'https://imgprd19.hobbylobby.com/5/ba/61/5ba610f22c7cd6efb4e6c69387d938451a6c40e6/700Wx700H-633719-0320.jpg',
  size: 'M',
  gender: 'F',
  color: 'red',
  price: 200,
  description: 'Beatiful Tshirt for women',
  brand: 'http://www.microsoft.com',
  returnAvailable: true
}

function getGender(gender: string): string {
  if (gender === "M") {
    return "blue";
  } else {
    return "pink";
  }
}


function App() {
  return (
    <div className="container mt-2" style={{ maxWidth: 400}}>
    <div className="card" style={{ borderColor: getGender(product.gender)}}>
      <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-header">{product.title}</div>
      <div className="card-body">
        <h5 className="card-title">COLOR: <span style={{ backgroundColor: product.color }} className="color-box" /></h5>
        <h5 className="card-title">GENDER: {product.gender === "M" ? "Male" : "Female"}</h5>
        <h5 className="card-title">PRICE: € {product.price}</h5>
        <h5 className="card-title">
          <span>SIZE: </span>
          <span className="sizes">
            <span className={product.size === "M" ? "size-available" : ""}>M</span>-
            <span className={product.size === "L" ? "size-available" : ""}>L</span>-
            <span className={product.size === "XL" ? "size-available" : ""}>XL</span>
          </span>
        </h5>
        <p className="card-text"> {product.description} </p>
        { product.returnAvailable && <p className="card-text">"You can return the product within 30 days"</p>}
        <a href={product.brand} className="btn btn-primary">Visit WebSite</a>
      </div>
    </div>
  </div>
  );
}

export default App;
