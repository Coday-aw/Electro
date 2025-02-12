import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState({});
  const { token } = useAuth();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setOrders(data);
        console.log(data);

        const productDetails = {};
        for (const order of data) {
          for (const item of order.products) {
            const productId = item.product;
            if (!productDetails[productId]) {
              const productRes = await fetch(
                `http://localhost:8080/api/products/${productId}`
              );
              const productData = await productRes.json();
              productDetails[productId] = productData;
            }
          }
        }
        setProducts(productDetails);
      } catch (error) {
        console.log(error);
      }
    };

    getOrders();
  }, [token]);
  return (
    <div>
      <p className="text-2xl font-medium text-center">Order summary</p>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className=" p-4 mb-4 border-b">
            <p className="font-bold mb-2">Order ID: {order._id}</p>
            {order.products.map((item) => (
              <div key={item._id} className=" flex gap-2 mb-2">
                <img
                  src={products[item.product]?.images[0]}
                  className="h-20 w-20 border rounded-lg p-1"
                  alt="product image"
                />
                <div>
                  <p className="font-bold mb-1">
                    {products[item.product]?.name || "Loading..."}
                  </p>
                  <p>{products[item.product]?.price}kr</p>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};
export default Orders;
