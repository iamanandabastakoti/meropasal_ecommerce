import { useState } from "react";

const Product = ({image, product, category, size, color, total}) => {
    const[count,setCount] = useState(0);
    const[price,setPrice] = useState(count*total);

    const addItem = () => {
        setCount(count => count+1);
        setPrice(price => total*(count+1));
    }

    const removeItem = () => {
        count > 0? setCount(count => count-1): count=0;
        setPrice(price => total*(count-1))
    }

    return (
        <>
            <div className="productCard">
                <img src={image} alt="productImage" />
                <div className="productDetails">
                    <h2>{product}</h2>
                    <small><u>{category}</u></small>
                    <p>Size:{size}, Color:{color}</p>
                    <div className="quantitySection">
                        <div className="quantity">
                            <big>Qty:</big>
                        </div>
                        <div className="quantityButtons">
                            <button className="remove" onClick={removeItem}>-</button>
                            <big>{count}</big>
                            <button className="add" onClick={addItem}>+</button>
                        </div>
                    </div>
                    <div className="price">
                        <big>Total:</big>
                        <big>${price}</big>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;