import SleepDoctorPage from "../../components/sleepDoctorPage";

function JasmeetBajaj() {
  return (
    <SleepDoctorPage
      name={"Jasmeet Bajaj"}
      suffix={"MD"}
      headshotLink={"/sleep-doctors/jasmeetBajaj.jpg"}
      titles={["Sleep Medicine", "Pulmonology", "Critical Care"]}
      biography={
        "Dr. Jasmeet Bajaj as Director of Critical Care Services at the University Medical Center of Princeton at Plainsboro, is leading the Surviving Sepsis Campaign by establishing sepsis treatment protocol. Board Certified in Sleep Medicine, Jasmeet is particularly interested in treating patients with Sleep Apnea, Narcolepsy and Insomnia. \n Dr. Bajaj is an independent physician who is not employed by Penn Medicine, but has the privileges to treat patients in the Penn Medicine Hospital. \n Dr. Bajaj graduated from Ross University School of Medicine in 1998 and has 27 years of experience."
      }
      boardCertifications={[
        "Sleep Medicine",
        "Internal Medicine",
        "Critical Care Medicine",
      ]}
      moreInfoLink={"http://www.getresst.com/index.html/"}
      phone="(732) 737-7801"
      addresses={[
        {
          name: "3546 State Route 27 Kendall Park, NJ 08824",
          link: "https://maps.app.goo.gl/UEiP9A5dcv54YotF8",
        },
        {
          name: "731 Alexander Rd, Suite 202 Princeton, NJ 08540",
          link: "https://maps.app.goo.gl/HFHcoH2sT1tw93gVA",
        },
      ]}
    />
  );
}

export default JasmeetBajaj;
