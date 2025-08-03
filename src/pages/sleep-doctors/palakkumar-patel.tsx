import SleepDoctorPage from "../../components/sleepDoctorPage";

function PalakkumarPatel() {
  return (
    <SleepDoctorPage
      name={"Palakkumar Patel"}
      suffix={"MD"}
      headshotLink={"/sleep-doctors/palakkumarPatel.jpeg"}
      titles={["Medical Director"]}
      biography={
        "Dr. Patel was born and raised in India, becoming the first physician in his family. Helping others in their most vulnerable moments is what inspires his career in healthcare. He is trained and specialized in Pulmonary, Critical Care, and Sleep Medicine. With strong family ties and a deep connection to Indian culture, he chose to settle in New Jersey, a place cherished by many. Committed to providing easily accessible, evidence-based care, Dr. Patel always goes above and beyond for his patients, believing that every patient deserves the best possible treatment. He has published extensively on topics such as Obstructive Sleep Apnea, COPD, Pulmonary Hypertension, Pneumothorax, and COVID-19. In his free time, Dr. Patel enjoys traveling, spending quality time with family and friends, and exploring different cuisines. \n Dr. Patel believes in providing easily accessible healthcare and treats all patients with the same dedication he would offer his loved ones, utilizing the latest evidence-based guidelines tailored to each individual's needs."
      }
      boardCertifications={[
        "Sleep Medicine",
        "Internal Medicine",
        "Pulmonary Medicine",
        "Critical Care Medicine",
      ]}
      moreInfoLink={"https://www.rwjbh.org/doctors/palakkumar-patel-md/"}
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

export default PalakkumarPatel;
