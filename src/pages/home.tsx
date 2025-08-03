import Carousel from "../components/carousel";

const officeImages = [
  "/office/frontWithCouch.jpg",
  "/office/bigBed.jpg",
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
      <div className="flex flex-col gap-y-2 p-8 text-center text-xl font-semibold">
        <h1>Aetna Preferred Provider</h1>
        <h1>MOST INSURANCES ACCEPTED</h1>
        <h1>Home Sleep Study Appointment available immediately!</h1>
      </div>
    </div>
  );
}

export default Home;
