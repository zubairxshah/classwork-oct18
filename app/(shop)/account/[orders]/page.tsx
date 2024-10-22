import React from "react";
import { products } from "../products";

interface OrderProps{orders:string}

function Account({params}:{params: OrderProps}) {
    console.log(params)
    const orderId = params.orders;
    const order = products.find(product => product.id.toString() === orderId);

    

    return (
        <div className="about">
            <h1>Account</h1>
            <p>
                This page is for account section.
            </p>
            {order ? (
                <p>
                    Order Details: {order.name}
                </p>
            ) : (
                <p>Order not found</p>
            )}
        </div>
    );
}

export default Account;