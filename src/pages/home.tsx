import Carousel from "../components/carousel";
import HomeCard from "../components/homeCard";

const officeImages = [
  "/office/frontWithCouch.jpg",
  "/office/couchRoom.jpg",
  "/office/smallBed.jpg",
  "/office/couch.jpg",
  "/office/roadSign.jpg",
  "/office/300B.jpg",
  "/office/frontWithDoor.jpg",
  "/office/plaque.jpg",
];

function Home() {
  return (
    <div>
      <img
        src="/office/frontWithCouch.jpg"
        className="block min-h-80 w-full object-cover object-left lg:hidden"
      ></img>
      <div className="hidden lg:block">
        <Carousel images={officeImages} />
      </div>
      <p className="p-8 text-center text-xl">
        As an Independent Sleep Facility in your neighborhood, we offer both
        unattended home sleep study and attended in-lab sleep studies at our
        office in East Windsor, NJ. The lab offers State of the Art diagnostics
        through its Sensormedics Equipment. This also offer patient a more
        affordable option for sleep disorders outside of the traditional
        hospital owned and operated facilities. A sound night of sleep may just
        be one phone call away.
      </p>
      <div className="flex flex-row flex-wrap justify-around gap-8 px-12">
        <HomeCard
          name={"Home Sleep Test"}
          image={"/services/home-sleep-test.jpg"}
          description="Home sleep tests allow you to get answers about your poor sleep from the comfort of your own bed and get results fast."
          link={"/services#Home-Sleep-Test"}
        />
        <HomeCard
          name={"In-Lab Sleep Study"}
          image={"/services/in-lab-sleep-study.jpg"}
          description={
            "In-lab sleep studies provide comprehensive overnight monitoring with expert supervision to diagnose the full spectrum of sleep disorders."
          }
          link={"/services#In-Lab-Sleep-Study"}
        />
        <HomeCard
          name={"CPAP Treatment"}
          image={"/services/cpap.jpg"}
          description="CPAP treatment delivers continuous airflow through a comfortable mask to keep your airways open and restore restful sleep."
          link={"/treatments#CPAP"}
        />
      </div>
      <div className="flex flex-col gap-y-2 p-8 text-center text-xl font-semibold">
        <h1>Aetna Preferred Provider</h1>
        <h1>MOST INSURANCES ACCEPTED</h1>
        <h1>Home Sleep Study Appointment available immediately!</h1>
      </div>
    </div>
  );
}

export default Home;
