import Link from "next/link";
import clsx from "clsx";

const LetsTalk = () => {
  return (
    <section
      className={clsx(
        "bg-peach-pri text-white text-center py-16 px-6",
        "bg-design-intro bg-no-repeat",
        "md:relative md:top-16 md:rounded-2xl md:text-left md:pl-16",
        "lg:flex lg:justify-between lg:items-center lg:px-20",
      )}
    >
      <div>
        <h2 className={clsx("text-3xl font-semibold mb-5", "md:max-w-[18rem]")}>
          Let&apos;s talk about your project
        </h2>
        <p className={clsx("mb-5", "md:max-w-[30rem]")}>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <Link
        href="/contact"
        className={clsx(
          "uppercase bg-white text-darkgrey text-sm py-5 px-8 rounded-lg inline-block",
          "tracking-[0.07em] font-medium btn",
          "lg:text-base",
        )}
      >
        Get in touch
      </Link>
    </section>
  );
};

export default LetsTalk;
