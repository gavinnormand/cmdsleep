import Hours from "../components/hours";
import PageTitle from "../components/pageTitle";

const hours = {
  monday: "9:00 AM - 5:00 PM",
  tuesday: "9:00 AM - 5:00 PM",
  wednesday: "9:00 AM - 5:00 PM",
  thursday: "9:00 AM - 5:00 PM",
  friday: "9:00 AM - 5:00 PM",
  saturday: "Closed",
  sunday: "Closed",
};

function Directions() {
  return (
    <div>
      <PageTitle text={"Directions"} />
      <div className="grid grid-cols-1 gap-4 p-8 lg:grid-cols-2">
        <div className="flex flex-col gap-y-1.5 text-xl">
          <p className="text-2xl font-semibold">
            Need help finding our office?{" "}
          </p>
          <p className="text-xl">
            CMD Sleep Disorders Center
            <br />
            Comprehensive Medical Diagnostics, LLC
            <br />
            <a
              className="text-blue-800 hover:underline"
              href="https://maps.app.goo.gl/5Pwx8Ua2wbcUFGKp6"
              target="_blank"
              rel="noopener noreferrer"
            >
              300B Princeton-Hightstown Rd
              <br /> Suite 205 East Windsor, NJ 08520
            </a>{" "}
          </p>
          <Hours hours={hours} />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231.97371077141725!2d-74.55898784741692!3d40.28277471092482!2m3!1f0!2f39.431352904321365!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x89c3de4e059219a9%3A0x29cd2b3d4d318c36!2s300%20Princeton%20Hightstown%20Rd%20%23205%2C%20East%20Windsor%2C%20NJ%2008520!5e1!3m2!1sen!2sus!4v1752466625253!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full justify-self-center"
        ></iframe>
      </div>
    </div>
  );
}

export default Directions;
