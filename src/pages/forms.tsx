import FormSection from "../components/formSection";
import PageTitle from "../components/pageTitle";

const homeSleepTestForms = [
  {
    name: "Adults Home Sleep Test Forms and Questionnaires",
    link: "/HomeSleepStudyForms/Adults_HST_Forms-and-Questionnaires.pdf",
  },
  {
    name: "Pediatric Home Sleep Test Forms and Questionnaires",
    link: "/HomeSleepStudyForms/Pediatric_HST_Forms-and-Questionnaires.pdf",
  },
];

const inLabSleepStudyForms = [
  {
    name: "Adults In Lab Sleep Study Forms and Questionnaires",
    link: "/InLabSleepStudyForms/Adults_In-Lab-Forms-and-Questionnaires.pdf",
  },
  {
    name: "Pediatric In Lab Sleep Study Forms and Questionnaires",
    link: "/InLabSleepStudyForms/Pediatric_In-Lab_Forms-and-Questionnaires.pdf",
  },
];

const otherForms = [
  {
    name: "Demographic Sheet",
    link: "/OtherForms/demographic-sheet.pdf",
  },
  {
    name: "Home Sleep Test Consent and Equipment Acknowledgment",
    link: "/OtherForms/HOME-SLEEP-TEST-CONSENT-AND-EQUIPMENT-ACKNOWLEDGMENT.pdf",
  },
  {
    name: "Insurance Agreements",
    link: "/OtherForms/Insurance-Agreements.pdf",
  },
  {
    name: "MSLT Questionnaires",
    link: "/OtherForms/MSLT-QUESTIONNAIRES.pdf",
  },
  {
    name: "Pain Scale",
    link: "/OtherForms/Pain-Scale.pdf",
  },
  {
    name: "Paper Measuring Tape",
    link: "/OtherForms/Paper-Measuring-Tape.pdf",
  },
  {
    name: "Patient Authorization for Release of Medical Information",
    link: "/OtherForms/PATIENT-AUTHORIZATION-FOR-RELEASE-OF-MEDICAL-INFORMATION.pdf",
  },
  {
    name: "Pediatric Bedtime Questionnaire",
    link: "/OtherForms/Pediatric-Bedtime-Questionnaire.pdf",
  },
  {
    name: "Sleep Screening Tool",
    link: "/OtherForms/Sleep-screening-tool.pdf",
  },
  {
    name: "SLEEPMED Ares Questionnaire",
    link: "/OtherForms/SLEEPMED-ARES-Questionnaire.pdf",
  },
  {
    name: "Pediatric Sleep Questionnaire",
    link: "/OtherForms/Pediatric-Sleep-Questionnaire_0.pdf",
  },
  {
    name: "Printable Tape Measure",
    link: "/OtherForms/printable-tape-measure.pdf",
  },
  {
    name: "Adults Sleep Disorder Questionnaire",
    link: "/OtherForms/Adults_Sleep-Disorder-Questionnaire.pdf",
  },
  {
    name: "Bed Partner Questionnaire",
    link: "/OtherForms/Bed-Partner-Questionnaire.pdf",
  },
  {
    name: "Bedtime and Morning Questionnaire",
    link: "/OtherForms/Bedtime-and-Morning-Questionnaire.pdf",
  },
  {
    name: "In-Lab CMD Consent Form",
    link: "/OtherForms/CMD_Consent-Form_In-Lab.pdf",
  },
  {
    name: "CMD Epworth Form",
    link: "/OtherForms/CMD-Epworth-Form.pdf",
  },
];

function Forms() {
  return (
    <div>
      <PageTitle text={"Forms"} />
      <div className="flex flex-col items-center justify-center gap-y-4 p-4">
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
