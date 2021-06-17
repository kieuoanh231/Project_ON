import Slider from "../components/Slider";
import ProductItem from "../components/ProductItem";
import { getData } from "../utils/fetchData";
import { useState } from "react";
import Head from "next/head";
const Home = (props) => {
  const [products, setProducts] = useState(props.products);

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
            {products.length === 0 ? (
              <h2>No product</h2>
            ) : (
              products.map((product) => (
                <ProductItem key={product._id} product={product} />
              ))
            )}
          </div>
        </div>
        <div className="load-more">
          <button type="submit" className="btn btn-primary">
            Load more
          </button>
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
