interface PageTitleProps {
  text: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ text }) => {
  return (
    <div className="flex h-16 w-full items-center bg-sky-100 py-24 text-center">
      <h1 className="mx-auto text-6xl font-bold text-blue-900">{text}</h1>
    </div>
  );
};

export default PageTitle;
