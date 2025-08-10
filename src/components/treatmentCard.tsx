import { ChevronRight } from "lucide-react";
import { useState } from "react";
import LinkCard from "./linkCard";

interface TreatmentCardProps {
  name: string;
  image: string;
  description: string;
  recommendations: string[];
  notes?: string[];
  infoLinks: string[];
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({
  name,
  image,
  description,
  recommendations,
  notes,
  infoLinks,
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
      <div className="my-4 flex flex-row flex-wrap items-center justify-center gap-x-12 gap-y-8">
        {infoLinks.map((link) => (
          <LinkCard text="More Info" link={link} />
        ))}
      </div>
    </div>
  );
};

export default TreatmentCard;
