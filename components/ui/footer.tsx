import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import Facebook from "../icons/facebook";
import Youtube from "../icons/youtube";
import Twitter from "../icons/twitter";
import Pinterest from "../icons/pinterest";
import Instagram from "../icons/instagram";

const Footer = () => {
  return (
    <footer className="bg-darkgrey flex flex-col items-center">
      <div
        className={clsx(
          "py-[4.5rem] flex flex-col items-center text-center w-full",
          "md:pt-[6.5rem] md:px-7",
          "xl:max-w-[65.5rem] xl:px-4",
        )}
      >
        <div
          className={clsx(
            "flex flex-col items-center w-full",
            "md:flex-row md:justify-between md:py-10 md:items-center",
            "md:border-b md:border-b-lightgrey/20",
          )}
        >
          <Link href="/" className={clsx("relative mb-10", "md:mb-0")}>
            <Image
              src="/images/shared/desktop/logo-light.png"
              alt="company logo"
              width={200}
              height={27}
            />
          </Link>
          <ul
            className={clsx(
              "text-white w-5/6 border-t border-t-lightgrey/20 py-4 mb-9",
              "md:flex md:border-none md:w-fit md:gap-9 md:mb-0 md:py-0",
            )}
          >
            <li className={clsx("py-4", "md:py-0")}>
              <Link
                href="/about"
                className={clsx(
                  "uppercase font-medium text-[0.9rem] tracking-widest",
                  "md:text-base",
                )}
              >
                Our company
              </Link>
            </li>
            <li className={clsx("py-4", "md:py-0")}>
              <Link
                href="/locations"
                className={clsx(
                  "uppercase font-medium text-[0.9rem] tracking-widest",
                  "md:text-base",
                )}
              >
                Locations
              </Link>
            </li>
            <li className={clsx("py-4", "md:py-0")}>
              <Link
                href="/contact"
                className={clsx(
                  "uppercase font-medium text-[0.9rem] tracking-widest",
                  "md:text-base",
                )}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={clsx("md:flex md:justify-between md:w-full", "md:pt-12")}
        >
          <address
            className={clsx(
              "capitalize text-lightgrey mb-9 not-italic",
              "md:text-left md:flex-1",
            )}
          >
            <p className={clsx("font-bold")}>Designs central office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3j5</p>
          </address>
          <div
            className={clsx("text-lightgrey mb-8", "md:text-left md:flex-1")}
          >
            <p className={clsx("font-bold")}>Contact Us (Central Office)</p>
            <p>P: +1 253-863-8967</p>
            <p>M: contact@designo.co</p>
          </div>
          <ul className={clsx("flex items-center gap-4")}>
            <li>
              <Link href="">
                <Facebook aria-label="like us on facebook" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Youtube aria-label="see our youtube content" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Twitter aria-label="follow our X account" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Pinterest aria-label="see us on pinterest account" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Instagram aria-label="follow us on instagram" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
