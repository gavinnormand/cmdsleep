import LinkCard from "../components/linkCard";
import PageTitle from "../components/pageTitle";
import SleepDoctorCard from "../components/sleepDoctorCard";
import Title from "../components/title";

function SleepDoctors() {
  return (
    <div>
      <PageTitle text={"Our Doctors"} />
      <div className="flex flex-col gap-8 p-8 md:p-12">
        <div className="flex flex-row flex-wrap justify-center gap-8">
          <SleepDoctorCard
            name={"Palakkumar Patel"}
            suffix={"MD"}
            headshotLink={"/sleep-doctors/palakkumarPatel.jpeg"}
            tag="Medical Director"
            titles={["Sleep Medicine", "Pulmonary", "Critical Care"]}
            pageLink="palakkumar-patel"
          />
          <SleepDoctorCard
            name={"Kevin Law"}
            suffix={"MD"}
            headshotLink={"/sleep-doctors/kevinLaw.jpg"}
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
            headshotLink={"/sleep-doctors/hatimYoussef.png"}
            titles={["Sleep Medicine", "Pulmonary", "Critical Care"]}
            pageLink="hatim-youssef"
          />
          <SleepDoctorCard
            name={"Jasmeet Bajaj"}
            suffix={"MD"}
            headshotLink={"/sleep-doctors/jasmeetBajaj.jpg"}
            titles={["Sleep Medicine", "Pulmonary", "Critical Care"]}
            pageLink="jasmeet-bajaj"
          />
          <SleepDoctorCard
            name={"Peter A. Ricketti"}
            suffix={"DO"}
            headshotLink={"/sleep-doctors/paterARicketti.png"}
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
            headshotLink={"/sleep-doctors/fareehaHafeez.jpeg"}
            titles={["Sleep Medicine", "Pulmonary"]}
            pageLink="fareeha-hafeez"
          />
          <SleepDoctorCard
            name={"Ashgan Elshinawy"}
            suffix={"DO"}
            headshotLink={"/sleep-doctors/ashganElshinawy.png"}
            titles={["Sleep Medicine", "Pulmonary"]}
            pageLink="ashgan-elshinawy"
          />
        </div>
        <div>
          <Title text={"Other Doctors"} />
          <div className="text-primary-light flex flex-row flex-wrap justify-center gap-x-8 gap-y-8 text-center text-2xl">
            <LinkCard
              text="Shore Pulmonary"
              link="https://shorepulmonary.com/"
            />
            <LinkCard
              text="Sleep Center of Bucks County"
              link="https://www.sleepcenterbuckscounty.com/"
            />
            <LinkCard
              text="Bucks County Smiles"
              link="https://www.buckscountysmiles.com/services/sleep-apnea-treatment/"
            />
            <LinkCard
              text="Advocare - Pulmonary and Sleep Specialist"
              link="https://www.advocarepulmonaryandsleepspecialists.com/sleep-medicine"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SleepDoctors;
