import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface FAQProps {
  faq: {
    question: string;
    answer: string;
  };
}

const FAQ: React.FC<FAQProps> = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div className="flex flex-col items-start">
      <button
        onClick={toggleAnswer}
        className="flex cursor-pointer flex-row items-start text-left"
      >
        <ChevronRight
          className={`mt-0.5 min-w-6 min-h-6 inline transition-transform duration-300 ${
            showAnswer ? "rotate-90" : "rotate-0"
          }`}
        />
        <span className="text-xl font-semibold">
          {"Q: "} {faq.question}
        </span>
      </button>
      {showAnswer && (
        <p className="pl-6 text-lg">
          <span className="font-semibold">{"A: "}</span> {faq.answer}
        </p>
      )}
    </div>
  );
};

export default FAQ;
