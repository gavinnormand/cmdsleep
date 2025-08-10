import PageTitle from "../components/pageTitle";

function Directions() {
  return (
    <div className="flex flex-1 flex-col">
      <PageTitle text={"Directions"} />
      <div className="flex flex-1">
        <div className="grid flex-1 grid-cols-1 items-start gap-4 p-8 lg:grid-cols-2">
          <div className="flex flex-col items-center gap-6 text-xl">
            <div className="flex flex-col items-center">
            <p className="text-center text-2xl font-semibold">
              Need help finding our office?{" "}
            </p>
              <p className="text-center">
                CMD&nbsp;Sleep&nbsp;Disorders&nbsp;Center&nbsp;
                <wbr />
                Comprehensive&nbsp;Medical&nbsp;Diagnostics,&nbsp;LLC
              </p>
              <a
                className="text-primary-light active:text-primary-dark text-center hover:underline active:underline"
                href="https://maps.app.goo.gl/i2AX5h4L5ZqSNrgh9"
                target="_blank"
                rel="noopener noreferrer"
              >
                300B&nbsp;Princeton-Hightstown&nbsp;Rd&nbsp;
                <wbr />
                Suite&nbsp;205&nbsp;East&nbsp;Windsor,&nbsp;NJ&nbsp;08520
              </a>{" "}
              <p className="text-center">
                Located on the second floor. On the left out of the stairs, or
                straight ahead and to the right out of the elevator.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-center font-semibold">Business Hours:</h1>
              <p className="text-center">
                Please call the office at{" "}
                <a
                  href="tel:+16094901444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light active:text-primary-dark inline hover:underline active:underline"
                >
                  (609) 490-1444
                </a>{" "}
                to confirm hours before visiting.
              </p>
              <p className="text-center">
                If you have an in lab sleep study you must arrive at{" "}
                <span className="font-bold">8:15 PM</span>
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold">Location of Dropbox:</p>
              <img
                className="my-2 h-64 rounded-md shadow-lg"
                src="/office/dropbox.jpg"
              ></img>
            </div>
          </div>
          <div className="h-full min-h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.7161522920942!2d-74.5581610409085!3d40.284304115795535!2m3!1f0!2f39.47461514310944!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x89c3de4e05874e29%3A0x2d91d8277330621d!2sComprehensive%20Medical%20Diagnostics!5e1!3m2!1sen!2sus!4v1753899383301!5m2!1sen!2sus"
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
