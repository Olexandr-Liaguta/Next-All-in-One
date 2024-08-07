import Image from "next/image";
import { wonders } from "../wonders";

export default function PhotoFeedIdPage({
  params,
}: {
  params: { id: string };
}) {
  const photo = wonders.find((wonder) => wonder.id === +params.id);

  if (!photo) {
    return <h1>Photo not found</h1>;
  }

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto flex flex-col gap-6">
        <h1 className="text-center text-3xl">{photo.place}</h1>

        <Image
          src={photo.url}
          alt={photo.place}
          width={700}
          height={700}
          className="w-full object-cover aspect-square"
        />

        <h3>{photo.description}</h3>
      </div>
    </div>
  );
}
