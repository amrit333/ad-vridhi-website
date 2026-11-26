"use client";

import dynamic from "next/dynamic";

const CartoonCharacter3D = dynamic(
  () => import("./CartoonCharacter3D").then((mod) => mod.CartoonCharacter3D),
  {
    ssr: false,
    loading: () => (
      <img
        src="/images/hero-workspace-3d.jpg"
        alt="Marketing specialist analytics workspace"
        width={1024}
        height={1024}
        className="h-[340px] w-full rounded-[26px] object-cover sm:h-[380px]"
      />
    ),
  }
);

export function CapabilitiesCharacterStage() {
  return (
    <div className="overflow-hidden rounded-[26px] bg-gradient-to-b from-white to-brand-lavender/50">
      <CartoonCharacter3D
        variant="analytics"
        fallbackSrc="/images/hero-workspace-3d.jpg"
        fallbackAlt="Marketing specialist working with 3D analytics screen"
        className="h-[340px] sm:h-[380px]"
      />
    </div>
  );
}
