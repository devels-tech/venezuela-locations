import Link from "next/link";
import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";

export const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const handleShowMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const navLinks = [
    {
      name: "Documentacion",
      url: "https://locations-doc.devels.tech/",
    },
    {
      name: "Precios",
      url: "/pricing",
    },
    {
      name: "Contactanos",
      url: "https://www.devels.tech/",
    },
  ];

  return (
    <header className="fixed z-40 bg-black w-full block p-4 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70">
      <nav className="flex justify-between lg:justify-start items-center lg:max-w-3xl mx-auto">
        <p className="font-black text-white lg:text-2xl">VAL</p>
        <IoReorderThreeOutline
          className="z-40 text-3xl text-white lg:hidden"
          onClick={handleShowMenuClick}
        />
        <ul className="hidden lg:flex justify-start items-center gap-14 ml-60">
          {navLinks.map((link: { url: string; name: string }) =>
            link.name.toLowerCase() === "contactanos" ? (
              <Link href={link.url}>
                <li className="text-black font-medium">
                  <button className="bg-white px-6 py-1.5 rounded-sm">
                    {link.name}
                  </button>
                </li>
              </Link>
            ) : (
              <Link href={link.url}>
                <li className="text-zinc-300">{link.name}</li>
              </Link>
            )
          )}
        </ul>
      </nav>
      {showMenu && (
        <section className="lg:hidden fixed h-screen w-screen bg-black top-12 right-0 bottom-0 left-0 text-white p-6">
          <ul>
            {navLinks.map((link: { url: string; name: string }) => (
              <Link href={link.url}>
                <li className="py-3 border-b-2 border-zinc-700 text-zinc-300">
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </section>
      )}
    </header>
  );
};
