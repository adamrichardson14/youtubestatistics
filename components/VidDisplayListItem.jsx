import Image from "next/image";
export default function VidDisplayListItem({ vid }) {
  return (
    <div className="grid grid-cols-3 my-4 gap-4">
      <div className="hidden sm:flex relative col-span-1 rounded-md">
        <Image
          src={vid.snippet.thumbnails.medium.url}
          width={320}
          height={180}
          alt={vid.snippet.title}
          className="absolute rounded-md opacity-80"
        />
      </div>
      <div className="col-span-3 sm:col-span-2">
        <h2 className="text-xl text-white">{vid.snippet.title}</h2>
        <p className="text-gray-300">{vid.snippet.description}</p>
      </div>
    </div>
  );
}
