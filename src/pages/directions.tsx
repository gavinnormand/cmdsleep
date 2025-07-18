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
    <div className="flex flex-1 flex-col">
      <PageTitle text={"Directions"} />
      <div className="flex flex-1">
        <div className="grid flex-1 grid-cols-1 items-start gap-4 p-8 lg:grid-cols-2">
          <div className="flex flex-col items-center gap-y-1.5 text-xl">
            <p className="text-2xl font-semibold">
              Need help finding our office?{" "}
            </p>
            <p className="text-center">
              CMD&nbsp;Sleep&nbsp;Disorders&nbsp;Center&nbsp;
              <wbr />
              Comprehensive&nbsp;Medical&nbsp;Diagnostics,&nbsp;LLC
            </p>
            <a
              className="text-center text-blue-800 hover:underline"
              href="https://maps.app.goo.gl/5Pwx8Ua2wbcUFGKp6"
              target="_blank"
              rel="noopener noreferrer"
            >
              300B&nbsp;Princeton-Hightstown&nbsp;Rd&nbsp;
              <wbr />
              Suite&nbsp;205&nbsp;East&nbsp;Windsor,&nbsp;NJ&nbsp;08520
            </a>{" "}
            <div className="my-8">
              <Hours hours={hours} />
            </div>
          </div>
          <div className="h-full min-h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231.97371077141725!2d-74.55898784741692!3d40.28277471092482!2m3!1f0!2f39.431352904321365!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x89c3de4e059219a9%3A0x29cd2b3d4d318c36!2s300%20Princeton%20Hightstown%20Rd%20%23205%2C%20East%20Windsor%2C%20NJ%2008520!5e1!3m2!1sen!2sus!4v1752466625253!5m2!1sen!2sus"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Directions;
