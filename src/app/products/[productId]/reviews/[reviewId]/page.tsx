import { notFound } from "next/navigation";

export default function ReviewIdPage({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (+params.reviewId > 100) {
    throw new Error("Review not found");
  }

  return (
    <div>
      <h1>
        Product: {params.productId} for Review {params.reviewId}
      </h1>
    </div>
  );
}
