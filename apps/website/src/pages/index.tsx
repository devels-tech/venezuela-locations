export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div>
        <h1 className="font-black text-4xl">Venezuela API Locations</h1>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          href="https://locations-doc.devels.tech"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Documentación{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Encuentra mas información sobre nuestra API
          </p>
        </a>

        <a
          href="https://devels.tech"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Conócenos{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Conoce a Devels Technology
          </p>
        </a>
      </div>
    </main>
  );
}
