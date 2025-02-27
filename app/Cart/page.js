"use client";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart , clearCart } from "@/store/CreateSlice/createSlice";
import { ToastContainer, toast  , Bounce} from 'react-toastify';
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

export default function Cart() {

  const notify = () => toast.success("Your order is confirmed ..!");
  const notif = () => toast.info("Removed one item from Cart ..!");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.productSlice.cart);
  
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
    notif()
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  const handleClear =() => {
    dispatch(clearCart());
    notify()
  }
  
  return (
    <div className="container mt-4">
      <ToastContainer
      theme="colored"
      transition= {Bounce}
      />
      <h2 className="text-center mb-4">Shopping Cart</h2>

      {cartItems.length > 0 ? (
        <div className="row">
          <div className="col-md-8">
            {cartItems.map((item) => (
              <div className="card mb-3 shadow-sm" key={item.id}>
                <div className="row g-0">
                  <div className="col-md-4 d-flex align-items-center">
                    <img src={item.src} alt={item.name} className="img-fluid rounded" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text"><strong>Price:</strong> ${item.price}</p>
                      <button 
                        onClick={() => {handleRemoveFromCart(item.id)}} 
                        className="btn btn-danger btn-sm"
                      >
                        Remove
                      </button>
              {/* <ToastContainer/> */}

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow">
              <h3 className="text-center">Total: ${calculateTotal()}</h3>
              <button className="btn btn-warning ms-lg-3 mt-2 mt-lg-0" onClick={handleClear}>Confirm Order</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-muted">Your cart is empty</p>
        </div>
      )}
    </div>
  );
}
