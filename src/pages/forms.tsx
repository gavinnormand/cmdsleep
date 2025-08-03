import FormSection from "../components/formSection";
import PageTitle from "../components/pageTitle";

const homeSleepTestForms = [
  {
    name: "Adults Home Sleep Test Forms and Questionnaires",
    link: "/forms/home/Adults_HST_Forms-and-Questionnaires.pdf",
  },
  {
    name: "Pediatric Home Sleep Test Forms and Questionnaires",
    link: "/forms/home/Pediatric_HST_Forms-and-Questionnaires.pdf",
  },
];

const inLabSleepStudyForms = [
  {
    name: "Adults In Lab Sleep Study Forms and Questionnaires",
    link: "/forms/in-lab/Adults_In-Lab-Forms-and-Questionnaires.pdf",
  },
  {
    name: "Pediatric In Lab Sleep Study Forms and Questionnaires",
    link: "/forms/in-lab/Pediatric_In-Lab_Forms-and-Questionnaires.pdf",
  },
];

const otherForms = [
  {
    name: "Demographic Sheet",
    link: "/other-forms/demographic-sheet.pdf",
  },
  {
    name: "Home Sleep Test Consent and Equipment Acknowledgment",
    link: "/other-forms/HOME-SLEEP-TEST-CONSENT-AND-EQUIPMENT-ACKNOWLEDGMENT.pdf",
  },
  {
    name: "Insurance Agreements",
    link: "/other-forms/Insurance-Agreements.pdf",
  },
  {
    name: "MSLT Questionnaires",
    link: "/other-forms/MSLT-QUESTIONNAIRES.pdf",
  },
  {
    name: "Pain Scale",
    link: "/other-forms/Pain-Scale.pdf",
  },
  {
    name: "Paper Measuring Tape",
    link: "/other-forms/Paper-Measuring-Tape.pdf",
  },
  {
    name: "Patient Authorization for Release of Medical Information",
    link: "/other-forms/PATIENT-AUTHORIZATION-FOR-RELEASE-OF-MEDICAL-INFORMATION.pdf",
  },
  {
    name: "Pediatric Bedtime Questionnaire",
    link: "/other-forms/Pediatric-Bedtime-Questionnaire.pdf",
  },
  {
    name: "Sleep Screening Tool",
    link: "/other-forms/Sleep-screening-tool.pdf",
  },
  {
    name: "SLEEPMED Ares Questionnaire",
    link: "/other-forms/SLEEPMED-ARES-Questionnaire.pdf",
  },
  {
    name: "Pediatric Sleep Questionnaire",
    link: "/other-forms/Pediatric-Sleep-Questionnaire_0.pdf",
  },
  {
    name: "Printable Tape Measure",
    link: "/other-forms/printable-tape-measure.pdf",
  },
  {
    name: "Adults Sleep Disorder Questionnaire",
    link: "/other-forms/Adults_Sleep-Disorder-Questionnaire.pdf",
  },
  {
    name: "Bed Partner Questionnaire",
    link: "/other-forms/Bed-Partner-Questionnaire.pdf",
  },
  {
    name: "Bedtime and Morning Questionnaire",
    link: "/other-forms/Bedtime-and-Morning-Questionnaire.pdf",
  },
  {
    name: "In-Lab CMD Consent Form",
    link: "/other-forms/CMD_Consent-Form_In-Lab.pdf",
  },
  {
    name: "CMD Epworth Form",
    link: "/other-forms/CMD-Epworth-Form.pdf",
  },
];

function Forms() {
  return (
    <div>
      <PageTitle text={"Forms"} />
      <div className="flex flex-col items-center justify-center gap-y-4 p-8">
        <FormSection
          title={"Home Sleep Test Forms"}
          forms={homeSleepTestForms}
        />
        <FormSection
          title={"In-Lab Sleep Study Forms"}
          forms={inLabSleepStudyForms}
        />
        <FormSection title={"Other Forms"} forms={otherForms} />
      </div>
    </div>
  );
}

export default Forms;
