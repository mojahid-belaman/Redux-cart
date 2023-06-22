import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import Card from "../UI/Card";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          "https://reduxcart-cb3e1-default-rtdb.firebaseio.com/products.json"
        );
        if (!res.ok) throw new Error("Somthing Went Wrong!");
        const data = await res.json();
        let prodArr = [];
        for (const key in data) {
          const item = {
            id: key,
            title: data[key].title,
            price: data[key].price,
            description: data[key].description,
          };
          prodArr.push(item);
        }
        setProducts(prodArr);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchProduct();
  }, []);

  let content = <p>No Founds Products!</p>;
  if (products.length > 0) {
    content = (
      <ul>
        {products.map((elem) => (
          <ProductItem key={elem.id} product={elem} />
        ))}
      </ul>
    );
  }
  if (loading) {
    content = <p>LOADING...</p>;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <Card>{content}</Card>
    </section>
  );
};

export default Products;
