import SleepDoctorPage from "../../components/sleepDoctorPage";

function FareehaHafeez() {
  return (
    <SleepDoctorPage
      name={"Fareeha Hafeez"}
      suffix={"MD"}
      headshotLink={"/SleepDoctors/fareehaHafeez.jpeg"}
      titles={["Pulmonology"]}
      biography={
        "Dr. Fareeha Hafeez is a distinguished board-certified pulmonologist and sleep medicine specialist with over a decade of experience. She earned her medical degree from Punjab Medical College in Pakistan and completed her post-doctoral research at Columbia University in New York. Dr. Hafeez underwent her internal medicine residency and pulmonary medicine residency at Columbia University-Harlem Hospital. She further specialized in sleep medicine through a fellowship at the University of Michigan. \n Her extensive experience spans both pulmonary and sleep medicine, and she holds board certifications in Internal Medicine, Pulmonary Medicine, and Sleep Medicine. Dr. Hafeez is now a valued member of Pulmonary and Sleep Associates of Mercer Bucks, where she and her team provide the highest level of comprehensive pulmonary and sleep medicine diagnosis and treatment. Their commitment to advanced, state-of-theart care aims to serve patients throughout Mercer and Bucks counties."
      }
      boardCertifications={["Sleep Medicine", "Pulmonology"]}
      moreInfoLink={"https://pulmsleep.org/"}
      phone="(609) 710-5526"
      addresses={[
        {
          name: "Pulmonary and Sleep Associates of Mercer Bucks 294 Applegarth Rd, Suite F Monroe Township, NJ 08831",
          link: "https://maps.app.goo.gl/hxZ5ozro27AYhN5JA",
        },
      ]}
    />
  );
}

export default FareehaHafeez;
