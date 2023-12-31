import React from "react";

export default function SiteBanner({ title, description }) {
  return (
    <div>
      <SiteHeader title={title} />
      <p className="my-6">{description}</p>
    </div>
  );
}
