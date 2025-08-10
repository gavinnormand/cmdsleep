import LinkCard from "./linkCard";

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
          <div className="mt-4">
            <LinkCard text="More Info" link={link} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
