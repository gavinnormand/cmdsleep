import PageTitle from "../components/pageTitle";
import SleepDoctorCard from "../components/sleepDoctorCard";

function SleepDoctors() {
  return (
    <div>
      <PageTitle text={"Our Doctors"} />
      <div className="flex flex-row flex-wrap justify-center gap-8 p-8">
        <SleepDoctorCard
          name={"Palakkumar Patel"}
          suffix={"MD"}
          headshotLink={"/SleepDoctors/palakkumarPatel.jpeg"}
          tag="Medical Director"
          titles={[
            "Sleep Medicine",
            "Pulmonary",
            "Critical Care",
          ]}
          pageLink="palakkumar-patel"
        />
        <SleepDoctorCard
          name={"Kevin Law"}
          suffix={"MD"}
          headshotLink={"/SleepDoctors/kevinLaw.jpg"}
          titles={[
            "Sleep Medicine",
            "Pediatric Sleep Medicine",
            "Pulmonary",
            "Critical Care",
          ]}
          pageLink="kevin-law"
        />
        <SleepDoctorCard
          name={"Hatim Youssef"}
          suffix={"DO"}
          headshotLink={"/SleepDoctors/hatimYoussef.png"}
          titles={["Sleep Medicine", "Pulmonary", "Critical Care"]}
          pageLink="hatim-youssef"
        />
        <SleepDoctorCard
          name={"Jasmeet Bajaj"}
          suffix={"MD"}
          headshotLink={"/SleepDoctors/jasmeetBajaj.jpg"}
          titles={["Sleep Medicine", "Pulmonary", "Critical Care"]}
          pageLink="jasmeet-bajaj"
        />
        <SleepDoctorCard
          name={"Peter A. Ricketti"}
          suffix={"DO"}
          headshotLink={"/SleepDoctors/paterARicketti.png"}
          titles={[
            "Sleep Medicine",
            "Pediatric Sleep Medicine",
            "Pulmonary",
            "Allergy/Immunology",
          ]}
          pageLink="pater-a-ricketti"
        />
        <SleepDoctorCard
          name={"Fareeha Hafeez"}
          suffix={"MD"}
          headshotLink={"/SleepDoctors/fareehaHafeez.jpeg"}
          titles={["Pulmonary"]}
          pageLink="fareeha-hafeez"
        />
        <SleepDoctorCard
          name={"Ashgan Elshinawy"}
          suffix={"DO"}
          headshotLink={"/SleepDoctors/ashganElshinawy.png"}
          titles={["Sleep Medicine", "Pulmonary"]}
          pageLink="ashgan-elshinawy"
        />
      </div>
    </div>
  );
}

export default SleepDoctors;
