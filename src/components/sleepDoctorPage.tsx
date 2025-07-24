import { LinkIcon, List } from "lucide-react";
import { Link } from "react-router-dom";

interface address {
  name: string;
  link: string;
}

interface SleepDoctorPageProps {
  name: string;
  suffix: string;
  headshotLink: string;
  titles: string[];
  biography: string;
  boardCertifications: string[];
  moreInfoLink: string;
  note?: string;
  phone: string;
  addresses: address[];
}

const SleepDoctorPage: React.FC<SleepDoctorPageProps> = ({
  name,
  suffix,
  headshotLink,
  titles,
  biography,
  boardCertifications,
  moreInfoLink,
  note,
  phone,
  addresses,
}) => {
  return (
    <div>
      <div className="w-full bg-sky-100 py-8">
        <div className="mx-auto grid w-fit grid-cols-1 gap-4 text-center md:grid-cols-2 md:text-left">
          <img
            src={headshotLink}
            className="h-64 w-48 justify-self-center rounded-md object-cover md:justify-self-end"
          ></img>
          <div className="mr-8 flex flex-col justify-self-start">
            <h1 className="text-2xl font-semibold">
              {name.concat(", ").concat(suffix)}
            </h1>
            <p className="text-xl">
              {titles.map((title, index) => (
                <span>
                  {titles.length - 1 == index ? title : title.concat(", ")}
                </span>
              ))}
            </p>
            <p className="text-xl">
              Phone:
              <a
                href={"tel:+1".concat(phone.replace(/\D/g, ""))}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-blue-600 hover:underline active:text-blue-800 active:underline"
              >
                {phone}
              </a>
            </p>
            <p className="text-xl">Offices:</p>
            {addresses.map((address) => (
              <p className="text-xl">
                {"📍 "}
                <a
                  className="text-xl text-blue-600 hover:underline active:text-blue-800 active:underline"
                  href={address.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {address.name}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="p-8">
        <h1 className="text-xl font-semibold">Biography</h1>
        <p className="text-lg">
          {biography.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
              <br />
            </span>
          ))}
        </p>
        <h1 className="text-xl font-semibold">Board Certifications</h1>
        <p className="text-lg">
          {boardCertifications.map((certification, index) => (
            <span>
              {boardCertifications.length - 1 == index
                ? certification
                : certification.concat(", ")}
            </span>
          ))}
        </p>
        {note && <div className="mt-4 text-lg italic">{"*".concat(note)}</div>}
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
