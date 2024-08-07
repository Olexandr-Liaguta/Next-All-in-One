import Image from "next/image";
import Link from "next/link";
import { wonders } from "./wonders";

export default function PhotoFeedPage() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center my-4">New Wonders of the world</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {wonders.map(({ id, place, url }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              src={url}
              alt={place}
              width={500}
              height={500}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
