function Home() {
  return (
    <div>
      <img src="/office.jpg" className="w-full object-cover"></img>
      <p className="p-8 text-xl text-center">
        As an Independent Sleep Facility in your neighborhood, we offer both
        unattended home sleep study and attended in-lab sleep studies at our
        office in East Windsor, NJ. The lab offers State of the Art diagnostics
        through its Sensormedics Equipment. This also offer patient a more
        affordable option for sleep disorders outside of the traditional
        hospital owned and operated facilities. A sound night of sleep may just
        be one phone call away.
      </p>
      <div className="flex flex-col text-xl font-semibold text-center p-8 gap-y-2">
      <h1>Aetna Preferred Provider</h1>
      <h1>MOST INSURANCES ACCEPTED</h1>
      <h1>Home Sleep Study Appointment available immediately!</h1>
      </div>
    </div>
  );
}

export default Home;
