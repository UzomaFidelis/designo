import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import RightArrow from "@/components/icons/right-arrow";
import Passionate from "@/components/icons/passionate";
import Resourceful from "@/components/icons/resourceful";
import Friendly from "@/components/icons/friendly";
import LetsTalk from "@/components/ui/lets-talk";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center">
        <div className={clsx("md:px-4", "lg:text-lg", "xl:max-w-[65.5rem]")}>
          <h1 className="sr-only">Designo home page</h1>
          <section
            className={clsx(
              "bg-peach-pri text-white text-center pt-20 px-5 h-[52.2rem] bg-home-hero",
              "bg-no-repeat bg-[length:25rem] bg-[top_right_-6rem]",
              "overflow-hidden flex flex-col items-center",
              "md:rounded-2xl md:flex-row md:text-left md:pl-16 md:h-[32rem]",
              "md:pt-24 md:items-start md:gap-7 md:bg-[length:30rem] md:bg-[top_right_-4rem]",
              "lg:pt-32 lg:h-[36rem] lg:pl-24 lg:gap-10",
              "lg:bg-[length:35rem] lg:bg-[top_right_-3rem]",
            )}
          >
            <div className={clsx("mb-10 min-h-[19.75rem]", "md:basis-1/2")}>
              <h2
                className={clsx(
                  "text-3xl font-bold mb-7",
                  "lg:max-w-96 lg:text-4xl",
                )}
              >
                Award-winning custom designs and digital branding solutions
              </h2>
              <p className={clsx("mb-7", "lg:max-w-[26rem] lg:text-lg")}>
                With over 10 years in the industry, we are experienced in
                creating fully responsive websites, app design, and engaging
                brand experiences. Find out more about our services.
              </p>
              <Link
                href=""
                className={clsx(
                  "bg-white rounded-lg uppercase font-medium py-4 px-6 text-darkgrey",
                  "inline-block relative btn",
                )}
              >
                Learn more
              </Link>
            </div>
            <div
              className={clsx(
                "relative w-[20rem] h-[30rem] overflow-hidden scale-[1.6]",
                "shrink-0 pointer-events-none",
                "md:w-[20rem]",
                "lg:scale-[1.7]",
              )}
            >
              <Image
                src="/images/home/desktop/image-hero-phone.png"
                alt=""
                fill
                sizes="100%"
                priority
                aria-hidden
              />
            </div>
          </section>
          <section
            className={clsx(
              "px-4 py-40 grid grid-cols-1 gap-y-6 grid-rows-[repeat(3,_16.3rem)]",
              "md:grid-cols-2 md:gap-x-6 md:px-0 md:grid-rows-[repeat(2,_16.3rem)]",
              "lg:grid-rows-[repeat(2,_17.3rem)]",
            )}
          >
            <h2 className="sr-only">Projects</h2>
            <div
              className={clsx(
                "w-full bg-black-pri/50 bg-web-design bg-no-repeat bg-full bg-blend-overlay",
                "bg-center transition-bg-size duration-300 hover:bg-swell",
                "rounded-xl text-white",
                "flex flex-col justify-center gap-3 items-center",
                "md:col-start-1 md:row-start-1 md:row-span-2 md:bg-web-design-desktop",
              )}
            >
              <p
                className={clsx(
                  "uppercase font-medium text-3xl",
                  "lg:text-4xl",
                )}
              >
                Web Design
              </p>
              <div
                className={clsx("flex gap-4 items-center", "hover:bg-swell")}
              >
                <Link
                  href="/projects/web-design"
                  className={clsx(
                    "uppercase font-medium text-sm tracking-[0.4em]",
                  )}
                >
                  View projects
                </Link>
                <span>
                  <RightArrow />
                </span>
              </div>
            </div>
            <div
              className={clsx(
                "w-full bg-black-pri/50 bg-app-design bg-no-repeat bg-full bg-blend-overlay",
                "bg-center transition-bg-size duration-300 hover:bg-swell",
                "rounded-xl text-white",
                "flex flex-col justify-center gap-3 items-center",
                "md:bg-app-design-desktop",
              )}
            >
              <p
                className={clsx(
                  "uppercase font-medium text-3xl",
                  "lg:text-4xl",
                )}
              >
                App design
              </p>
              <div
                className={clsx("flex gap-4 items-center", "hover:bg-swell")}
              >
                <Link
                  href="/projects/app-design"
                  className={clsx(
                    "uppercase font-medium text-sm tracking-[0.4em]",
                  )}
                >
                  View projects
                </Link>
                <span>
                  <RightArrow />
                </span>
              </div>
            </div>
            <div
              className={clsx(
                "w-full bg-black-pri/50 bg-graphic-design bg-no-repeat bg-full bg-blend-overlay",
                "bg-center transition-bg-size duration-300 hover:bg-swell",
                "rounded-xl text-white",
                "flex flex-col justify-center gap-3 items-center",
                "md:bg-graphic-design-desktop",
              )}
            >
              <p
                className={clsx(
                  "uppercase font-medium text-3xl",
                  "lg:text-4xl",
                )}
              >
                Graphic design
              </p>
              <div
                className={clsx("flex gap-4 items-center", "hover:bg-swell")}
              >
                <Link
                  href="/projects/graphic-design"
                  className={clsx(
                    "uppercase font-medium text-sm tracking-[0.4em]",
                  )}
                >
                  View projects
                </Link>
                <span>
                  <RightArrow />
                </span>
              </div>
            </div>
          </section>
          <section
            className={clsx(
              "flex flex-col gap-7 pb-[9.6rem]",
              "md:flex-row md:gap-3 md:pb-[6.5rem]",
            )}
          >
            <h2 className="sr-only">Our qualities</h2>
            <div className={clsx("flex flex-col items-center gap-8")}>
              <Passionate />
              <div className={clsx("text-center px-4", "px-0")}>
                <h3
                  className={clsx(
                    "uppercase text-xl tracking-[0.25em] text-darkgrey font-medium mb-8",
                  )}
                >
                  Passionate
                </h3>
                <p className={clsx("text-darkgrey/80 leading-[1.7]")}>
                  Each project starts with an in-depth brand research to ensure
                  we only create products that serve a purpose. We merge art,
                  design, and technology into exciting new solutions.
                </p>
              </div>
            </div>
            <div className={clsx("flex flex-col items-center gap-8")}>
              <Resourceful />
              <div className={clsx("text-center px-4", "px-0")}>
                <h3
                  className={clsx(
                    "uppercase text-xl tracking-[0.25em] text-darkgrey font-medium mb-8",
                  )}
                >
                  Resourceful
                </h3>
                <p className={clsx("text-darkgrey/80 leading-[1.7]")}>
                  Everything that we do has a strategic purpose. We use an agile
                  approach in all of our projects and value customer
                  collaboration. It guarantees superior results that fulfill our
                  clients&apos; needs.
                </p>
              </div>
            </div>
            <div className={clsx("flex flex-col items-center gap-8")}>
              <Friendly />
              <div className={clsx("text-center px-4", "px-0")}>
                <h3
                  className={clsx(
                    "uppercase text-xl tracking-[0.25em] text-darkgrey font-medium mb-8",
                  )}
                >
                  Friendly
                </h3>
                <p className={clsx("text-darkgrey/80 leading-[1.7]")}>
                  We are a group of enthusiastic folks who know how to put
                  people first. Our success depends on our customers, and we
                  strive to give them the best experience a company can provide.
                </p>
              </div>
            </div>
          </section>
          <LetsTalk />
        </div>
      </main>
      <Footer />
    </>
  );
}
