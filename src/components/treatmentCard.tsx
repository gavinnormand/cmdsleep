import { ChevronRight, LinkIcon } from "lucide-react";
import { useState } from "react";

interface TreatmentCardProps {
  name: string;
  image: string;
  description: string;
  recommendations: string[];
  notes?: string[];
  infoLink: string;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({
  name,
  image,
  description,
  recommendations,
  notes,
  infoLink,
}) => {
  const [showRecommendations, setShowRecommendations] = useState(false);

  const toggleRecommendations = () => {
    setShowRecommendations(!showRecommendations);
  };

  const [showNotes, setShowNotes] = useState(false);

  const toggleNotes = () => {
    setShowNotes(!showNotes);
  };

  return (
    <div className="border-primary-dark bg-secondary-lighter flex w-full flex-col justify-between justify-self-center rounded-xl border-2 p-6 text-center shadow-lg">
      <div className="flex flex-col gap-y-3">
        <p className="text-primary text-center text-4xl font-semibold">
          {name}
        </p>
        {image && (
          <img
            src={image}
            className="mx-auto h-64 rounded-xl object-cover shadow-lg"
          ></img>
        )}
        <p className="text-lg">
          {description.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
              <br />
            </span>
          ))}
        </p>
      </div>
      <button onClick={toggleRecommendations} className="w-fit">
        <div className="inline-flex items-center">
          <ChevronRight
            className={`inline transition-transform duration-300 ${
              showRecommendations ? "rotate-90" : "rotate-0"
            }`}
          />
          <h1 className="text-left text-lg font-semibold">
            When is it Recommended?
          </h1>
        </div>
      </button>
      {showRecommendations && (
        <div className="ml-2 flex flex-col items-start gap-2">
          {recommendations.map((recommendation) => (
            <p className="text-lg">
              <span className="font-semibold">{"- "}</span> {recommendation}
            </p>
          ))}
        </div>
      )}
      {notes && (
        <button onClick={toggleNotes} className="w-fit">
          <div className="mt-2 inline-flex items-center">
            <ChevronRight
              className={`inline transition-transform duration-300 ${
                showNotes ? "rotate-90" : "rotate-0"
              }`}
            />
            <h1 className="text-left text-lg font-semibold">Important Notes</h1>
          </div>
        </button>
      )}
      {showNotes && notes && (
        <div className="ml-2 flex flex-col items-start gap-2">
          {notes.map((note) => (
            <p className="text-lg">
              <span className="font-semibold">{"- "}</span> {note}
            </p>
          ))}
        </div>
      )}
      <a
        href={infoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="border-primary text-primary hover:bg-primary active:bg-primary mx-auto mt-8 flex w-2/3 cursor-pointer flex-row items-center justify-center gap-x-2 rounded-md border-2 p-3 text-center align-baseline font-semibold transition-all hover:text-white active:text-white"
      >
        {" "}
        More Info <LinkIcon className="inline h-5.5 w-5.5" />
      </a>
    </div>
  );
};

export default TreatmentCard;
