import { useState } from "react";
import { imageHandler } from "../config/imageHandler";

export default function MovieCard({ title, poster_path, name, vote_average, release_date, overview, }) {

  const [showInfo, setShowInfo] = useState(false)
  const imageURL = imageHandler(poster_path)

  return (
    <div 
      className="relative w-fit"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <img src={imageURL} alt="" />
      {showInfo && (

        <div className="flex flex-col gap-4 absolute inset-0 bg-linear-to-t from-black/90 to-black-0 text-white p-2 overflow-hidden pt-12 backdrop-blur-xs">
          <h3>{title ? title : name}</h3>
          <p>{vote_average}</p>
          <p>{release_date}</p>
          <p>{overview.slice(0,100)}...</p>
        </div>)}
    </div>
  );
}
