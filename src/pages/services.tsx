import PageTitle from "../components/pageTitle";
import ServiceCard from "../components/serviceCard";

const inLabFAQS = [
  {
    question: "What should I expect?",
    answer:
      "In-lab sleep studies take place in a private, comfortable room. Patients are encouraged to bring comfortable pajamas and slippers. Most patients stay overnight.",
  },
  {
    question: "What time should I arrive?",
    answer: "Please arrive at the sleep center at 8:15 PM.",
  },
  {
    question: "What should I bring?",
    answer: "Please refer to the provided checklist for items to bring.",
  },
  {
    question: "When will I be able to go home?",
    answer:
      "Patients scheduled for a one-night study are usually dismissed by 6:00 AM. Patients scheduled for a daytime study (MSLT/MWT) will be dismissed between 3:00–4:00 PM.",
  },
  {
    question: "What should I do to prepare on the day of my study?",
    answer:
      "Please refer to the provided checklist for preparation instructions.",
  },
  {
    question: "Will there be other patients at the center at the same time?",
    answer:
      "Yes, there will be other patients scheduled for in-lab sleep studies, but each patient has a private room.",
  },
  {
    question: "What happens after I arrive?",
    answer:
      "Each patient is provided with a private bedroom. After changing into pajamas, sleep technicians will apply electrodes to your face, head, chest, and legs using a mild paste or tape. These electrodes record natural electrical activity in your body—they do not generate any current.",
  },
  {
    question: "When will the results be available?",
    answer: "The report is usually finalized within 10–15 business days.",
  },
  {
    question:
      "Can my spouse or significant other stay with me during my study?",
    answer:
      "No visitors are allowed during the study, except for a caretaker or parent/guardian in the case of pediatric patients.",
  },
  {
    question: "What if I can’t sleep?",
    answer:
      "It is normal to sleep less comfortably during an in-lab study. Most patients still fall asleep, and a full 6 hours of sleep is not required for diagnosis. To improve sleep quality, wake up earlier than usual on the day of the study, avoid naps, and avoid caffeine (coffee, tea, soda, chocolate, energy drinks, etc.) in the afternoon and evening.",
  },
  {
    question: "May I sleep naked?",
    answer:
      "No. Please wear pajamas or a t-shirt and shorts. Silk pajamas are not permitted.",
  },
  {
    question: "Will I have my own room?",
    answer: "Yes. Each patient has a private room for testing.",
  },
  {
    question: "Can I get my results the morning after the study?",
    answer:
      "No. The sleep technologist collects the data, which is interpreted by a sleep physician. Results will be provided by your physician once reviewed.",
  },
  {
    question: "Does the sleep center have Wi-Fi or TV?",
    answer: "Yes. Wi-Fi and TV are available for patients.",
  },
  {
    question: "Why do you video sleep studies?",
    answer:
      "Video is required by American Academy of Sleep Medicine (AASM) protocols. It helps score your sleep and detect abnormal movements related to various sleep disorders. As an AASM-accredited center, we follow these standards to ensure the highest level of care.",
  },
  {
    question: "What happens next if I am diagnosed with a sleep disorder?",
    answer:
      "Your sleep doctor will review treatment options with you. CPAP is the most common treatment for sleep apnea, but alternative treatments are also available.",
  },
  {
    question: "Who should I see regarding my results?",
    answer:
      "You will usually follow up with your referring physician or the sleep specialist who interpreted your study. A list of associated sleep specialists is available under the 'Doctors' section of our website.",
  },
];

