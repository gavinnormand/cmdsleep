import { ChevronRight, ClipboardList } from "lucide-react";
import { useState } from "react";
import LinkCard from "./linkCard";

interface faq {
  question: string;
  answer: string;
}

interface ServiceCardProps {
  name: string;
  image?: string;
  description: string;
  instructions: {
    before: string[];
    during: string[];
    after: string[];
  };
  faqs: faq[];
  checklistLink?: string;
  infoLinks: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  image,
  description,
  instructions,
  checklistLink,
  faqs,
  infoLinks,
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
      <button onClick={toggleInstructions} className="w-fit">
        <div className="inline-flex items-center">
          <ChevronRight
            className={`inline transition-transform duration-300 ${
              showInstructions ? "rotate-90" : "rotate-0"
            }`}
          />
          <h1 className="text-left text-xl font-semibold">Instructions</h1>
        </div>
      </button>
      {showInstructions && (
        <div className="ml-2 flex flex-col items-start gap-2">
          <p className="text-xl font-semibold">Before your study:</p>
          {instructions.before.map((instruction, index) => (
            <p key={index} className="text-lg">
              <span className="font-semibold">{index + 1}.</span> {instruction}
            </p>
          ))}
          <p className="mt-2 text-xl font-semibold">During your study:</p>
          {instructions.during.map((instruction, index) => (
            <p key={index} className="text-lg">
              <span className="font-semibold">{index + 1}.</span> {instruction}
            </p>
          ))}
          <p className="mt-2 text-xl font-semibold">After your study:</p>
          {instructions.after.map((instruction, index) => (
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
          <h1 className="text-left text-xl font-semibold">
            Frequently Asked Questions
          </h1>
        </div>
      </button>
      {showFAQs && (
        <div className="ml-2 flex flex-col items-start gap-y-2 text-left">
          {faqs.map((faq) => (
            <div className="flex flex-col items-start">
              <p className="font-semibold text-xl">
                {"Q: "} {faq.question}
              </p>
              <p className="text-lg pl-6">
                <span className="font-semibold">{"A: "}</span> {faq.answer}
              </p>
            </div>
          ))}
        </div>
      )}
      <div className="my-4 flex flex-row flex-wrap items-center justify-center gap-x-12 gap-y-8">
        {checklistLink && (
          <a
            href={checklistLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-primary text-primary hover:bg-primary active:bg-primary flex w-80 flex-row items-center justify-center gap-x-2 rounded-md border-2 p-3 text-center align-baseline font-semibold transition-all hover:text-white active:text-white"
          >
            {" "}
            Checklist <ClipboardList className="inline h-5.5 w-5.5" />
          </a>
        )}
        {infoLinks.map((link) => (
          <LinkCard text="More Info" link={link} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
