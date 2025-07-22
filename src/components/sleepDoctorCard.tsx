import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SleepDoctorCardProps {
  name: string;
  suffix: string;
  headshotLink: string;
  title: string;
}

const SleepDoctorCard: React.FC<SleepDoctorCardProps> = ({
  name,
  suffix,
  headshotLink,
  title,
}) => {
  return (
    <div className="flex w-fit flex-row rounded-xl border-2 border-blue-800 bg-sky-100">
      <img src={headshotLink} className="m-4 h-64 rounded-md"></img>
      <div className="m-4 flex flex-col justify-between">
        <div>
          <p className="text-2xl font-semibold">
            {name}, {suffix}
          </p>
          <p className="text-xl">{title}</p>
        </div>
        <Link
          to={"/palakkumar-patel"}
          className="flex items-center mb-4 w-fit rounded-md border-2 border-blue-600 p-3 text-center font-semibold text-blue-800 transition-all hover:bg-blue-600 hover:text-white"
        >
          More Information <ArrowRight className="inline ml-2 h-5.5 w-5.5" />
        </Link>
      </div>
    </div>
  );
};

export default SleepDoctorCard;
