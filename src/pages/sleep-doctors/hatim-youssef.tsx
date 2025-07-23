import SleepDoctorPage from "../../components/sleepDoctorPage";

function HatimYoussef() {
  return (
    <SleepDoctorPage
      name={"Hatim Youssef"}
      suffix={"DO"}
      headshotLink={"/SleepDoctors/hatimYoussef.png"}
      titles={["Sleep Medicine", "Pulmonology", "Critical Care"]}
      biography={
        "Chief, Section of Pulmonary and Critical Care Medicine, Princeton Medical Center Dr. Youssef who is not employed by Penn Medicine has privileges to treat patients in the Penn Medicine Hospital. Dr. Hatim Youssef is an Associate Professor of Medicine at Rutgers Robert Wood Johnson Medical School. He is the Chair of the Pulmonary Division and Associate Director of Critical Care services at the University Medical Center of Princeton at Plainsboro. Dr. Youssef is board certified in Pulmonary, Critical care, and Sleep Medicine. He is a fellow of the American College of Chest Physicians. He is focused on diagnosis and treatment of various types interstitial lung diseases related to connective tissue diseases and evaluation of pulmonary nodules. He has done research in studying sleep apnea in pregnancy and the toxic effects of diesel exhaust in patients with asthma."
      }
      boardCertifications={[
        "Sleep Medicine",
        "Critical Care Medicine",
        "Pulmonary Disease",
        "Internal Medicine",
      ]}
      moreInfoLink={"http://www.getresst.com/index.html/"}
    />
  );
}

export default HatimYoussef;
