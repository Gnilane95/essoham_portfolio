import React from "react";

export default function SiteHeader({ title }) {
  return (
    <div>
      <h1 className=" text-gray-600 whitespace-nowrap sm:text-2xl lg:text-2xl md:text-4xl font-black">
        {title}
      </h1>
      <hr className="mb-6 mt-2 w-45" />
    </div>
  );
}
