import Image from "next/image";
import clsx from "clsx";

const ProjectCard = ({
  cardImgUrl,
  cardImgAlt,
  cardTitle,
  cardText,
}: {
  cardImgUrl: string;
  cardImgAlt: string;
  cardTitle: string;
  cardText: string;
}) => {
  return (
    <li className={clsx("bg-peach-sec/10 rounded-xl overflow-hidden")}>
      <div className={clsx("relative w-full h-[19.7rem]")}>
        <Image src={cardImgUrl} alt={cardImgAlt} fill sizes="100%" />
      </div>
      <div className={"text-center py-8 px-7"}>
        <p
          className={clsx(
            "uppercase tracking-[0.25em] font-semibold text-peach-pri text-xl mb-3",
          )}
        >
          {cardTitle}
        </p>
        <p className={"text-darkgrey/80 tracking-[-0.02em] font-medium"}>
          {cardText}
        </p>
      </div>
    </li>
  );
};

export default ProjectCard;
