import clsx from "clsx";
import Link from "next/link";

const Navbar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <nav
      className={clsx(
        isOpen ? "max-h-[15rem]" : "max-h-0",
        "transition-max-height ease-in duration-200",
        "overflow-hidden",
        "md:max-h-max",
      )}
    >
      <ul
        className={clsx(
          "bg-black-pri text-white bottom-[-8.2rem] h-fit left-0",
          "w-full text-xl flex p-4 flex-col gap-2 z-10",
          "md:bg-transparent md:flex-row md:text-darkgrey md:gap-7",
          "md:text-lg",
          "lg:text-xl",
        )}
      >
        <li className={clsx("uppercase")}>
          <Link href="/about">Our Company</Link>
        </li>
        <li className={clsx("uppercase")}>
          <Link href="/locations">Locations</Link>
        </li>
        <li className={clsx("uppercase")}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
