import Footer from "@/components/ui/footer";
import LetsTalk from "@/components/ui/lets-talk";
import clsx from "clsx";
import Image from "next/image";

const Locations = () => {
  return (
    <>
      <main className="flex flex-col items-center">
        <div
          className={clsx("w-full", "md:px-4 md:text-lg", "xl:max-w-[65.5rem]")}
        >
          <h1 className="sr-only">Our locations</h1>
          <div className={clsx("flex flex-col gap-8 mb-20")}>
            <div
              className={clsx(
                "md:flex md:flex-row-reverse md:gap-8 md:h-[28rem]",
                "lg:h-[20rem]",
              )}
            >
              <div
                className={clsx(
                  "relative w-full h-[21rem] overflow-hidden bg-slate-200",
                  "md:basis-1/2 md:h-auto md:rounded-2xl",
                  "lg:basis-[22rem]",
                )}
              >
                <Image
                  src="/images/locations/tablet/image-map-canada.png"
                  alt="map to our location in canada"
                  fill
                  sizes="100%"
                />
              </div>
              <div
                className={clsx(
                  "py-16 text-center bg-peach-sec/10",
                  "md:basis-1/2 md:text-left md:pl-12 md:rounded-2xl",
                  "md:flex md:items-center",
                  "lg:flex-1",
                )}
              >
                <div
                  className={clsx(
                    "lg:flex lg:items-end lg:gap-12 lg:w-full",
                    "xl:gap-16",
                  )}
                >
                  <div
                    className={clsx(
                      "lg:shrink-0 lg:basis-[15rem]",
                      "xl:basis-[18rem]",
                    )}
                  >
                    <h2
                      id="canada"
                      className={clsx(
                        "text-[2.5rem] font-medium text-peach-pri mb-6",
                      )}
                    >
                      Canada
                    </h2>
                    <address
                      className={clsx(
                        "capitalize text-darkgrey mb-9 not-italic",
                        "md:text-left md:flex-1",
                        "lg:mb-0",
                      )}
                    >
                      <p className={clsx("font-bold")}>
                        Designs central office
                      </p>
                      <p>3886 Wellington Street</p>
                      <p>Toronto, Ontario M9C 3j5</p>
                    </address>
                  </div>
                  <div
                    className={clsx(
                      "text-darkgrey mb-8",
                      "md:text-left md:flex-1",
                      "lg:mb-0 lg:flex-none",
                    )}
                  >
                    <p className={clsx("font-bold")}>Contact</p>
                    <p>P: +1 253-863-8967</p>
                    <p>M: contact@designo.co</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={clsx(
                "md:flex md:flex-row md:gap-8 md:h-[28rem]",
                "lg:h-[20rem]",
              )}
            >
              <div
                className={clsx(
                  "relative w-full h-[21rem] overflow-hidden bg-slate-200",
                  "md:basis-1/2 md:h-auto md:rounded-2xl",
                  "lg:basis-[22rem]",
                )}
              >
                <Image
                  src="/images/locations/tablet/image-map-australia.png"
                  alt="map to our location in australia"
                  fill
                  sizes="100%"
                />
              </div>
              <div
                className={clsx(
                  "py-16 text-center bg-peach-sec/10",
                  "md:basis-1/2 md:text-left md:pl-12 md:rounded-2xl",
                  "md:flex md:items-center",
                  "lg:flex-1",
                )}
              >
                <div
                  className={clsx(
                    "lg:flex lg:items-end lg:gap-12 lg:w-full",
                    "xl:gap-16",
                  )}
                >
                  <div
                    className={clsx(
                      "lg:shrink-0 lg:basis-[15rem]",
                      "xl:basis-[18rem]",
                    )}
                  >
                    <h2
                      id="australia"
                      className={clsx(
                        "text-[2.5rem] font-medium text-peach-pri mb-6",
                      )}
                    >
                      Australia
                    </h2>
                    <address
                      className={clsx(
                        "capitalize text-darkgrey mb-9 not-italic",
                        "md:text-left md:flex-1",
                        "lg:mb-0",
                      )}
                    >
                      <p className={clsx("font-bold")}>Designs Au office</p>
                      <p>19 Balonne Street</p>
                      <p>New South Wales 2443</p>
                    </address>
                  </div>
                  <div
                    className={clsx(
                      "text-darkgrey mb-8",
                      "md:text-left md:flex-1",
                      "lg:mb-0 lg:flex-none",
                    )}
                  >
                    <p className={clsx("font-bold")}>Contact</p>
                    <p>P: (02) 6720 9092</p>
                    <p>M: contact@designo.au</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={clsx(
                "md:flex md:flex-row-reverse md:gap-8 md:h-[28rem]",
                "lg:h-[20rem]",
              )}
            >
              <div
                className={clsx(
                  "relative w-full h-[21rem] overflow-hidden bg-slate-200",
                  "md:basis-1/2 md:h-auto md:rounded-2xl",
                  "lg:basis-[22rem]",
                )}
              >
                <Image
                  src="/images/locations/tablet/image-map-uk.png"
                  alt="map to our location in the united kingdom"
                  fill
                  sizes="100%"
                />
              </div>
              <div
                className={clsx(
                  "py-16 text-center bg-peach-sec/10",
                  "md:basis-1/2 md:text-left md:pl-12 md:rounded-2xl",
                  "md:flex md:items-center",
                  "lg:flex-1",
                )}
              >
                <div
                  className={clsx(
                    "lg:flex lg:items-end lg:gap-12 lg:w-full",
                    "xl:gap-16",
                  )}
                >
                  <div
                    className={clsx(
                      "lg:shrink-0 lg:basis-[15rem]",
                      "xl:basis-[18rem]",
                    )}
                  >
                    <h2
                      id="uk"
                      className={clsx(
                        "text-[2.5rem] font-medium text-peach-pri mb-6",
                        "md:leading-[1.1]",
                      )}
                    >
                      United Kingdom
                    </h2>
                    <address
                      className={clsx(
                        "capitalize text-darkgrey mb-9 not-italic",
                        "md:text-left md:flex-1",
                        "lg:mb-0",
                      )}
                    >
                      <p className={clsx("font-bold")}>Designs UK office</p>
                      <p>13 Colorado Way</p>
                      <p>Rhyd-y-fro SA8 9GA</p>
                    </address>
                  </div>
                  <div
                    className={clsx(
                      "text-darkgrey mb-8",
                      "md:text-left md:flex-1",
                      "lg:mb-0 lg:flex-none",
                    )}
                  >
                    <p className={clsx("font-bold")}>Contact</p>
                    <p>P: 078 3115 1440</p>
                    <p>M: contact@designo.uk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <LetsTalk />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Locations;
