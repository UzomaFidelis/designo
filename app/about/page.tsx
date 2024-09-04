import Image from "next/image";
import clsx from "clsx";
import LetsTalk from "@/components/ui/lets-talk";
import Footer from "@/components/ui/footer";
import Locations from "@/components/ui/locations";

const About = () => {
  return (
    <>
      <main className="flex flex-col items-center">
        <div className={clsx("md:px-4 md:text-lg", "xl:max-w-[66.5rem]")}>
          <div
            className={clsx(
              "bg-peach-pri",
              "bg-about-hero-mobile bg-[top_18rem_left_-25rem] bg-no-repeat",
              "bg-[length:70rem]",
              "md:bg-about-hero-desktop md:bg-[length:25rem] md:bg-[top_-4rem_left_-6rem]",
              "md:flex md:flex-row-reverse md:rounded-2xl md:overflow-hidden md:h-[23.3rem]",
              "lg:bg-[length:30rem] lg:bg-[top_-2rem_left_-7rem]",
              "lg:items-center",
              "lg:h-[31rem]",
            )}
          >
            <div
              className={clsx(
                "relative w-full h-[20.1rem] overflow-hidden",
                "md:h-full md:basis-[16rem] md:shrink-0",
                "lg:basis-[48%]",
              )}
            >
              <Image
                src="/images/about/mobile/image-about-hero.jpg"
                alt=""
                fill
                sizes="100%"
                priority
                className={clsx("md:hidden")}
                aria-hidden
              />

              <Image
                src="/images/about/desktop/image-about-hero.jpg"
                alt=""
                fill
                sizes="100%"
                priority
                className={clsx("hidden md:block")}
                aria-hidden
              />
            </div>
            <div
              className={clsx(
                "text-white text-center py-20 px-6",
                "md:text-left md:pl-16 md:py-12",
                "lg:basis-[52%]",
              )}
            >
              <h1
                className={clsx("text-3xl font-semibold mb-6", "lg:text-4xl")}
              >
                About Us
              </h1>
              <p className={clsx("leading-[1.6]")}>
                Founded in 2010, we are a creative agency that produces lasting
                results for our clients. We've partnered with many startups,
                corporations, and nonprofits alike to craft designs that make
                real impact. We're always looking forward to creating brands,
                products, and digital experiences that connect with our clients'
                audiences.
              </p>
            </div>
          </div>
          <div className={clsx("py-40")}>
            <div
              className={clsx(
                "bg-peach-sec/10",
                "md:rounded-2xl md:overflow-hidden",
                "lg:flex lg:items-center lg:h-[36rem]",
              )}
            >
              <div
                className={clsx(
                  "relative h-80",
                  "lg:h-full lg:basis-[25rem] lg:shrink-0",
                )}
              >
                <Image
                  src="/images/about/mobile/image-world-class-talent.jpg"
                  alt="woman looking at wall of images"
                  fill
                  sizes="100%"
                  className="md:hidden"
                />
                <Image
                  src="/images/about/tablet/image-world-class-talent.jpg"
                  alt="woman looking at wall of images"
                  fill
                  sizes="100%"
                  className="hidden md:block lg:hidden"
                />
                <Image
                  src="/images/about/desktop/image-world-class-talent.jpg"
                  alt="woman looking at wall of images"
                  fill
                  sizes="100%"
                  className="hidden lg:block"
                />
              </div>
              <div
                className={clsx(
                  "text-left px-14 py-16 text-darkgrey",
                  "lg:py-20 lg:pl-16 lg:pr-24",
                )}
              >
                <h2
                  className={clsx(
                    "text-[2.55rem] leading-[1.2] font-medium mb-6",
                    "text-peach-pri",
                  )}
                >
                  World-class talent
                </h2>
                <p className={clsx("leading-[1.6] mb-7")}>
                  We are a crew of strategists, problem-solvers, and
                  technologists. Every design is thoughtfully crafted from
                  concept to launch, ensuring success in its given market. We
                  are constantly updating our skills in a myriad of platforms.
                </p>
                <p className={clsx("leading-[1.6]")}>
                  Our team is mulit-disciplinary and we are not merely
                  interested in form &mdash; content and meaning are just as
                  important. We give great inportance to craftsmanship, service,
                  and prompt delivery. Clients have always been impressed with
                  our high-quality outcomes that encapsulates their brand's
                  story and mission.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-40">
            <h2 className="sr-only">Our locations</h2>
            <Locations />
          </div>
          <div
            className={clsx(
              "mb-40 bg-peach-sec/10",
              "md:overflow-hidden md:rounded-2xl md:mb-28",
              "lg:flex lg:flex-row-reverse lg:items-center lg:h-[36rem]",
            )}
          >
            <div
              className={clsx(
                "relative h-80",
                "lg:h-full lg:basis-[25rem] lg:shrink-0",
              )}
            >
              <Image
                src="/images/about/tablet/image-real-deal.jpg"
                alt="hand touching image on wall of images"
                fill
                sizes="100%"
                className="md:hidden"
              />
              <Image
                src="/images/about/tablet/image-real-deal.jpg"
                alt="hand touching image on wall of images"
                fill
                sizes="100%"
                className="hidden md:block lg:hidden"
              />
              <Image
                src="/images/about/desktop/image-real-deal.jpg"
                alt="hand touching image on wall of images"
                fill
                sizes="100%"
                className="hidden lg:block"
              />
            </div>
            <div
              className={clsx(
                "text-left px-14 py-16 text-darkgrey",
                "lg:py-20 lg:pl-16 lg:pr-24",
              )}
            >
              <h2
                className={clsx(
                  "text-[2.55rem] leading-[1.2] font-medium mb-6",
                  "text-peach-pri",
                )}
              >
                The real deal
              </h2>
              <p className={clsx("leading-[1.6] mb-7")}>
                As strategic partners in our clients' businesses, we are ready
                to take on any challenge as our own. Solving real problems
                require empathy and collaboration, and we strive to bring a
                fresh perspective to every opportunity. We make design and
                technology more accessible and give your tools to measure
                success.
              </p>
              <p className={clsx("leading-[1.6]")}>
                We are visual storytellesr in appealing and captivating ways. By
                combining business and marketing strategies, we inspire
                audiences to take action and drive real results.
              </p>
            </div>
          </div>
          <LetsTalk />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
