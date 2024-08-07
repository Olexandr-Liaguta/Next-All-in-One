export default function ProductIdPage({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div>
      <h1>Product {params.productId} Page</h1>
    </div>
  );
}
