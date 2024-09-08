import React from 'react';
import './Product.css';

const Product = () => {
 
  const roProducts = [
    {
      id: 1,
      title: "Aquanine RO+UV+UF+AKALINE",
      description: "Aquasaver water purifier",
      actualPrice: "₹23,999",
      discountPrice: "₹13,679*",
      discount: "43% OFF",
      img: require(`../Assets/aquanine.jpg`)
    },
    {
      id: 2,
      title: "Aqua jade RO+UV+UF+AKALINE",
      description: "Copper water purifier",
      actualPrice: "₹16,999",
      discountPrice: "₹11,049*",
      discount: "35% OFF",
      img: require(`../Assets/aquanile.jpg`)
    },
    {
      id: 3,
      title: "Aqua Roma RO+UV+UF+AKALINE",
      description: "Copper water purifier",
      actualPrice: "₹16,999",
      discountPrice: "₹11,049*",
      discount: "35% OFF",
      img: require(`../Assets/aquaroma.jpg`)
    },
    {
      id: 4,
      title: "Aqua Zuric RO+UV+UF+AKALINE",
      description: "Zinc Copper Alkaline",
      actualPrice: "₹18,999",
      discountPrice: "₹12,349*",
      discount: "35% OFF",
      img: require(`../Assets/aquaZuric.jpg`)
    },
    {
      id: 5,
      title: "Deltin Pure+ RO+UV+UF+AKALINE",
      description: "Zinc Copper Alkaline",
      actualPrice: "₹18,999",
      discountPrice: "₹12,349*",
      discount: "35% OFF",
      img: require(`../Assets/deltin.jpg`)
    },
    {
      id: 6,
      title: "Kairox RO+UV+UF+AKALINE",
      description: "Zinc Copper Alkaline",
      actualPrice: "₹23,999",
      discountPrice: "₹13,699*",
      discount: "43% OFF",
      img: require(`../Assets/kairox.jpg`)
    },
    {
      id: 7,
      title: "Aqua Zuric RO+UV+UF+AKALINE",
      description: "Zinc Copper Alkaline",
      actualPrice: "₹18,999",
      discountPrice: "₹12,349*",
      discount: "35% OFF",
      img: require(`../Assets/zuric.jpg`)
    },
    {
      id: 8,
      title: "ZedPlus Elon RO+UV+UF+AKALINE",
      description: "Zinc Copper Alkaline",
      actualPrice: "₹16,999",
      discountPrice: "₹11,049*",
      discount: "37% OFF",
      img: require(`../Assets/zedPlus.jpg`)
    },
    {
      id: 9,
      title: "Aqua PrimeX RO+UV+UF+AKALINE",
      description: "Zinc Copper Alkaline",
      actualPrice: "₹22,000",
      discountPrice: "₹13,699",
      discount: "37% OFF",
      img: require(`../Assets/primxAqua.jpg`)
    },
    {
      id: 10,
      title: "LexPure RO+UV+UF+AKALINE",
      description: "Zinc Copper Alkaline",
      actualPrice: "₹16,999",
      discountPrice: "₹11,049*",
      discount: "37% OFF",
      img: require(`../Assets/lexpure.jpg`)
    },
    {
      id: 11,
      title: "Zedplus Elon RO+UV+UF+AKALINE",
      description: "Zinc Copper Alkaline",
      actualPrice: "₹16,999",
      discountPrice: "₹11,049*",
      discount: "37% OFF",
      img: require(`../Assets/elonZedplus.jpg`)
    },
    {
      id: 12,
      title: "Aqua Ultra RO+UV+UF+AKALINE",
      description: "Copper water purifier",
      actualPrice: "₹22,000",
      discountPrice: "₹13,699",
      discount: "37% OFF",
      img: require(`../Assets/Aquaultra.jpg`)
    },
   
  ];

  const commercialProducts = [
    {
      id: 1,
      title: "5 Stage Commercial Ro Plant",
      description: "LexPure 100lph",
     
      img: require(`../Assets/commercial1.jpg`)
    },
    {
      id: 2,
      title: "Commercial Water Plant 2",
      description: "LexPure 100lph",
      
      img: require(`../Assets/commercial2.jpg`)
    },
    {
      id: 3,
      title: "Commercial Water Plant 2",
      description: "Industrial water purifier",
     
      img: require(`../Assets/commercial3.jpg`)
    },
    {
      id: 4,
      title: "Commercial Water Plant 2",
      description: "Industrial water purifier",
    
      img: require(`../Assets/commercial4.jpg`)
    },
    {
      id: 5,
      title: "LCM INDUSTRIAL",
      description: "1000 Lph Plant",
     
      img: require(`../Assets/commercial5.jpg`)
    },
    {
      id: 6,
      title: "LCM INDUSTRIAL",
      description: "2000 Lph Plant",
     
      img: require(`../Assets/commercial6.jpg`)
    },
    {
      id: 7,
      title: "LCM INDUSTRIAL",
      description: "120 Lph Plant",
     
      img: require(`../Assets/commercial7.jpg`)
    },
    {
      id: 8,
      title: "LCM INDUSTRIAL",
      description: "250 Lph Plant",
     
      img: require(`../Assets/commercial8.jpg`)
    },
   
  ];

  return (
    <div className='product-section'>
      <h1>Our Products</h1>
      
      {/* RO Filters Section */}
      <h2>RO Filters</h2>
      <div className="product-grid">
        {roProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.title} className="product-image" />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="price">
                <span className="actual-price">{product.actualPrice}</span>
                <span className="discount-price">{product.discountPrice}</span>
                <span className="discount">{product.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="divider" />

      {/* Commercial Plants Section */}
      <h2>Commercial Plants</h2>
      <div className="product-grid">
        {commercialProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.title} className="product-image" />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="price">
                <span className="actual-price">{product.actualPrice}</span>
                <span className="discount-price">{product.discountPrice}</span>
                <span className="discount">{product.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
