import React from "react";

export default function Images({ images }: { images: string[] }) {
  return (
    <div>
      {/* IMAGES */}
      <div className="border-b pb-2 mb-2">
        <h2 className="font-bold text-3xl mt-5 ml-2 ">{images.length} photo{images.length>=1 ? "s":""}</h2>
      </div>

      <div className="flex flex-wrap p-2 ">
        {images.map((image) => (
          <img className="w-56 h-44 mr-1" src={image} />
        ))}
   
      </div>

      {/* IMAGES */}
    </div>
  );
}
