import { Metadata } from "next";
import clsx from "clsx";
import ProjectCard from "@/components/ui/project-card";
import Link from "next/link";
import LetsTalk from "@/components/ui/lets-talk";
import RightArrow from "@/components/icons/right-arrow";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Web Design Projects",
};

export default function WebDesign() {
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
            <h1 className={clsx("text-3xl font-semibold mb-6", "lg:text-4xl")}>
              Web Design
            </h1>
            <p className={clsx("lg:max-w-[30rem]")}>
              We build websites that serve as powerful marketing tools and bring
              memorable brand experiences.
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
                cardImgUrl="/images/web-design/desktop/image-express.jpg"
                cardImgAlt="express website design"
                cardTitle="Express"
                cardText="A multi-carrier shipping website for ecommerce business"
              />
              <ProjectCard
                cardImgUrl="/images/web-design/desktop/image-transfer.jpg"
                cardImgAlt="transfer website design"
                cardTitle="Transfer"
                cardText="Site for low-cost money transfers and sending money within seconds"
              />
              <ProjectCard
                cardImgUrl="/images/web-design/desktop/image-photon.jpg"
                cardImgAlt="photon website design"
                cardTitle="Photon"
                cardText="A state-of-the-art music player with high-resolution audio and DSP effects"
              />
              <ProjectCard
                cardImgUrl="/images/web-design/desktop/image-builder.jpg"
                cardImgAlt="builder website design"
                cardTitle="Builder"
                cardText="Connects users with local contractors based on their location"
              />
              <ProjectCard
                cardImgUrl="/images/web-design/desktop/image-blogr.jpg"
                cardImgAlt="blogr website design"
                cardTitle="Blogr"
                cardText="Blogr is a platform for creating an online blog or publication"
              />
              <ProjectCard
                cardImgUrl="/images/web-design/desktop/image-camp.jpg"
                cardImgAlt="camp website design"
                cardTitle="Camp"
                cardText="Get expert training in coding, data, design, and digital marketing"
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
                "w-full h-[16.3rem] bg-black-pri/50 bg-app-design bg-no-repeat bg-full bg-blend-overlay",
                "bg-center transition-bg-size duration-300 hover:bg-swell",
                "rounded-xl text-white",
                "flex flex-col justify-center gap-3 items-center",
              )}
            >
              <p className={clsx("uppercase font-medium text-3xl")}>
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
          </section>
          <LetsTalk />
        </div>
      </main>
      <Footer />
    </>
  );
}
