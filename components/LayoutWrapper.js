import Link from "next/link";
import Image from "next/image";

const LayoutWrapper = () => {
  return (
    <>
      <header aria-label="Site Header" className="shadow-2xl ">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block text-[#8c3cfc ]" href="/">
                <span className="sr-only">Home</span>

                <Image
                    className="max-w-sm w-full p-5"
                    width={100}
                    height={100}
                    src="/logo-react.png" 
                    alt="imagen"
                  />
               
              </Link>
            </div>

            <div className="md:flex md:items-center">
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
                    <Link 
                    target="_blank"
                   href="https://github.com/JoseOrdaz"><svg viewBox="0 0 24 24" aria-hidden="true" class="h-8 w-8 fill-slate-900"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg></Link>
                   
                  <div className="sm:flex">
                      <Link 
                      target="_blank"

                      href="https://portfolio.joseordaz.com/">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
  <path fill-rule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z" clip-rule="evenodd" />
</svg>

                      </Link>
                    
                  </div>
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
