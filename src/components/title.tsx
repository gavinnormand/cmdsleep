interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <h1 className="mx-auto mb-8 w-fit border-b-2 p-2 text-4xl">{text}</h1>;
};

export default Title;
