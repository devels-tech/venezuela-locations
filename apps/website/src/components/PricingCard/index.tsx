import Link from "next/link";
import React, { FC } from "react";
import { IoCheckmarkCircle, IoArrowForwardOutline } from "react-icons/io5";

interface PricingCard {
  planName: string;
  planCost: string;
  planDescription: string;
  planFeatures: string[];
  ctaName: string;
  ctaLink: string;
  isPro: boolean;
}

export const PricingCard: FC<PricingCard> = (pricingInformation) => {
  const {
    planName,
    planCost,
    planDescription,
    planFeatures,
    ctaName,
    ctaLink,
    isPro,
  } = pricingInformation;
  return (
    <article className="relative border border-1 border-zinc-600 p-6  bg-black rounded-lg max-w-xs lg:max-w-sm">
      {isPro && (
        <div className="absolute mx-auto -top-5 right-0 bottom-0 left-0 bg-gradient-to-b from-white to-gray-300 rounded-full text-center font-bold w-40 h-10 flex items-center justify-center text-sm">
          Recomendado
        </div>
      )}
      <p className="font-bold text-white text-xl">{planName}</p>
      <p className="font-bold text-white text-4xl my-4">${planCost}</p>
      <p className="text-zinc-400 text-md">{planDescription}</p>
      <ul className="my-16">
        {planFeatures.map((feature: string) => (
          <li className="flex items-center gap-2" key={feature}>
            <IoCheckmarkCircle className="text-xl text-white" />
            <p className="text-zinc-300">{feature}</p>
          </li>
        ))}
      </ul>
      <Link href={ctaLink}>
        <button
          className={`flex justify-between items-center w-full ${
            isPro
              ? "bg-white text-black shadow-[0px_0px_20px_5px_rgba(100,100,100,0.9)]"
              : "bg-black text-white"
          } border rounded-sm px-6 py-2 font-medium`}
        >
          {ctaName}
          <IoArrowForwardOutline className="text-xl" />
        </button>
      </Link>
    </article>
  );
};
