import { useRef } from "react";

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  /**const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
  };**/

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log("🟢 Form submission started");

      const formData = new FormData(e.target as HTMLFormElement);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };
      console.log("🟢 Form data extracted:", data);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log("🟢 Request sent to /api/contact, status:", response.status);

      // Clone the response so we can try both json() and text()
      const responseClone = response.clone();

      interface ContactResponse {
        message?: string;
        error?: string;
      }
      let result: ContactResponse;
      try {
        result = await response.json();
        console.log("🟢 Response JSON parsed:", result);
      } catch (jsonError) {
        console.warn(
          "⚠️ Failed to parse JSON response, trying text",
          jsonError,
        );
        const text = await responseClone.text();
        console.log("🟢 Raw response text:", text);
        throw new Error("Invalid JSON response from server");
      }

      if (!response.ok) {
        console.error("❌ Server returned error:", result?.error);
        throw new Error(
          result?.error || "An error occurred while sending the message.",
        );
      }

      alert(result.message || "Message sent successfully!");
      console.log("🟢 Form submitted successfully, resetting form");
      formRef.current?.reset();
    } catch (error: unknown) {
      console.error("❌ Error submitting form:", error);
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
        <button className="border-primary text-primary hover:bg-primary active:bg-primary my-2 cursor-pointer rounded-md border-2 p-3 font-bold transition-all hover:text-white active:text-white">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
