import PageTitle from "../components/pageTitle";

function PatientPortal() {
  return (
    <div>
      <PageTitle text={"Patient Portal"} />
      <div className="py-8 text-center">
        <p className="mx-8 text-xl font-semibold">
          The Patient Portal provides an easy and secure way for our patients to
          stay informed and engaged with their care!
        </p>
        <div className="flex flex-row flex-wrap justify-center">
          <div className="border-primary-dark bg-secondary-lighter m-8 w-[350px] justify-self-center rounded-xl border-2 p-6 text-left shadow-lg">
            <p className="text-primary mb-4 text-lg font-semibold">
              It allows you to:
            </p>
            <ul className="list-inside list-disc space-y-2 text-black">
              <li>Update your demographic information</li>
              <li>View your appointments</li>
              <li>Send secure messages to our office</li>
              <li>Pay your bills online</li>
            </ul>
          </div>
          <div className="border-primary-dark bg-secondary-lighter m-8 flex w-[350px] flex-col justify-around gap-y-4 justify-self-center rounded-xl border-2 p-6 text-left shadow-lg">
            <p className="text-primary text-lg font-semibold">
              Existing patient portal users click here to sign in!
            </p>
            <a
              href="https://pp-wfe-100.advancedmd.com/160926/account/logon"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary text-primary hover:bg-primary active:bg-primary w-full rounded-md border-2 p-3 text-center align-baseline font-semibold transition-all hover:text-white active:text-white"
            >
              Existing Users
            </a>
          </div>
          <div className="border-primary-dark bg-secondary-lighter m-8 flex w-[350px] flex-col justify-around gap-y-4 justify-self-center rounded-xl border-2 p-6 text-left shadow-lg">
            <p className="text-primary text-lg font-semibold">
              Don’t have a patient portal account? Click here to sign up?
            </p>
            <a
              href="https://pp-wfe-100.advancedmd.com/160926/account/register"
              target="_blank"
              rel="noopener noreferrer"
              className="border-primary text-primary hover:bg-primary active:bg-primary w-full rounded-md border-2 p-3 text-center align-baseline font-semibold transition-all hover:text-white active:text-white"
            >
              New Users
            </a>
          </div>
        </div>
        <p className="mt-8 text-lg">
          If you are having difficulty creating or accessing your portal
          account, please call the office for assistance.
        </p>
      </div>
    </div>
  );
}

export default PatientPortal;
