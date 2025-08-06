import { LinkIcon } from "lucide-react";

interface HomeCardProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const HomeCard: React.FC<HomeCardProps> = ({
  name,
  image,
  description,
  link,
}) => {
  return (
    <div className="bg-secondary-lighter border-primary-dark flex w-96 flex-col justify-between justify-self-center overflow-hidden rounded-xl border-2 text-center shadow-lg">
      <div className="flex flex-col">
        <img className="h-64 w-full object-cover object-right" src={image} />
        <div className="flex flex-col items-center gap-y-2 p-4">
          <h1 className="text-xl font-semibold">{name}</h1>
          <p className="text-md">{description}</p>
          <a
            href={link}
            className="border-primary text-primary hover:bg-primary active:bg-primary mt-2 flex w-3/4 flex-row items-center justify-center gap-x-2 rounded-md border-2 p-3 text-center font-semibold transition-all hover:text-white active:text-white"
          >
            {" "}
            Info <LinkIcon className="inline h-5.5 w-5.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
