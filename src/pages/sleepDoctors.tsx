import PageTitle from "../components/pageTitle";
import SleepDoctorCard from "../components/sleepDoctorCard";

function SleepDoctors() {
  return (
    <div>
      <PageTitle text={"Sleep Doctors"} />
      <div className="flex flex-row flex-wrap justify-center gap-8 p-8">
        <SleepDoctorCard
          name={"Palakkumar Patel"}
          suffix={"MD"}
          headshotLink={"/SleepDoctors/palakkumarPatel.jpeg"}
          title={"Medical Director"}
        />
        <SleepDoctorCard
          name={"Palakkumar Patel"}
          suffix={"MD"}
          headshotLink={"/SleepDoctors/palakkumarPatel.jpeg"}
          title={"Medical Director"}
        />
        <SleepDoctorCard
          name={"Palakkumar Patel"}
          suffix={"MD"}
          headshotLink={"/SleepDoctors/palakkumarPatel.jpeg"}
          title={"Medical Director"}
        />
        <SleepDoctorCard
          name={"Palakkumar Patel"}
          suffix={"MD"}
          headshotLink={"/SleepDoctors/palakkumarPatel.jpeg"}
          title={"Medical Director"}
        />
      </div>
    </div>
  );
}

export default SleepDoctors;
