import PageTitle from "../components/pageTitle";
import ServiceCard from "../components/serviceCard";

function Services() {
  return (
    <div>
      <PageTitle text={"Services"} />
      <div className="flex flex-row flex-wrap justify-center gap-8 p-8 md:gap-12 md:px-12">
        <h1 className="mx-auto w-fit border-b-2 p-2 text-4xl">At Home</h1>
        <ServiceCard
          name={"Home Sleep Study"}
          description={
            "test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description"
          }
          instructions={["test1", "test2", "test3"]}
          faqs={[
            {
              question: "What is a Home Sleep Study?",
              answer:
                "A Home Sleep Study is a test that allows you to monitor your sleep patterns in the comfort of your own home.",
            },
            {
              question: "How do I prepare for a Home Sleep Study?",
              answer:
                "Preparation involves following specific guidelines provided by your healthcare provider, such as avoiding caffeine and alcohol before the test.",
            },
          ]}
          infoLink={
            "https://www.sleepfoundation.org/sleep-apnea/home-sleep-tests"
          }
        />
        <h1 className="mx-auto w-fit border-b-2 p-2 text-4xl">In Lab</h1>
        <ServiceCard
          name={"Polysomnogram"}
          description={
            "test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description"
          }
          instructions={["test1", "test2", "test3"]}
          faqs={[
            {
              question: "What is a Polysomnogram?",
              answer:
                "A Polysomnogram is a comprehensive sleep study that records brain waves, oxygen levels, heart rate, and breathing, as well as eye and leg movements.",
            },
            {
              question: "How long does a Polysomnogram take?",
              answer:
                "Typically, a Polysomnogram lasts for one night, but it may vary based on individual needs.",
            },
          ]}
          infoLink={
            "https://www.sleepfoundation.org/sleep-studies/polysomnography"
          }
        />
        <ServiceCard
          name={"CPAP/BIPAP"}
          description={
            "test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description"
          }
          instructions={["test1", "test2", "test3"]}
          faqs={[
            {
              question: "What is a Polysomnogram?",
              answer:
                "A Polysomnogram is a comprehensive sleep study that records brain waves, oxygen levels, heart rate, and breathing, as well as eye and leg movements.",
            },
            {
              question: "How long does a Polysomnogram take?",
              answer:
                "Typically, a Polysomnogram lasts for one night, but it may vary based on individual needs.",
            },
          ]}
          infoLink={
            "https://www.sleepfoundation.org/sleep-studies/polysomnography"
          }
        />
        <ServiceCard
          name={"Split Night"}
          description={
            "test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description"
          }
          instructions={["test1", "test2", "test3"]}
          faqs={[
            {
              question: "What is a Polysomnogram?",
              answer:
                "A Polysomnogram is a comprehensive sleep study that records brain waves, oxygen levels, heart rate, and breathing, as well as eye and leg movements.",
            },
            {
              question: "How long does a Polysomnogram take?",
              answer:
                "Typically, a Polysomnogram lasts for one night, but it may vary based on individual needs.",
            },
          ]}
          infoLink={
            "https://www.sleepfoundation.org/sleep-studies/polysomnography"
          }
        />
        <ServiceCard
          name={"MSLT/MWT"}
          description={
            "test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description"
          }
          instructions={["test1", "test2", "test3"]}
          faqs={[
            {
              question: "What is a Polysomnogram?",
              answer:
                "A Polysomnogram is a comprehensive sleep study that records brain waves, oxygen levels, heart rate, and breathing, as well as eye and leg movements.",
            },
            {
              question: "How long does a Polysomnogram take?",
              answer:
                "Typically, a Polysomnogram lasts for one night, but it may vary based on individual needs.",
            },
          ]}
          infoLink={
            "https://www.sleepfoundation.org/sleep-studies/polysomnography"
          }
        />
      </div>
    </div>
  );
}

export default Services;
