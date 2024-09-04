import clsx from "clsx";
import Locations from "@/components/ui/locations";
import Footer from "@/components/ui/footer";
import ContactForm from "@/components/ui/contact-form";

const Contact = () => {
  return (
    <>
      <main className="flex flex-col items-center">
        <div
          className={clsx("w-full", "md:px-4 md:text-lg", "xl:max-w-[65.5rem]")}
        >
          <div
            className={clsx(
              "bg-peach-pri text-white py-16 px-6 flex flex-col items-center",
              "bg-contact-hero-mobile bg-no-repeat bg-[top_left_-1rem]",
              "bg-[length:70rem]",
              "md:bg-about-hero-desktop md:bg-[length:40rem] md:bg-[top_-4rem_left_-6rem]",
              "md:rounded-2xl",
              "lg:px-16",
            )}
          >
            <div
              className={clsx(
                "text-center",
                "md:text-left md:max-w-[34rem]",
                "lg:flex lg:gap-8 lg:items-center lg:max-w-full",
              )}
            >
              <div className={clsx("lg:pr-8")}>
                <h1 className={clsx("text-5xl font-medium mb-8")}>
                  Contact Us
                </h1>
                <p className={clsx("leading-[1.6] mb-14")}>
                  Ready to take it to the next level? Let's talk about your
                  project or idea and find out how we can help your business
                  grow. If you are looking for unique digital experiences that's
                  relatable to your users, drop us a line.
                </p>
              </div>
              <div className={clsx("shrink-0", "lg:basis-[25rem]")}>
                <ContactForm />
              </div>
            </div>
          </div>
          <div className={clsx("py-40", "md:px-2")}>
            <Locations />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
