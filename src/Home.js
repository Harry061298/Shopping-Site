import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2016/02/AMAZON-1200x537.png"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Amazon Echodot"
            price={2988}
            image="https://tse3.mm.bing.net/th?id=OIP.HAN6-pDTx4JavXY_GTBLuQHaEJ&pid=Api&P=0&w=269&h=151"
            rating={5}
          />
          <Product
            id="49538094"
            title="24MK430H-B 24IN IPS FHD HDMI 3YRS"
            price={15900}
            image="https://images-na.ssl-images-amazon.com/images/I/61XP60ekzrL._AC_SL1500_.jpg"
            rating={5}
          />

          {/* Product */}
          {/* Product */}
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Apple iPhone 11 (64GB) - Black (EarPods & Power Adapter in The
                Box)"
              
          
            price={49900}
            image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
            rating={5}
          />
          <Product
            id="23445930"
            title="New Apple iPad (10.2-inch, Wi-Fi, 32GB) - Silver (Latest Model,
              8th Generation)"
            
            price={35900}
            image="https://images-na.ssl-images-amazon.com/images/I/7100EIwVWvL._SL1500_.jpg"
            rating={5}
          />
           <Product
            id="3254354345"
            title="New Apple Watch SE (GPS, 44mm) - Space Grey Aluminium Case with Black Sport Band"
            price={25900}
            image="https://m.media-amazon.com/images/I/71rhrO49SmL._AC_SX615_SY462_.jpg"
            rating={5}
          />

          
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>

        <div className="home__row">
        <Product
            id="90829332"
            title=
            "Samsung 190.5 cm (75 inches) 8 Series 75NU8000 4K LED Smart TV (Black)"
            price={78900}
            image="https://images-na.ssl-images-amazon.com/images/I/91IttqgqY9L._SL1500_.jpg"
            rating={4}
          />


          {/* Product */}
          {/* Product */}
        </div>
      </div>
    </div>
  );
}

export default Home;
