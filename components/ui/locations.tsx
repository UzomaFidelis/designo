import Location from "./location-item";
import IllustrationUk from "../icons/illustration-uk";
import IllustrationAustralia from "../icons/illustration-australia";
import IllustrationCanada from "../icons/illustration-canada";
import clsx from "clsx";

const Locations = () => {
  return (
    <ul
      className={clsx(
        "flex flex-col items-center gap-7",
        "md:flex-row md:justify-between",
      )}
    >
      <Location
        location="canada"
        illustration={<IllustrationCanada />}
        url="/locations#canada"
      />
      <Location
        location="australia"
        illustration={<IllustrationAustralia />}
        url="/locations#australia"
      />
      <Location
        location="united kingdom"
        illustration={<IllustrationUk />}
        url="/locations#uk"
      />
    </ul>
  );
};

export default Locations;
