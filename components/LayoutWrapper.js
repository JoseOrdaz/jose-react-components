import headerNavLinks from "../data/headerNavLinks";

const LayoutWrapper = () => {
  return (
    <>
      <header aria-label="Site Header" className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-[#7843E6]" href="/">
                <span className="sr-only">Home</span>
                <img className="max-w-sm" src="./logo-josereact.png" />
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              {/* <nav aria-label="Site Nav" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    {headerNavLinks.map((link) => (
                      <a
                        key={link.title}
                        href={link.href}
                        className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                      >
                        {link.title}
                      </a>
                    ))}
                  </li>
                </ul>
              </nav> */}

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a target="_blank"
                    className="rounded-md bg-[#7843E6] px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="https://github.com/JoseOrdaz"
                  >
                    GITHUB
                  </a>

                  <div className="hidden sm:flex">
                  <a target="_blank"
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#7843E6]"
                      href="https://portfolio.joseordaz.com/"
                    >
                      PORTFOLIO
                    </a>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default LayoutWrapper;
