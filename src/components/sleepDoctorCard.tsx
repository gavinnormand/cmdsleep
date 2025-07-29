import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SleepDoctorCardProps {
  name: string;
  suffix: string;
  headshotLink: string;
  tag?: string;
  titles: string[];
  pageLink: string;
}

const SleepDoctorCard: React.FC<SleepDoctorCardProps> = ({
  name,
  suffix,
  headshotLink,
  tag,
  titles,
  pageLink,
}) => {
  return (
    <div className="flex w-fit flex-col items-center rounded-xl border-2 border-blue-800 bg-sky-100 md:flex-row md:items-stretch">
      <img
        src={headshotLink}
        className="m-4 h-64 w-48 rounded-md object-cover"
      ></img>
      <div className="mx-4 flex flex-col justify-between md:m-4 md:ml-0">
        <div>
          <p className="text-2xl font-semibold">
            {name}, {suffix}
          </p>
          {tag && <p className="text-xl font-semibold">{tag}</p>}
          {titles.map((title) => (
            <p className="text-lg">{"- ".concat(title)}</p>
          ))}
        </div>
        <Link
          to={pageLink}
          className="mx-auto my-4 md:m-0 flex w-fit items-center rounded-md border-2 border-blue-600 p-3 text-center font-semibold text-blue-800 transition-all hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white"
        >
          More Information <ArrowRight className="ml-2 inline h-5.5 w-5.5" />
        </Link>
      </div>
    </div>
  );
};

export default SleepDoctorCard;
