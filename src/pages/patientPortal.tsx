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
          <div className="m-8 w-[350px] justify-self-center rounded-xl border-2 border-blue-900 bg-sky-50 p-6 text-left shadow-lg">
            <p className="mb-4 text-lg font-semibold text-blue-900">
              It allows you to:
            </p>
            <ul className="list-inside list-disc space-y-2 text-black">
              <li>Update your demographic information</li>
              <li>View your appointments</li>
              <li>Send secure messages to our office</li>
              <li>Pay your bills online</li>
            </ul>
          </div>
          <div className="m-8 flex w-[350px] flex-col justify-around gap-y-4 justify-self-center rounded-xl border-2 border-blue-900 bg-sky-50 p-6 text-left shadow-lg">
            <p className="text-lg font-semibold text-blue-900">
              Existing Portal Users Click here to sign in!
            </p>
            <button className="w-full cursor-pointer rounded-md border-2 border-blue-800 p-3 align-baseline font-semibold transition-all hover:bg-blue-800 hover:text-white">
              Existing Users
            </button>
          </div>
          <div className="m-8 flex w-[350px] flex-col justify-around gap-y-4 justify-self-center rounded-xl border-2 border-blue-900 bg-sky-50 p-6 text-left shadow-lg">
            <p className="text-lg font-semibold text-blue-900">
              Don’t have a portal account? Click here to sign up?
            </p>
            <button className="w-full cursor-pointer rounded-md border-2 border-blue-800 p-3 align-baseline font-semibold transition-all hover:bg-blue-800 hover:text-white">
              New Users
            </button>
          </div>
        </div>
        <p className="m-8 text-lg">
          If you are having difficulty creating or accessing your portal
          account, please call the office for assistance.
        </p>
      </div>
    </div>
  );
}

export default PatientPortal;
