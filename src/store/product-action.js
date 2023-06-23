import { replaceProduct } from "./product";
import { showNotification } from "./ui";

export const fetchProductData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        "https://reduxcart-cb3e1-default-rtdb.firebaseio.com/products.json"
      );
      if (!res.ok) {
        throw new Error("Could not fetch product data!");
      }
      const data = await res.json();
      return data;
    };
    try {
      const data = await fetchData();
      dispatch(
        replaceProduct({
          products: data.products || [],
          totalQte: data.totalQte,
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error",
          message: "Fetch Product Data Failed!",
        })
      );
    }
  };
};

export const sendDataProduct = (productData) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "sending",
        title: "Sending...",
        message: "Sending Product Data",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://reduxcart-cb3e1-default-rtdb.firebaseio.com/products.json",
        {
          method: "PUT",
          body: JSON.stringify({
            products: productData.products,
            totalQte: productData.totalQte,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Sent Product Data Failed!");
      }
    };
    try {
      await sendRequest();
      dispatch(
        showNotification({
          status: "success",
          title: "Success",
          message: "Sent Product Data Successfully!",
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error",
          message: "Sent Product Data Failed!",
        })
      );
    }
  };
};
