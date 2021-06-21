import Slider from "../components/Slider";
import ProductItem from "../components/ProductItem";
import { getData } from "../utils/fetchData";
import { useState } from "react";

import Head from "next/head";

const Home = (props) => {
  const [products] = useState(props.products);
  const [ limit, setLimit] = useState(2); 
  function handleClick() {
    setLimit(prevLimit => prevLimit + 2) 
  }
  
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Slider />
      <div className="productList">
        <div className="container">
          <div className="page-title toggled">
            <h3 style={{ marginTop: "20px" }}>Our Products</h3>
            <div className="row">
            {products.length === 0 ? (
              <h2>No product</h2>
            ) : (
              products.slice(0, limit).map((product,i) => (
                <ProductItem key={product._id} product={product} />
              ))
            )}
            </div>
          </div>
        </div>
        <div className="load-more">
          {limit<products.length &&<div onClick={handleClick} className="btn btn-primary">
            Load more
          </div>}
        
        </div>
      </div>
    </>
  );
};

//server side render
export async function getServerSideProps() {
  const res = await getData("product");
  return {
    props: {
      products: res.products,
      result: res.result,
    },
  };
}

export default Home;
