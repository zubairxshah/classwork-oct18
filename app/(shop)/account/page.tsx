import Link from "next/link";
import React from "react";
import { products } from "./products";

interface PageProps {
  params: { orders: string };
}
function Account({ params }: PageProps) {
  console.log(params);
  return (
    <div className="about">
      <h1>Account</h1>
      <p>This page is for account section.</p>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/account/[id]`} as={`/account/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ol>
      <br />
      <hr />
      <p>Grouping Example</p>
    </div>
  );
}

export default Account;
