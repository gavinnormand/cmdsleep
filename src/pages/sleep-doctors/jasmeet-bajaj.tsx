import SleepDoctorPage from "../../components/sleepDoctorPage";

function JasmeetBajaj() {
  return (
    <SleepDoctorPage
      name={"Jasmeet Bajaj"}
      suffix={"MD"}
      headshotLink={"/SleepDoctors/jasmeetBajaj.jpg"}
      titles={["Sleep Medicine", "Pulmonology", "Critical Care"]}
      biography={
        "Dr. Jasmeet Bajaj as Director of Critical Care Services at the University Medical Center of Princeton at Plainsboro, is leading the Surviving Sepsis Campaign by establishing sepsis treatment protocol. Board Certified in Sleep Medicine, Jasmeet is particularly interested in treating patients with Sleep Apnea, Narcolepsy and Insomnia. Dr. Bajaj is an independent physician who is not employed by Penn Medicine, but has the privileges to treat patients in the Penn Medicine Hospital. Dr. Bajaj graduated from Ross University School of Medicine in 1998 and has 27 years of experience."
      }
      boardCertifications={[
        "Sleep Medicine",
        "Internal Medicine",
        "Critical Care Medicine",
      ]}
      moreInfoLink={"http://www.getresst.com/index.html/"}
    />
  );
}

export default JasmeetBajaj;
