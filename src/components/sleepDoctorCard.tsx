import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SleepDoctorCardProps {
  name: string;
  suffix: string;
  headshotLink: string;
  titles: string[];
  pageLink: string;
}

const SleepDoctorCard: React.FC<SleepDoctorCardProps> = ({
  name,
  suffix,
  headshotLink,
  titles,
  pageLink,
}) => {
  return (
    <div className="flex w-fit flex-row rounded-xl border-2 border-blue-800 bg-sky-100">
      <img
        src={headshotLink}
        className="m-4 h-64 w-48 rounded-md object-cover"
      ></img>
      <div className="m-4 ml-0 flex flex-col justify-between">
        <div>
          <p className="text-2xl font-semibold">
            {name}, {suffix}
          </p>
          {titles.map((title) => (
            <p className="text-xl">{"- ".concat(title)}</p>
          ))}
        </div>
        <Link
          to={pageLink}
          className="mb-4 flex w-fit items-center rounded-md border-2 border-blue-600 p-3 text-center font-semibold text-blue-800 transition-all hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white"
        >
          More Information <ArrowRight className="ml-2 inline h-5.5 w-5.5" />
        </Link>
      </div>
    </div>
  );
};

export default SleepDoctorCard;
