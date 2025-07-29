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
      <a
        href={infoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="border-primary0 text-primary hover:bg-primary active:bg-primary mt-8 w-full rounded-md border-2 p-3 text-center align-baseline font-semibold transition-all hover:text-white active:text-white"
      >
        {" "}
        More Info
      </a>
    </div>
  );
};

export default SleepDisorderCard;
