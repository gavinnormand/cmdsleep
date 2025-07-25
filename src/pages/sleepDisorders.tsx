import PageTitle from "../components/pageTitle";
import SleepDisorderCard from "../components/sleepDisorderCard";

function SleepDisorders() {
  return (
    <div>
      <PageTitle text={"Sleep Disorders"} />
      <div className="flex flex-row flex-wrap justify-center gap-8 p-8 md:gap-12 md:p-12">
        <SleepDisorderCard
          name={"Obstructive Sleep Apnea"}
          tag="Sleep Related Breathing Disorder"
          facts={[
            "Blocks airflow during sleep",
            "Causes snoring and tiredness",
            "Raises heart and stroke risk",
          ]}
          infoLink="https://www.sleepfoundation.org/sleep-apnea/obstructive-sleep-apnea"
        />
        <SleepDisorderCard
          name={"Central Sleep Apnea"}
          tag="Sleep Related Breathing Disorder"
          facts={[
            "When the brain skips sending breath signals",
            "Breathing stops without airway blockage",
            "Linked to heart and nervous system issues",
          ]}
          infoLink="https://www.sleepfoundation.org/sleep-apnea/central-sleep-apnea"
        />
        <SleepDisorderCard
          name={"Cheyne-Stokes Breathing"}
          tag="Sleep Related Breathing Disorder"
          facts={[
            "Pattern of waxing and waning breaths",
            "Breathing pauses follow deep, fast breaths",
            "Often seen in heart failure or stroke",
          ]}
          infoLink="https://www.sleepfoundation.org/sleep-apnea/cheyne-stokes-respirations"
        />
        <SleepDisorderCard
          name={"Hypersomnia"}
          facts={[
            "Excessive daytime sleepiness",
            "People may sleep long but still feel tired",
            "Can be caused by sleep disorders or medical issues",
          ]}
          infoLink="https://www.sleepfoundation.org/hypersomnia"
        />
        <SleepDisorderCard
          name={"Insomnia"}
          facts={[
            "Difficulty falling or staying asleep",
            "Leads to daytime fatigue and poor focus",
            "Can be caused by stress, anxiety, or medical conditions",
          ]}
          infoLink="https://www.sleepfoundation.org/insomnia"
        />
        <SleepDisorderCard
          name={"Narcolepsy"}
          facts={[
            "Causes sudden sleep attacks during the day",
            "Can include cataplexy (sudden muscle weakness)",
            "Disrupts the brain’s sleep-wake control",
          ]}
          infoLink="https://www.sleepfoundation.org/narcolepsy"
        />
        <SleepDisorderCard
          name={"Parasomnias"}
          facts={[
            "Abnormal behaviors during sleep",
            "Includes sleepwalking, night terrors, and REM sleep behavior disorder",
            "Can disrupt sleep and cause injury",
          ]}
          infoLink="https://www.sleepfoundation.org/parasomnias"
        />
        <SleepDisorderCard
          name={"Sleep Related Movement Disorders"}
          facts={[
            "Involuntary movements during sleep",
            "Includes restless legs syndrome and periodic limb movement disorder",
            "Can cause sleep disruption and discomfort",
          ]}
          infoLink="https://www.sleepfoundation.org/sleep-related-movement-disorders"
        />
      </div>
    </div>
  );
}

export default SleepDisorders;
