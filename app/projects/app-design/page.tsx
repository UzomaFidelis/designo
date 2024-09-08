import { Metadata } from "next";
import clsx from "clsx";
import Link from "next/link";
import ProjectCard from "@/components/ui/project-card";
import RightArrow from "@/components/icons/right-arrow";
import LetsTalk from "@/components/ui/lets-talk";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "App Design Projects",
};

export default function AppDesign() {
  return (
    <>
      <main className="flex flex-col items-center">
        <div
          className={clsx("w-full", "md:px-4 md:text-lg", "xl:max-w-[65.5rem]")}
        >
          <section
            className={clsx(
              "bg-peach-pri text-white text-center py-[4.2rem] px-7",
              "bg-design-intro bg-[top_-1rem_left_-4vw] bg-no-repeat",
              "flex flex-col items-center",
              "md:rounded-2xl",
              "lg:bg-[top_-1rem_left_6vw]",
            )}
          >
            <h1 className={clsx("text-3xl font-semibold mb-6")}>App Design</h1>
            <p className="lg:max-w-[30rem]">
              Our mobile designs bring intuitive digital solutions to your
              customers right at their fingertips.
            </p>
          </section>
          <section className={clsx("px-4 py-40")}>
            <ul
              className={clsx(
                "grid grid-cols-1 gap-y-[2.2rem]",
                "md:grid-cols-2 md:gap-x-[2.2rem] md:items-stretch",
                "lg:grid-cols-3",
              )}
            >
              <ProjectCard
                cardImgUrl="/images/app-design/desktop/image-airfilter.jpg"
                cardImgAlt="airfilter design"
                cardTitle="Airfilter"
                cardText="Solving the problem of poor indoor air quality by filtering the air"
              />
              <ProjectCard
                cardImgUrl="/images/app-design/desktop/image-eyecam.jpg"
                cardImgAlt="eyecam design"
                cardTitle="Eyecam"
                cardText="Product that lets you edit your favorite photos and videos at any time"
              />
              <ProjectCard
                cardImgUrl="/images/app-design/desktop/image-faceit.jpg"
                cardImgAlt="faceit design"
                cardTitle="Faceit"
                cardText="Get to meet your favorite internet superstar with the faceit app"
              />
              <ProjectCard
                cardImgUrl="/images/app-design/desktop/image-todo.jpg"
                cardImgAlt="todo design"
                cardTitle="Todo"
                cardText="A todo app that features cloud sync with light and dark mode"
              />
              <ProjectCard
                cardImgUrl="/images/app-design/desktop/image-loopstudios.jpg"
                cardImgAlt="loopstudios design"
                cardTitle="Loopstudios"
                cardText="A VR experience app made for Loopstudiios"
              />
            </ul>
          </section>
          <section
            className={clsx(
              "px-4 pt-2 pb-40 flex flex-col gap-8",
              "md:flex-row",
            )}
          >
            <div
              className={clsx(
                "w-full h-[16.3rem] bg-black-pri/50 bg-graphic-design bg-no-repeat bg-full bg-blend-overlay",
                "bg-center transition-bg-size duration-300 hover:bg-swell",
                "rounded-xl text-white",
                "flex flex-col justify-center gap-3 items-center",
              )}
            >
              <p className={clsx("uppercase font-medium text-3xl")}>
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
            <div
              className={clsx(
                "w-full h-[16.3rem] bg-black-pri/50 bg-web-design bg-no-repeat bg-full bg-blend-overlay",
                "bg-center transition-bg-size duration-300 hover:bg-swell",
                "rounded-xl text-white",
                "flex flex-col justify-center gap-3 items-center",
              )}
            >
              <p className={clsx("uppercase font-medium text-3xl")}>
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
          </section>
          <LetsTalk />
        </div>
      </main>
      <Footer />
    </>
  );
}
