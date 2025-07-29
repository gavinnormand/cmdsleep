import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface faq {
  question: string;
  answer: string;
}

interface ServiceCardProps {
  name: string;
  description: string;
  instructions: string[];
  faqs: faq[];
  infoLink: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  description,
  instructions,
  faqs,
  infoLink,
}) => {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  const [showFAQs, setShowFAQs] = useState(false);
  const toggleFAQs = () => {
    setShowFAQs(!showFAQs);
  };

  return (
    <div className="flex w-full flex-col justify-between justify-self-center rounded-xl border-2 border-blue-800 bg-sky-50 p-6 text-center shadow-lg">
      <div className="flex flex-col gap-y-3">
        <p className="text-center text-4xl font-semibold text-blue-800">
          {name}
        </p>
        <p className="text-lg">{description}</p>
      </div>
      <button onClick={toggleInstructions} className="w-fit">
        <div className="inline-flex items-center">
          <ChevronRight
            className={`inline transition-transform duration-300 ${
              showInstructions ? "rotate-90" : "rotate-0"
            }`}
          />
          <h1 className="text-left text-lg font-semibold">Instructions</h1>
        </div>
      </button>
      {showInstructions && (
        <div className="ml-2 flex flex-col items-start">
          {instructions.map((instruction, index) => (
            <p key={index} className="text-lg">
              <span className="font-semibold">{index + 1}.</span> {instruction}
            </p>
          ))}
        </div>
      )}
      <button onClick={toggleFAQs} className="w-fit">
        <div className="mt-2 inline-flex items-center">
          <ChevronRight
            className={`inline transition-transform duration-300 ${
              showFAQs ? "rotate-90" : "rotate-0"
            }`}
          />
          <h1 className="text-left text-lg font-semibold">
            Frequently Asked Questions
          </h1>
        </div>
      </button>
      {showFAQs && (
        <div className="ml-2 flex flex-col items-start gap-y-2 text-left">
          {faqs.map((faq) => (
            <div className="flex flex-col items-start text-lg">
              <p>
                <span className="font-semibold">{"Q: "}</span> {faq.question}
              </p>
              <p>
                <span className="font-semibold">{"A: "}</span> {faq.answer}
              </p>
            </div>
          ))}
        </div>
      )}
      <a
        href={infoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mt-8 w-1/2 rounded-md border-2 border-blue-600 p-3 text-center align-baseline font-semibold text-blue-800 transition-all hover:bg-blue-600 hover:text-white active:bg-blue-600 active:text-white"
      >
        {" "}
        More Info
      </a>
    </div>
  );
};

export default ServiceCard;
