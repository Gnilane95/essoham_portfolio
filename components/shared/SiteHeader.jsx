import React from "react";

export default function SiteHeader({ title }) {
  return (
    <div>
      <h1 className="whitespace-nowrap sm:text-2xl lg:text-4xl md:text-4xl font-black text-amber-700">
        {title}
      </h1>
      <hr className="mb-6 mt-2 w-45" />
    </div>
  );
}
