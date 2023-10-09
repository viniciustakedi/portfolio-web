import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import CurrentLocation from "./currentLocation";

interface MenuProps {
  showLocation?: boolean;
}

const Menu: React.FC<MenuProps> = ({ showLocation }) => {
  const ref = useRef() as any;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [locationVisible, setLocationVisible] = useState<boolean>(false);

  const handleMenu = () => {
    setIsMenuOpen((state) => !state);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 230) {
      setLocationVisible(true);
    } else if (scrolled <= 230) {
      setLocationVisible(false);
    }
  };

  useEffect(() => {
    if (showLocation) {
      window.addEventListener("scroll", toggleVisible);
      return () => {
        window.removeEventListener("scroll", toggleVisible);
      };
    }
  }, []);

  return (
    <>
      {showLocation && <CurrentLocation isVisible={locationVisible} />}
      <nav
        className={`nav-bar ${
          showLocation ? (locationVisible ? "top-0" : "top-12") : "top-0"
        }`}
      >
        <div
          ref={ref}
          className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
          <Link href="" scroll={false} className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {`{ Takedi }`}
            </span>
          </Link>
          <div className="flex md:order-2">
            <Link
              href="/blog"
              scroll={false}
              className="text-white bg-dark-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 hidden sm:block font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Blog
            </Link>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              name="icon-button-menu"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={handleMenu}
            >
              {!isMenuOpen ? <FiMenu size={26} /> : <FiX size={26} />}
            </button>
          </div>
          <div
            id="navbar-cta"
            className={`${
              !isMenuOpen ? "hidden" : "visible"
            } items-center justify-between w-full md:flex md:w-auto md:order-1 transaction-all`}
          >
            <ul className="flex flex-col font-medium md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 mt-3 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/#introduction"
                  scroll={false}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-soft-blue md:hover:text-dark-blue hover:text-white transition-all md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#habilities"
                  scroll={false}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-soft-blue md:hover:text-dark-blue hover:text-white transition-all md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Habilidades
                </Link>
              </li>
              <li>
                <Link
                  href="/#experience"
                  scroll={false}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-soft-blue md:hover:text-dark-blue hover:text-white transition-all md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Experiência
                </Link>
              </li>
              <li>
                <Link
                  href="/#about-me"
                  scroll={false}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-soft-blue md:hover:text-dark-blue hover:text-white transition-all md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  scroll={false}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-soft-blue md:hover:text-dark-blue hover:text-white transition-all md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  scroll={false}
                  className="block sm:hidden  py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-soft-blue md:hover:text-dark-blue hover:text-white transition-all md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
