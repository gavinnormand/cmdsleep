interface Form {
  name: string;
  link: string;
}

interface FormSectionProps {
  title: string;
  forms: Form[];
}

const FormSection: React.FC<FormSectionProps> = ({ title, forms }) => {
  return (
    <div className="text-center">
      <h1 className="p-4 text-4xl font-semibold">{title}</h1>
      <div className="flex flex-col items-center gap-y-2">
        {forms.map((form: Form) => (
          <a
            href={form.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-600 hover:underline"
          >
            {form.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FormSection;
