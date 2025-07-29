interface PageTitleProps {
  text: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ text }) => {
  return (
    <div className="bg-secondary-light flex h-16 w-full items-center py-24 text-center">
      <h1 className="text-primary mx-auto text-6xl font-bold">{text}</h1>
    </div>
  );
};

export default PageTitle;
