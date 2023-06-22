import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import Card from "../UI/Card";

const DUMMY_DATA = [
  {
    id: "p1",
    title: "First",
    price: 29,
    description: "This is a first product - amazing",
  },
  {
    id: "p2",
    title: "Second",
    price: 30,
    description: "This is a second product.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <Card>
        {
          <ul>
            {DUMMY_DATA.map((elem) => (
              <ProductItem key={elem.id} product={elem} />
            ))}
          </ul>
        }
      </Card>
    </section>
  );
};

export default Products;
