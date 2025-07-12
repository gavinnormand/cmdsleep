import { useRef } from "react";

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.error || "An error occurred while sending the message.",
        );
      }

      alert(result.message || "Message sent successfully!");
      formRef.current?.reset();
    } catch (error: unknown) {
      console.error("Error submitting form:", error);
      if (error instanceof Error) {
        alert(
          error.message ||
            "Failed to send the message. Please try again later.",
        );
      } else {
        alert("An unknown error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="w-full justify-self-center">
      <form ref={formRef} className="flex flex-col" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">Email Contact Form</h1>
        <label className="my-2">
          Name<span className="text-red-500">*</span>
        </label>
        <input
          className="mb-3 rounded-md border-2 p-3"
          placeholder="Name"
          required={true}
          name="name"
          type="text"
        ></input>
        <label className="my-2">
          Email Address<span className="text-red-500">*</span>
        </label>
        <input
          className="mb-3 rounded-md border-2 p-3"
          placeholder="Email Address"
          required={true}
          name="email"
          type="email"
        ></input>
        <label className="my-2">
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          className="mb-5 rounded-md border-2 p-3"
          placeholder="Message"
          required={true}
          name="message"
        ></textarea>
        <button className="my-2 cursor-pointer rounded-md border-2 border-blue-800 p-3 font-bold transition-all hover:bg-sky-100">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
