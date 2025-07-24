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
      phone="(609) 924-9300"
      addresses={[
        {
          name: "2 Research Way Building Two, Suite 302 Monroe Township, NJ 08831",
          link: "https://maps.app.goo.gl/y9JNon6yCwbSzXdPA",
        },
        {
          name: "3 Liberty Street Plainsboro Township, NJ 08536",
          link: "https://maps.app.goo.gl/X6VWZJiw7WtVNWhA9",
        },
      ]}
    />
  );
}

export default AshganElshinawy;
