import { Home, LinkIcon, List } from "lucide-react";
import { Link } from "react-router-dom";
import PageTitle from "./pageTitle";

interface SleepDoctorPageProps {
  name: string;
  suffix: string;
  headshotLink: string;
  titles: string[];
  biography: string;
  boardCertifications: string[];
  moreInfoLink: string;
}

const SleepDoctorPage: React.FC<SleepDoctorPageProps> = ({
  name,
  suffix,
  headshotLink,
  titles,
  biography,
  boardCertifications,
  moreInfoLink,
}) => {
  return (
    <div>
      <PageTitle text={name.concat(", ").concat(suffix)} />
      <div className="flex flex-col p-8 text-left">
        <img
          src={headshotLink}
          className="mx-auto mb-4 h-64 w-48 justify-center rounded-md object-cover"
        ></img>
        <h1 className="mx-auto text-xl">
          {titles.map((title, index) => (
            <span>
              {titles.length - 1 == index ? title : title.concat(", ")}
            </span>
          ))}
        </h1>
        <h1 className="mt-4 text-xl font-semibold">Biography</h1>
        <p className="text-lg">{biography}</p>
        <h1 className="mt-4 text-xl font-semibold">Board Certifications</h1>
        <p className="text-lg">
          {boardCertifications.map((certification, index) => (
            <span>
              {boardCertifications.length - 1 == index
                ? certification
                : certification.concat(", ")}
            </span>
          ))}
        </p>
        <div className="mt-8 flex flex-row flex-wrap justify-center gap-x-12 gap-y-8">
          <a
            href={moreInfoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-x-3 rounded-md border-2 border-blue-600 px-8 py-3 text-center text-xl font-semibold text-blue-800 transition-all hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white"
          >
            More Information <LinkIcon />
          </a>
          <Link
            to={"/sleep-doctors"}
            className="flex w-fit items-center gap-x-3 rounded-md border-2 border-blue-600 px-8 py-3 text-center text-xl font-semibold text-blue-800 transition-all hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white"
          >
            Other Doctors <List />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SleepDoctorPage;
