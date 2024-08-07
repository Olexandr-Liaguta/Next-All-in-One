import { wonders } from "@/app/photo-feed/wonders";
import Modal from "@/ui/Modal";
import Image from "next/image";

export default function InterceptPhotoFeedIdPage({
  params,
}: {
  params: { id: string };
}) {
  const photo = wonders.find((wonder) => wonder.id === +params.id);

  if (!photo) {
    return null;
  }

  return (
    <Modal onCloseUrl="/photo-feed">
      <div className="w-1/2">
        <h1>{photo.place}</h1>
        <Image
          src={photo.url}
          alt={photo.place}
          width={700}
          height={700}
          className="w-full object-cover aspect-square"
        />
        <p>{photo.description}</p>
      </div>
    </Modal>
  );
}
