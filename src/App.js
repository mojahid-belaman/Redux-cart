import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { fetchProductData, sendDataProduct } from "./store/product-action";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisisble);
  const products = useSelector((state) => state.products);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchProductData())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (products.changed) {
      dispatch(sendDataProduct(products));
    }
  }, [products, dispatch]);

  return (
    <Fragment>
      {notification && <Notification notification={notification} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
