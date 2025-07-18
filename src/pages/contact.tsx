import { FaEnvelope, FaPhoneAlt, FaPrint } from "react-icons/fa";
import ContactForm from "../components/contactForm";
import { FaPenToSquare } from "react-icons/fa6";
import PageTitle from "../components/pageTitle";

function Contact() {
  return (
    <div>
      <PageTitle text={"Contact Us"} />
      <div className="grid grid-cols-1 gap-4 p-8 lg:grid-cols-2">
        <div className="flex flex-col gap-y-1.5 text-xl">
          <p className="text-2xl font-semibold">
            {" "}
            Need to request an appointment or have a question?{" "}
          </p>
          <p>
            <FaPenToSquare className="mr-2 mb-1 inline" />
            Click
            <a
              href="https://patientportal.advancedmd.com/160926/onlineintake/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 text-blue-800 hover:underline active:text-blue-950 active:underline"
            >
              here
            </a>
            to complete our online patient intake form
          </p>
          <p>
            <FaPhoneAlt className="mr-2 mb-1 inline" />
            Call our office at
            <a
              href="tel:+16094901444"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 text-blue-800 hover:underline active:text-blue-950 active:underline"
            >
              (609) 490-1444
            </a>
          </p>
          <p>
            <FaPrint className="mr-2 mb-1 inline" />
            Fax us documents at
            <a
              href="tel:+16094901133"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 text-blue-800 hover:underline active:text-blue-950 active:underline"
            >
              (609) 490-1133
            </a>
          </p>
          <p>
            <FaEnvelope className="mr-2 mb-1 inline" />
            Email us at
            <a
              href="mailto:cmdsleep@live.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 text-blue-800 hover:underline active:text-blue-950 active:underline"
            >
              cmdsleep@live.com
            </a>
          </p>
          <p className="w-11/12">
            You can also fill out the email contact form to send us a message
            directly from this site.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
