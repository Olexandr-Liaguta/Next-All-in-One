import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Products",
  },
};

export default function ProductsPage() {
  return (
    <div>
      <h1>Products Page</h1>
      <h2>Product 1</h2>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
    </div>
  );
}
