import clsx from "clsx";
import Link from "next/link";

const Location = ({
  location,
  url,
  illustration,
}: {
  location: string;
  url: string;
  illustration: React.ReactNode;
}) => {
  return (
    <li className={clsx("flex flex-col items-center")}>
      <div
        className={clsx(
          "rounded-full bg-gradient-to-r from-darkgrey/10 to-white",
          "mb-9",
        )}
      >
        {illustration}
      </div>
      <p className={clsx("mb-9 capitalize")}>{location}</p>
      <Link
        href={url}
        className={clsx(
          "py-4 px-6 rounded-lg bg-peach-pri uppercase font-semibold text-white",
        )}
      >
        See location
      </Link>
    </li>
  );
};

export default Location;
