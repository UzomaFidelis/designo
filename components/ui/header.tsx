"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import clsx from "clsx";
import { Divide as Hamburger } from "hamburger-react";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // });
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    const handleOutsideNavClick = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        if (
          isOpen &&
          headerRef.current &&
          !headerRef.current.contains(e.target)
        ) {
          setIsOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleOutsideNavClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideNavClick);
    };
  }, [isOpen]);

  return (
    <header className={clsx("w-full flex justify-center")}>
      <div
        className={clsx(
          "bg-white w-full",
          "md:flex md:justify-between",
          "md:py-[1.3rem]",
          "lg:py-[1.6rem]",
          "xl:max-w-[65.5rem] xl:px-2",
        )}
        ref={headerRef}
      >
        <div
          className={clsx(
            "py-4 px-3 flex items-center justify-between relative",
          )}
        >
          <Link href="/">
            <Image
              src="/images/shared/desktop/logo-dark.png"
              alt="company logo"
              width={200}
              height={27}
            />
          </Link>
          <button className={clsx("md:hidden")}>
            <Hamburger
              size={28}
              color="black"
              toggled={isOpen}
              toggle={setIsOpen}
            />
          </button>
        </div>
        <Navbar isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Header;
