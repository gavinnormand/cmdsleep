import LinkCard from "./linkCard";

interface SleepDisorderCardProps {
  name: string;
  tag?: string;
  facts: string[];
  infoLink: string;
}

const SleepDisorderCard: React.FC<SleepDisorderCardProps> = ({
  name,
  tag,
  facts,
  infoLink,
}) => {
  return (
    <div className="border-primary-dark bg-secondary-lighter flex w-[400px] flex-col justify-between justify-self-center rounded-xl border-2 p-6 text-center shadow-lg">
      <div className="flex flex-col gap-y-3">
        <p className="text-primary text-center text-2xl font-semibold">
          {name}
        </p>
        {tag && <p className="font-semibold">{tag}</p>}
        <div className="flex flex-col space-y-2">
          {facts.map((fact) => (
            <p>
              {"- "}
              {fact}
            </p>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-6">
        <LinkCard text="More Info" link={infoLink} />
      </div>
    </div>
  );
};

export default SleepDisorderCard;
