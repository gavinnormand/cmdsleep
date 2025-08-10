import { LinkIcon } from "lucide-react";

interface LinkCardProps {
  text: string;
  link: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ text, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-primary text-primary hover:bg-primary active:bg-primary flex w-80 flex-row items-center justify-center gap-x-2 rounded-md border-2 p-3 text-center align-baseline font-semibold transition-all hover:text-white active:text-white"
    >
      {" "}
      {text} <LinkIcon className="inline h-5.5 w-5.5" />
    </a>
  );
};

export default LinkCard;
