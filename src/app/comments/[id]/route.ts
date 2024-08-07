import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const comment = comments.find((comment) => comment.id === id);

  if (!comment) {
    return redirect("/comments");
  }

  return Response.json(comment);
}