function Services() {
  return (
    <div>
      <PageTitle text={"Services"} />
      <div className="flex flex-col items-center gap-8 p-8 md:px-12">
        <div className="item-center flex w-11/12 flex-col gap-2 text-center text-lg md:w-3/4">
          <h1 className="mx-auto w-fit border-b-2 p-2 text-4xl">Diagnosis</h1>
          <p>
            Your health care provider may make an evaluation based on your
            symptoms and a sleep history. However you might need further
            evaluation via a sleep study to assist the doctor in the diagnosis
            and treatment of sleep disorders.
          </p>
          <p>
            An evaluation often involves overnight monitoring of your breathing
            and other body functions during sleep testing either at home or at a
            sleep center.
          </p>

          <span className="font-semibold">
            Tests to detect sleep apnea include:
          </span>
          <p>
            {"- "}
            <span className="font-semibold">Home sleep tests:</span> Measuring
            your heart rate, blood oxygen level, airflow, and breathing patterns
            with provided at home equipment.
          </p>
          <p>
            {"- "}
            <span className="font-semibold">
              Nocturnal polysomnography:
            </span>{" "}
            Hooking up to equipment in the lab that monitors your heart, lung
            and brain activity, breathing patterns, arm and leg movements, and
            blood oxygen levels while you sleep.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="mx-auto w-fit border-b-2 p-2 text-4xl">At Home</h1>
          <ServiceCard
            name={"Home Sleep Test"}
            image="/Services/ares.jpg"
            description={
              "A home sleep test is a diagnostic study that monitors various physiological parameters while you sleep in your own home. The test requires a prescription from a care provider and typically involves a three-night study. You'll pick up monitoring equipment from the Sleep Center, which includes devices to track your heart rate, breathing, and oxygen levels. The equipment is sturdy, easy to use, and non-painful. You'll need to record at least 7 hours of sleep data per night while wearing the equipment."
            }
            instructions={{
              before: [
                "Schedule a visit with a care provider if you don't have a prescription",
                "Complete all forms and paperwork (available via email, at cmdsleep.com, or in your patient portal)",
                "Plan to have at least 7 hours available for recording sleep data",
              ],
              during: [
                "Don't consume alcohol or caffeine during the afternoon and evening before the study",
                "Don't take any afternoon naps",
                "Bring to pickup: insurance cards, driver's license (photo ID), any paperwork that was sent to you",
                "Pick up equipment at the Sleep Center",
                "Staff will review how to use each piece of equipment",
                "Go to sleep at your normal time with the devices on",
                "Sleep in any position, but try to sleep on your back for some time",
                "Keep devices on throughout the night, even when using the restroom or drinking water",
                "Call the Lab if you have any questions during the study",
              ],
              after: [
                "Return equipment ON-TIME as it's used every night",
                "Late fee of $100/night applies for overdue equipment",
                "If test falls on Friday night, Monday is considered the next day for return purposes",
              ],
            }}
            faqs={[
              {
                question: "What is a Home Sleep Test?",
                answer:
                  "A Home Sleep Test (HST) is a screening test used to diagnose or rule out Obstructive Sleep Apnea (OSA), one of the most common sleep disorders. It is performed in the comfort of your own home using the ARES 620 device, which is worn like a headband on your forehead.",
              },
              {
                question: "How will I receive the Home Sleep Test device?",
                answer:
                  "You will call our office to schedule a date and time to pick up the device. Our staff will review how to use it. For patients unable to travel during business hours, we offer delivery and pickup for an out-of-pocket fee (not covered by insurance). Contact our office for details.",
              },
              {
                question: "How do I use the Home Sleep Test device?",
                answer:
                  "Our staff will demonstrate how to use the device during pickup. Instructions are also provided via email or through your patient portal when your appointment is scheduled.",
              },
              {
                question: "When should I take the Home Sleep Test?",
                answer:
                  "Begin the test the night you receive or pick up the device. Return the device as soon as possible so it can be used by other patients.",
              },
              {
                question: "What time should I go to bed?",
                answer:
                  "Follow your normal bedtime routine. Turn on the device when you get into bed, even if you do not fall asleep right away. If you wake during the night, keep the device on and powered.",
              },
              {
                question: "What if I can't sleep?",
                answer:
                  "It is common to have difficulty sleeping during a study. Try to rest as much as possible for accurate results.",
              },
              {
                question: "When will I get the results of my Home Sleep Test?",
                answer:
                  "Your study results are typically sent to your doctor within 10-15 business days after the test, often sooner. After returning the device, data is uploaded and analyzed within 24 hours (next business day if weekend or holiday). A sleep specialist interprets the results and sends the report to your physician, who will contact you once they are ready.",
              },
              {
                question: "What happens after my Home Sleep Test?",
                answer:
                  "Depending on your results, you will follow up with your physician or may require an in-lab titration study. If results are inconclusive or you still have symptoms despite a negative test, your physician may recommend an in-lab overnight study.",
              },
              {
                question: "Does my insurance cover the Home Sleep Test?",
                answer:
                  "We accept Aetna, Medicare, and most insurance plans. Confirm coverage and network status with your insurance provider using the member services number on your card.",
              },
              {
                question: "Do I need a prescription?",
                answer:
                  "Yes. A prescription from your healthcare provider is required for a Home Sleep Test.",
              },
              {
                question: "Do I need an insurance referral?",
                answer:
                  "Most HMOs and POS plans require a referral from your primary care physician. Ensure your referral is obtained prior to the study so insurance coverage applies.",
              },
              {
                question: "Can I take my medications?",
                answer:
                  "Continue your usual prescribed medications unless your doctor advises otherwise. Avoid sleep aids or supplements during the study unless instructed by your physician.",
              },
              {
                question:
                  "Do I need to turn off the device after completing the study?",
                answer:
                  "The device will automatically turn off after 7 hours. If you remove it earlier or the lights remain on, press the button to power it off.",
              },
              {
                question: "Can I wear my CPAP mask during the study?",
                answer:
                  "No. The nasal cannula used with the device will interfere with your CPAP mask.",
              },
              {
                question: "Can I wear my oxygen cannula during the study?",
                answer:
                  "Yes. Both the oxygen cannula and the device's nasal cannula can be worn at the same time.",
              },
              {
                question: "Do I need to sleep on my back?",
                answer:
                  "No. You may sleep in any comfortable position, though data from multiple positions is helpful if possible.",
              },
              {
                question:
                  "Will I be able to sleep with the ARES unit on my forehead?",
                answer:
                  "You may notice it at first, but most people do not find it uncomfortable or disruptive to sleep.",
              },
              {
                question: "How many nights does the Home Sleep Test last?",
                answer:
                  "Most tests consist of 3 consecutive nights, with the device returned on the 4th morning. Some insurance plans may cover only 1 night.",
              },
            ]}
            infoLink={
              "https://www.watermarkmedical.com/healthcare-professionals/ares-tm-620"
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="mx-auto w-fit border-b-2 p-2 text-4xl">In Lab</h1>
          <ServiceCard
            name={"Polysomnogram"}
            image="/Services/polysomnography.jpg"
            description={
              "Polysomnography is a noninvasive, painless in-lab test that records your brain waves, oxygen level in your blood, heart rate, and breathing during sleep. It also measures eye and leg movements. The test is usually performed at night but may be done during the day for shift workers. Polysomnography monitors your sleep stages and cycles to identify if or when your sleep patterns are disrupted and why. The test can help diagnose sleep disorders such as Obstructive Sleep Apnea, Periodic Limb Movements, and Narcolepsy. It may also be used to determine a treatment plan or adjust existing treatment. The most common side effect is skin irritation from the adhesive used to attach test sensors."
            }
            instructions={{
              before: [
                "Don't consume alcohol or caffeine during the afternoon and evening before the study",
                "Don't take afternoon naps",
                "Bathe or shower before your sleep study",
                "Don't put on lotions, gels, colognes or makeup before the test",
                "Arrive at the Sleep Center ON TIME at 8:15 PM",
                "Bring: Insurance cards, driver's license (photo ID), any paperwork sent to you",
                "Bring: Bedtime clothes and change of clothes for next day (no silk PJs)",
                "Bring: All medications as prescribed (Sleep Center cannot provide medications)",
                "Bring: Book/magazine for reading, favorite pillow/blanket (optional), toiletries",
              ],
              during: [
                "Change into nightclothes and fill out bedtime questionnaire upon arrival",
                "Technologist will mark and measure your head for EEG electrode placement (45-60 minute setup)",
                "Study typically starts between 10-11:00 pm",
                "Sleep as you normally would at home",
                "You can use the restroom freely (monitoring devices disconnect easily)",
                "Sleep in any position, but try to spend some time on your back",
                "CPAP may be applied during the night if necessary",
                "Technologists monitor you throughout, and speak through monitoring equipment if you need help",
                "Study ends between 5:00-6:00 am",
                "Sensor removal takes 15-20 minutes",
                "You can wash up at the center before leaving",
              ],
              after: [
                "Return to usual activities after the study",
                "Either our office or your referring doctor's office (or both) will contact you after report is finalized",
                "Report finalization generally takes about 10-15 business days",
                "You may be asked to schedule a follow-up appointment to review results with the sleep doctor",
              ],
            }}
            faqs={inLabFAQS}
            checklistLink="/services/inLabChecklist.pdf"
            infoLink={"https://www.sleepfoundation.org/sleep-studies"}
          />
        </div>
        <ServiceCard
          name={"CPAP/BiPAP Titration"}
          image="/Services/cpap.avif"
          description={
            "A CPAP sleep study, also known as a CPAP titration study, is a type of sleep study used to determine the correct air pressure setting for a CPAP machine, which is used to treat sleep-related breathing disorders like sleep apnea. This study helps doctors find the optimal pressure needed to keep your airway open during sleep, ensuring effective treatment for your sleep apnea. The study involves connecting you to a CPAP machine while you spend the night at a sleep facility. If CPAP proves insufficient, a BiPAP machine may be used, which delivers two different pressure levels: higher during inhalation and lower during exhalation."
          }
          instructions={{
            before: [
              "Don't consume alcohol or caffeine during the afternoon and evening before the study",
              "Don't take afternoon naps",
              "Bathe or shower before your sleep study",
              "Don't put on lotions, gels, colognes or makeup before the test",
              "Arrive at the Sleep Center ON TIME at 8:15 PM",
              "Bring: Insurance cards, driver's license (photo ID), any paperwork sent to you",
              "Bring: Bedtime clothes and change of clothes for next day (no silk PJs)",
              "Bring: All medications as prescribed (Sleep Center cannot provide medications)",
              "Bring: Book/magazine for reading, favorite pillow/blanket (optional), toiletries",
            ],
            during: [
              "Study typically starts between 10-11:00 pm",
              "Sleep as you normally would at home",
              "You can use the restroom freely (monitoring devices disconnect easily)",
              "Sleep in any position, but try to spend some time on your back (unless medically contraindicated)",
              "You'll be connected to a CPAP machine using a tube and mask",
              "Technologist may swap masks throughout the night to find the best fit",
              "Air pressure starts low and increases in small increments",
              "Humidity may be added if you have trouble sleeping",
              "BiPAP machine may be used if CPAP is insufficient or not tolerated",
              "Technologists monitor you throughout - speak through monitoring equipment if you need help",
              "Study ends between 5-6:00 am",
              "Sensor removal takes 15-20 minutes",
              "You can wash up at the center before leaving",
            ],
            after: [
              "Return to usual activities after the study",
              "Either our office or your referring doctor's office (or both) will contact you after report is finalized",
              "Report finalization generally takes about 10-15 business days",
            ],
          }}
          faqs={inLabFAQS}
          checklistLink="/services/inLabChecklist.pdf"
          infoLink={"https://www.sleepfoundation.org/sleep-studies"}
        />
        <ServiceCard
          name={"Split Night Sleep Study"}
          image="/Services/splitNight.webp"
          description={
            "A split-night study includes both diagnostics Polysomnogram with a CPAP titration on the same night, primarily for individuals suspected of having severe obstructive sleep apnea. This approach allows for both diagnosis and treatment initiation within a single overnight session. The first part of the study is a standard polysomnogram to monitor your breathing for signs of Obstructive Sleep Apnea, periods where you actually stop or have difficulty breathing. If significant Obstructive Sleep Apnea is detected during the diagnostic phase, the study transitions to CPAP titration in the second part. While efficient, there can be challenges with adapting to CPAP during the same night, and some patients may require an additional night of study to acquire the optimal pressure setting."
          }
          instructions={{
            before: [
              "Follow standard Polysomnogram preparation instructions",
              "Follow standard CPAP titration preparation instructions",
              "Arrive at the Sleep Center ON TIME at 8:15 PM",
            ],
            during: [
              "First part: Standard Polysomnogram monitoring for breathing patterns and OSA signs",
              "If significant OSA is detected, study transitions to CPAP titration",
              "Second part: CPAP application and pressure adjustment",
              "Be aware that adapting to CPAP during the same night can be challenging",
              "Some patients may need more time to adjust",
            ],
            after: [
              "You may need to return for an additional night of study if optimal pressure setting wasn't achieved",
              "Return to usual activities after the study",
              "Either our office or your referring doctor's office (or both) will contact you after report is finalized",
              "Report finalization generally takes about 10-15 business days",
            ],
          }}
          faqs={inLabFAQS}
          checklistLink="/services/inLabChecklist.pdf"
          infoLink={"https://www.sleepfoundation.org/sleep-studies"}
        />
        <ServiceCard
          name={"MSLT/MWT"}
          image="/Services/mslt-mwt.webp"
          description={
            'The Multiple Sleep Latency Test (MSLT) is a standardized test to rule out Narcolepsy and/or Idiopathic Hypersomnolence (Excessive Daytime Sleepiness), where each nap is an "opportunity" for you to sleep and monitors your tendency to sleep when given the opportunity. The Maintenance of Wakefulness Test (MWT) is a standardized test to measure your level of alertness/wakefulness, where you attempt to remain awake while sitting in a darkened room during each 20-minute session. Both tests are performed throughout the day immediately following your Standard PSG Study, with sessions occurring at 2-hour intervals.'
          }
          instructions={{
            before: [
              "Must complete a Standard PSG Study the night before",
              "No specific additional preparation required",
            ],
            during: [
              "Some monitoring devices from the sleep study will be removed",
              "Change into your daytime clothes",
              "First session begins 1.5-2 hours after awakening from sleep study",
              "Additional sessions occur at 2-hour intervals",
              "For MSLT: Each nap is an opportunity to sleep",
              "For MWT: Attempt to remain awake during each 20-minute session in a darkened room",
              "For MWT: No self-stimulation allowed (no pinching, singing, reading, etc.)",
              "Between sessions: remain awake and out of bed",
              "Breakfast and lunch will be provided",
              "No caffeinated beverages allowed during the day",
              "For MWT: No naps allowed during the day",
            ],
            after: [
              "Return to usual activities after the study",
              "Either our office or your referring doctor's office (or both) will contact you after report is finalized",
              "Report finalization generally takes about 10-15 business days",
            ],
          }}
          faqs={inLabFAQS}
          checklistLink="/services/inLabChecklist.pdf"
          infoLink={"https://www.sleepfoundation.org/sleep-studies"}
        />
      </div>
    </div>
  );
}

export default Services;
