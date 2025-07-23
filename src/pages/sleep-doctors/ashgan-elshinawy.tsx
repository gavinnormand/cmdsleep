import SleepDoctorPage from "../../components/sleepDoctorPage";

function AshganElshinawy() {
  return (
    <SleepDoctorPage
      name={"Ashgan Elshinawy"}
      suffix={"DO"}
      headshotLink={"/SleepDoctors/ashganElshinawy.png"}
      titles={["Sleep Medicine", "Pulmonology"]}
      biography={
        "Dr. Ashgan Elshinawy received her medical degree from Rowan University School of Osteopathic Medicine in 1999 and has been in practice for more than 25 years. She completed her Residency at Beth Israel Medical Center and Fellowship at New York University and Memorial Sloan-Kettering Cancer Center."
      }
      boardCertifications={[
        "Sleep Medicine",
        "Internal Medicine",
        "Pulmonary Medicine",
      ]}
      moreInfoLink={
        "https://www.princetonmedicalgroup.com/providers/ashgan-elshinawy-do/"
      }
    />
  );
}

export default AshganElshinawy;
