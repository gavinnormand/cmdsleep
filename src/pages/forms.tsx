import FormSection from "../components/formSection";
import PageTitle from "../components/pageTitle";

const instructionsForms = [
  {
    name: "Home Sleep Test Instructions",
    link: "/forms/instructions/instructions-home-sleep-study.pdf",
  },
  {
    name: "In-Lab Sleep Study Instructions",
    link: "/forms/instructions/instructions-in-lab.pdf",
  },
  {
    name: "What do I do after the Sleep Study?",
    link: "/forms/instructions/what-do-i-do-after-the-sleep-study.pdf",
  },
  {
    name: "Patient Portal Instructions",
    link: "/forms/instructions/patient-portal-instructions.pdf",
  },
];

const homeSleepTestForms = [
  {
    name: "Adults Home Sleep Test Forms and Questionnaires",
    link: "/forms/home/adult-hst-forms-and-questionnaires.pdf",
  },
  {
    name: "Pediatric Home Sleep Test Forms and Questionnaires",
    link: "/forms/home/pediatric-hst-forms-and-questionnaires.pdf",
  },
];

const inLabSleepStudyForms = [
  {
    name: "Adults In-Lab Sleep Study Forms and Questionnaires",
    link: "/forms/in-lab/adult-in-lab-forms-and-questionnaires.pdf",
  },
  {
    name: "Pediatric In-Lab Sleep Study Forms and Questionnaires",
    link: "/forms/in-lab/pediatric-in-lab-forms-and-questionnaires.pdf",
  },
];

const demographicForms = [
  {
    name: "Demographic Sheet",
    link: "/forms/demographics/demographic-sheet.pdf",
  },
];

const consentForms = [
  {
    name: "Home Sleep Test Consent",
    link: "/forms/consent/home-sleep-test-consent.pdf",
  },
  {
    name: "In-Lab Sleep Study Consent",
    link: "/forms/consent/in-lab-sleep-study-consent.pdf",
  },
  {
    name: "Insurance Agreement",
    link: "/forms/consent/insurance-agreement.pdf",
  },
];

const questionnaireForms = [
  {
    name: "SleepMed Ares Questionnaire",
    link: "/forms/questionnaires/sleepmed-ares-questionnaire.pdf",
  },
  {
    name: "Adults Sleep Disorder Questionnaire",
    link: "/forms/questionnaires/adults-sleep-disorder-questionnaire.pdf",
  },
  {
    name: "Pediatric Sleep Questionnaire",
    link: "/forms/questionnaires/pediatric-sleep-questionnaire.pdf",
  },
  {
    name: "Sleep Screening Tool",
    link: "/forms/questionnaires/sleep-screening-tool.pdf",
  },
  {
    name: "Bed Partner Questionnaire",
    link: "/forms/questionnaires/bed-partner-questionnaire.pdf",
  },
  {
    name: "Pain Scale",
    link: "/forms/questionnaires/pain-scale.pdf",
  },
  {
    name: "CMD Epworth Questionnaire",
    link: "/forms/questionnaires/cmd-epworth-form.pdf",
  },
  {
    name: "Insomnia Severity Index",
    link: "/forms/questionnaires/insomnia-severity-index.pdf",
  },
];

const releaseOfMedicalInformationForms = [
  {
    name: "Patient Authorization for Release of Medical Information",
    link: "/forms/release-of-medical-information/patient-authorization-for-release-of-medical-information.pdf",
  },
];

const otherForms = [
  {
    name: "Paper Measuring Tape",
    link: "/forms/other-forms/paper-measuring-tape.pdf",
  },
];

function Forms() {
  return (
    <div>
      <PageTitle text={"Forms"} />
      <div className="flex flex-col items-center justify-center gap-y-4 p-8">
        <FormSection title={"Instructions"} forms={instructionsForms} />
        <FormSection
          title={"Home Sleep Test Forms"}
          forms={homeSleepTestForms}
        />
        <FormSection
          title={"In-Lab Sleep Study Forms"}
          forms={inLabSleepStudyForms}
        />
        <FormSection title={"Demographic Forms"} forms={demographicForms} />
        <FormSection title={"Consent Forms"} forms={consentForms} />
        <FormSection title={"Questionnaires"} forms={questionnaireForms} />
        <FormSection
          title={"Release of Medical Information Forms"}
          forms={releaseOfMedicalInformationForms}
        />
        <FormSection title={"Other Forms"} forms={otherForms} />
      </div>
    </div>
  );
}

export default Forms;
