import SleepDoctorPage from "../../components/sleepDoctorPage";

function KevinLaw() {
  return (
    <SleepDoctorPage
      name={"Kevin Law"}
      suffix={"MD"}
      headshotLink={"/sleep-doctors/kevinLaw.jpg"}
      titles={["Sleep Medicine", "Pulmonology", "Critical Care"]}
      biography={
        "Dr. Law’s expertise in pulmonary medicine further strengthens the capabilities of RWJUH Hamilton’s outstanding pulmonary and critical care program, providing easily accessible care throughout our region,” says Richard Freeman, President and Chief Executive Officer, RWJUH Hamilton. “In light of the COVID-19 pandemic, having leading experts in respiratory care available in our community is now more important than ever.” \n Specializing in pulmonology, critical care and sleep medicine, Dr. Law has over 25 years of experience treating a range of conditions that impact the respiratory system including pulmonary vascular disorders, obstructive lung disease and interstitial lung disease. \n Dr. Law graduated from New York University School of Medicine in NY, NY. He completed an internal medicine internship and residency at Boston City Hospital in Boston, MA. He went on to complete a research fellowship in pulmonary and critical care at New York University-Bellevue. He’s held several academic clinical appointments at prestigious institutions including Boston University School of Medicine and New York University’s Department of Medicine. He is currently a clinical assistant professor at Rutgers Medical School."
      }
      boardCertifications={[
        "Sleep Medicine",
        "Pulmonary Disease",
        "Internal Medicine",
        "Critical Care Medicine",
      ]}
      moreInfoLink={"https://www.rwjbh.org/doctors/kevin-law-md/"}
      phone={"(609) 586-7400"}
      addresses={[
        {
          name: "2312 Whitehorse-Mercerville Rd, Suite 105 Hamilton, NJ 08619",
          link: "https://maps.app.goo.gl/Ciknfsbn6wMPAQWP9",
        },
      ]}
    />
  );
}

export default KevinLaw;
