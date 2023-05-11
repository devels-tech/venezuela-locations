import { IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full max-w-3xl mx-auto py-10 text-white text-center px-8 lg:px-0">
      <p>Logo devels</p>

      <section className="flex flex-col items-center lg:flex-row lg:justify-between mt-10 w-full">
        <p>© 2023 Devels. Todos los derechos reservados.</p>

        <div className="flex gap-8 text-4xl mt-8 lg:text-2xl lg:mt-0 lg:gap-6">
          <a href="http://instagram/develstech" target="_blank" rel="noopener noreferrer">
            <IoLogoInstagram />
          </a>

          <a href="http://linkedin.com/company/develstech" target="_blank" rel="noopener noreferrer">
            <IoLogoLinkedin />
          </a>

          <a href="http://web.whatsapp.com/send?phone=584242863280" target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp />
          </a>
        </div>
      </section>
    </footer>
  );
};
