import headerNavLinks from "../data/headerNavLinks";

const LayoutWrapper = () => {
  return (
    <>
      <header aria-label="Site Header" class="bg-white">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between">
            <div class="flex-1 md:flex md:items-center md:gap-12">
              <a class="block text-[#7843E6]" href="/">
                <span class="sr-only">Home</span>
                <img class="max-w-sm" src="./logo-josereact.png" />
              </a>
            </div>

            <div class="md:flex md:items-center md:gap-12">
              {/* <nav aria-label="Site Nav" class="hidden md:block">
                <ul class="flex items-center gap-6 text-sm">
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

              <div class="flex items-center gap-4">
                <div class="sm:flex sm:gap-4">
                  <a
                    class="rounded-md bg-[#7843E6] px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/"
                  >
                    GITHUB
                  </a>

                  <div class="hidden sm:flex">
                    <a
                      class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#7843E6]"
                      href="/"
                    >
                      PORTFOLIO
                    </a>
                  </div>
                </div>

                <div class="block md:hidden">
                  <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
