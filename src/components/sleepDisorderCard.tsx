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
    <div className="flex w-[400px] flex-col justify-between justify-self-center rounded-xl border-2 border-blue-800 bg-sky-50 p-6 text-center shadow-lg">
      <div className="flex flex-col gap-y-3">
        <p className="text-center text-2xl font-semibold text-blue-800">
          {name}
        </p>
        {tag && <p className="font-semibold">{tag}</p>}
        <ul className="list-inside list-disc space-y-2 text-black">
          {facts.map((fact) => (
            <li>{fact}</li>
          ))}
        </ul>
      </div>
      <a
        href={infoLink}
        className="mt-4 w-full rounded-md border-2 border-blue-600 p-3 text-center align-baseline font-semibold text-blue-800 transition-all hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white"
      >
        {" "}
        More Info
      </a>
    </div>
  );
};

export default SleepDisorderCard;
