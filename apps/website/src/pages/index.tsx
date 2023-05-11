import Link from "next/link";
import { PricingCard } from "../components/PricingCard";

export default function Home() {
  const pricingData = [
    {
      planName: "Gratis",
      planCost: "0",
      planDescription:
        "Orientado a personas que deseen probar nuestro servicio",
      planFeatures: [
        "Gratis",
        "Informacion en formato JSON",
        "Hasta 100 requests por dia",
      ],
      ctaName: "Comenzar a usar",
      ctaLink: "https://locations-doc.devels.tech",
      isPro: false,
    }
    // {
    //   planName: "Pro",
    //   planCost: "0",
    //   planDescription:
    //     "Para empresas que deseen utilizar todo el potencial de nuestra API",
    //   planFeatures: [
    //     "Edge",
    //     "Informacion en multiples formatos",
    //     "Hasta 10000 requests por dia",
    //   ],
    //   ctaName: "Comenzar a usar",
    //   ctaLink: "https://locations-doc.devels.tech",
    //   isPro: true,
    // },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="pt-36 px-6 h-fit">
        <h1 className="font-black text-5xl md:text-6xl text-white text-center">
          Venezuela API Locations
        </h1>
        <h2 className="text-zinc-300 text-center md:text-xl my-6 md:my-12">
          VAL es la API en donde podras conseguir toda la informacion acerca de
          las ubicaciones de Venezuela
        </h2>
        <section className="md:flex md:items-center md:justify-center md:gap-12">
          <Link href={"https://locations-doc.devels.tech"}>
            <button className="w-full h-10 font-medium bg-white px-6 py-1.5 rounded-sm md:px-8 md:h-12">
              Documentación
            </button>
          </Link>
          <Link href={"https://devels.tech"}>
            <button className="mt-4 md:mt-0 w-full h-10 font-medium bg-black border text-white px-6 py-1.5 md:h-12 md:px-8 rounded-sm">
              Conócenos
            </button>
          </Link>
        </section>
      </section>

      <section className="pt-20 px-6 mb-20">
        <h2 className="text-3xl font-bold mb-20 text-white text-center">
          Encuentra un plan adaptado a tus necesidades
        </h2>

        <section className="flex flex-wrap justify-center items-start gap-20">
          {pricingData.map((data) => (
            <PricingCard {...data} />
          ))}
        </section>
      </section>
    </main>
  );
}
