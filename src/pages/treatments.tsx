import PageTitle from "../components/pageTitle";
import TreatmentCard from "../components/treatmentCard";

function Treatments() {
  return (
    <div>
      <PageTitle text={"Treatments"} />
      <div className="flex flex-col gap-8 p-8 md:px-12">
        <p className="text-center text-lg">
          For milder cases of sleep apnea, your health care provider may
          recommend only lifestyle changes, such as losing weight or quitting
          smoking. You may need to change the position in which you sleep. If
          you have nasal allergies, your provider may recommend treatment for
          your allergies. If these measures don't improve your symptoms or if
          your apnea is moderate to severe, a number of other treatments are
          available. Certain devices can help open a blocked airway. In other
          cases, surgery might be necessary.
        </p>
        <div>
          <div className="flex flex-col gap-8">
            <div id="CPAP">
              <TreatmentCard
                name={"Continuous Positive Airway Pressure (CPAP)"}
                image={"/treatments/cpap.webp"}
                description={
                  "A CPAP machine delivers just enough air pressure to a mask to keep the upper airway passages open, preventing snoring and sleep apnea. The pressurized air is provided through a mask that seals with your mouth or nose. This allows you to breathe without much effort and sleep without waking up. The CPAP machine doesn't breathe for you. You can breathe in and out normally on your own."
                }
                recommendations={[
                  "Moderate to severe obstructive sleep apnea is present",
                  "Upper airway passages need to be kept open to prevent apnea and snoring",
                  "Most common and reliable method for treating sleep apnea",
                ]}
                notes={[
                  "Some people find CPAP cumbersome or uncomfortable initially, but with practice, most learn to adjust the mask tension for comfort",
                  "Try more than one type of mask if needed to find one that's comfortable",
                  "Don't stop using the CPAP machine if you have problems, instead work with your health care provider to make adjustments",
                  "Contact your provider if you're still snoring or begin snoring again despite treatment",
                  "If your weight changes, the pressure settings of the CPAP machine might need to be adjusted",
                ]}
                infoLink={"https://www.sleepfoundation.org/cpap"}
              />
            </div>
            <TreatmentCard
              name={"Auto-PAP"}
              image={"/treatments/autopap.jpg"}
              description={
                "Also known as APAP or Auto-Adjusting PAP, is a type of machine that automatically adjusts air pressure based on the user's breathing patterns. Unlike CPAP machines that deliver a constant air pressure, AutoPAP machines use sensors to detect changes in airflow and breathing disturbances like snoring, apneas, and hypopneas. When such disturbances are detected, the AutoPAP machine increases the air pressure to keep the airway open and prevent obstructions. Once breathing is normalized, the pressure is lowered back to the minimum effective level."
              }
              recommendations={[
                "When CPAP pressure requirements vary throughout the night or in different sleep positions",
                "If you have trouble with CPAP pressure settings",
                "If you find the fixed pressure of a CPAP machine uncomfortable or experience side effects",
              ]}
              notes={[
                "AutoPAP may provide a more comfortable experience compared to fixed-pressure CPAP",
                "The machine automatically adjusts pressure based on real-time breathing patterns",
                "Particularly useful for those whose sleep apnea symptoms vary throughout the night",
              ]}
              infoLink={"https://www.sleepfoundation.org/cpap/apap-machine"}
            />
            <TreatmentCard
              name={"BiPAP"}
              image={"/treatments/bpap.jpg"}
              description={
                "Short for Bilevel Positive Airway Pressure, is a type of non-invasive ventilation used to support breathing in individuals with respiratory conditions. Unlike CPAP which maintains a constant pressure, BiPAP delivers different pressures during inhalation and exhalation. It delivers air pressure at two different levels: a higher pressure during inhalation (IPAP) and a lower pressure during exhalation (EPAP). This helps to open up the airways and make it easier to breathe, particularly for those who have difficulty exhaling."
              }
              recommendations={[
                "When CPAP is not sufficient or patient is unable to tolerate CPAP therapy",
                "Conditions with difficulty exhaling against CPAP pressure",
                "When experiencing hypoventilation which is when individuals are not breathing adequately on their own",
                "Obstructive sleep apnea, COPD, obesity hypoventilation syndrome, and other respiratory insufficiencies",
              ]}
              notes={[
                "BiPAP delivers different pressures during inhalation (IPAP) and exhalation (EPAP)",
                "Particularly useful for individuals who struggle with exhaling against the pressure of a CPAP machine",
                "Can be used to support ventilation in various respiratory conditions beyond sleep apnea",
              ]}
              infoLink={
                "https://www.sleepfoundation.org/cpap/what-is-a-bipap-machine"
              }
            />
            <TreatmentCard
              name={"Oral Appliances"}
              image={"/treatments/oral-appliance.jpg"}
              description={
                "Oral appliances are designed to keep your throat open. They are available and prescribed by a dentist that specializes in treating sleep-related breathing disorders, primarily obstructive sleep apnea and snoring, through the use of oral appliance therapy. They work with patients to address airway obstruction issues during sleep by creating custom-fitted oral devices that help keep the airway open. Some are designed to open your throat by bringing your jaw forward, which can sometimes relieve snoring and mild obstructive sleep apnea."
              }
              recommendations={[
                "Mild obstructive sleep apnea",
                "Snoring issues",
                "When CPAP is not tolerated or patient prefers an alternative",
                "Patients who find oral appliances easier to use than CPAP",
              ]}
              notes={[
                "Although CPAP is more reliably effective than oral appliances, oral appliances might be easier to use",
                "Must be prescribed by a dentist specializing in sleep-related breathing disorders",
                "You might need to try different devices before finding one that works for you",
                "Requires follow-up with your dentist repeatedly during the first year and then regularly after that to ensure proper fit",
                "Regular reassessment of symptoms is necessary",
              ]}
              infoLink={"https://bsleepinc.com/"}
            />
            <TreatmentCard
              name={"Weight Loss"}
              image={"/treatments/weight-loss.jpg"}
              description={
                "Losing weight can significantly improve or even resolve obstructive sleep apnea (OSA) symptoms, particularly in individuals who are overweight or obese. Weight loss reduces the excess tissue in the neck and throat that can block the airway during sleep, leading to fewer breathing disruptions. Even a modest weight loss of 5-10% of body weight can have a noticeable positive impact."
              }
              recommendations={[
                "Individuals who are overweight or obese with sleep apnea",
                "When excess weight around neck and throat is contributing to airway obstruction",
                "As a first-line lifestyle modification for OSA treatment",
                "When pharyngeal fat deposits are blocking upper airway during sleep",
              ]}
              notes={[
                "Weight loss of just 10-15% can reduce the severity of OSA by 50% in moderately obese patients",
                "While weight loss provides meaningful improvements, it usually does not lead to a complete cure - many patients need additional therapies",
                "Exercise alone can modestly improve OSA severity, even without significant weight loss",
                "OSA patients who effectively manage their sleep apnea may find it easier to lose weight",
                "Aim for gradual and sustainable weight loss of 1-2 pounds per week",
                "Consult healthcare professionals for personalized weight loss strategies",
              ]}
              infoLink={
                "https://www.sleepfoundation.org/physical-health/weight-loss-and-sleep"
              }
            />
            <TreatmentCard
              name={"Inspire"}
              image={"/treatments/inspire.webp"}
              description={
                "Inspire is an implantable device used to treat obstructive sleep apnea (OSA). Inspire therapy is the first FDA-approved obstructive sleep apnea therapy that works comfortably inside your body. The small Inspire implant delivers gentle pulses to your airway muscles to keep your airway open so you can breathe regularly and sleep soundly. It works by stimulating the hypoglossal nerve, which controls tongue movement, to keep the airway open during sleep."
              }
              recommendations={[
                "Moderate to severe obstructive sleep apnea",
                "Unable to tolerate or benefit from CPAP therapy",
                "Not significantly obese",
                "Over 18 years of age",
                "Alternative for those who find CPAP masks uncomfortable or inconvenient",
              ]}
              notes={[
                "Surgically implanted under the skin near collarbone in a short outpatient procedure",
                "No mask or hose required - works inside your body",
                "Patients control the device with a handheld remote - turn on before bed and off when waking",
                "Can adjust stimulation level or pause therapy as needed",
                "Delivers mild, painless electrical impulses to move tongue forward and prevent airway collapse",
                "Many patients experience significant reduction in snoring",
                "FDA-approved alternative to CPAP therapy",
              ]}
              infoLink={
                "https://www.sleepfoundation.org/sleep-apnea/what-is-inspire-sleep-apnea-treatment"
              }
            />
            <TreatmentCard
              name={"Surgery for OSA"}
              image={"/treatments/surgery.jpg"}
              description={
                "Surgery may be an option for people with OSA, but usually only after other treatments have failed. Generally, at least a three-month trial of other treatment options is suggested before considering surgery. However, for a small number of people with certain jaw structure problems, surgery is a good first option. Surgical options include tissue removal, tissue shrinkage, jaw repositioning, implants, nerve stimulation, and creating new air passageways."
              }
              recommendations={[
                "After at least three months of failed alternative treatments",
                "People with certain jaw structure problems (surgery may be first option)",
                "Those who cannot tolerate CPAP or oral appliances",
                "Severe, life-threatening sleep apnea when other treatments have failed",
                "Enlarged tonsils or adenoids contributing to airway obstruction",
              ]}
              notes={[
                "Multiple surgical options available depending on the specific anatomy and severity",
                "Tissue removal (uvulopalatopharyngoplasty) is less effective than CPAP and not considered reliable for OSA",
                "Radiofrequency ablation may be used for mild to moderate sleep apnea with fewer surgical risks",
                "Jaw repositioning (maxillomandibular advancement) enlarges space behind tongue and soft palate",
                "Tracheostomy is reserved for severe, life-threatening cases when all other treatments have failed",
                "Weight-loss (bariatric) surgery may help by reducing overall airway obstruction",
                "More research needed on effectiveness of soft palate implants",
              ]}
              infoLink={
                "https://www.sleepfoundation.org/sleep-apnea/surgery-for-sleep-apnea"
              }
            />
            <TreatmentCard
              name={"Lifestyle and Home Remedies"}
              image={"/treatments/home-remedies.jpg"}
              description={
                "In some cases, self-care might be a way for you to deal with obstructive sleep apnea and possibly central sleep apnea. These lifestyle modifications include weight loss, regular exercise, mouth exercises, avoiding alcohol and certain medications, changing sleep positions, quitting smoking, and using a humidifier. These approaches can help reduce symptoms and improve sleep quality without medical devices or surgery."
              }
              recommendations={[
                "Mild to moderate sleep apnea cases",
                "As complementary treatment alongside other therapies",
                "When symptoms worsen with back sleeping",
                "Individuals who snore and have mild OSA symptoms",
                "Those taking medications that may worsen sleep apnea",
              ]}
              notes={[
                "Even slight weight loss can help relieve throat constriction",
                "30 minutes of moderate exercise most days can ease symptoms even without weight loss",
                "Mouth exercises strengthen airway muscles and can reduce snoring",
                "Avoid alcohol, tranquilizers, and sleeping pills as they relax throat muscles",
                "Sleep on your side or abdomen - over 50% of people have worse symptoms when sleeping on back",
                "Tennis ball technique or commercial devices can help prevent back sleeping",
                "Sleeping at 60-degree angle may help those who can't side sleep",
                "Discuss all medications with doctor as some (benzodiazepines, antihistamines, antidepressants, opiates) can worsen symptoms",
                "Quitting smoking is important for overall airway health",
                "Humidifiers may reduce airway dryness but studies haven't shown direct impact on sleep apnea events",
              ]}
              infoLink={
                "https://www.sleepfoundation.org/sleep-apnea/home-remedies-for-sleep-apnea"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Treatments;
