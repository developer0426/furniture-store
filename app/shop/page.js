"use client";
import { Furni } from "../data";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/CreateSlice/createSlice";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer , toast } from "react-toastify";

export default function Main() {

    const notify = () => toast.success("You have select an item ...")
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        const newItem = {
            ...item,
            id: uuidv4(),
        };
        dispatch(addToCart(newItem));
    };

    return (
        <div className="container mt-4">
            <h3 className="text-center mb-4">Furniture Category</h3>

            <div className="row">
                {Furni.map((item, index) => (
                    <div className="col-md-4 mb-4" key={`${item.name}-${index}`}>
                        <div className="card shadow-sm">
                            <img src={item.src} alt={item.name} className="card-img-top img-fluid" />
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text"><strong>Price:</strong> {item.price}</p>
                                <button  
                                    onClick={() => {handleAddToCart(item) ; notify()}} 
                                    className="btn btn-primary btn-sm"
                                >
                                    Add to Cart
                                </button>
                                <ToastContainer/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
