"use client";

import dynamic from "next/dynamic";

const CartoonCharacter3D = dynamic(
  () => import("./CartoonCharacter3D").then((mod) => mod.CartoonCharacter3D),
  {
    ssr: false,
    loading: () => (
      <img
        src="/images/about-strategist-3d.jpg"
        alt="Ad-Vridhi strategist 3D illustration"
        width={1024}
        height={1024}
        className="h-full w-full rounded-full object-cover"
      />
    ),
  }
);

export function AboutPageCharacter3D() {
  return (
    <CartoonCharacter3D
      variant="strategist"
      fallbackSrc="/images/about-strategist-3d.jpg"
      fallbackAlt="Ad-Vridhi digital strategist 3D illustration"
      className="h-full w-full"
    />
  );
}
