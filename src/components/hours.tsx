import { Clock } from "lucide-react";

interface HoursProps {
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}

function today() {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const dayOfWeek = dayNames[today.getDay()];

  return dayOfWeek;
}

const Hours: React.FC<HoursProps> = ({ hours }) => {
  return (
    <div className="flex max-w-96 flex-col items-center gap-y-2">
      <p className="flex items-center gap-x-2 text-xl font-semibold">
        <Clock className="inline" /> Business Hours:
      </p>
      <div className="grid grid-cols-2">
        {/* Days */}
        <div className="flex flex-col">
          <p className={today() == "Monday" ? "text-red-500" : ""}>Monday</p>
          <p className={today() == "Tuesday" ? "text-red-500" : ""}>Tuesday</p>
          <p className={today() == "Wednesday" ? "text-red-500" : ""}>
            Wednesday
          </p>
          <p className={today() == "Thursday" ? "text-red-500" : ""}>
            Thursday
          </p>
          <p className={today() == "Friday" ? "text-red-500" : ""}>Friday</p>
          <p className={today() == "Saturday" ? "text-red-500" : ""}>
            Saturday
          </p>
          <p className={today() == "Sunday" ? "text-red-500" : ""}>Sunday</p>
        </div>
        {/* Hours */}
        <div className="flex flex-col justify-self-end">
          <p className={today() == "Monday" ? "text-red-500" : ""}>
            {hours.monday}
          </p>
          <p className={today() == "Tuesday" ? "text-red-500" : ""}>
            {hours.tuesday}
          </p>
          <p className={today() == "Wednesday" ? "text-red-500" : ""}>
            {hours.wednesday}
          </p>
          <p className={today() == "Thursday" ? "text-red-500" : ""}>
            {hours.thursday}
          </p>
          <p className={today() == "Friday" ? "text-red-500" : ""}>
            {hours.friday}
          </p>
          <p className={today() == "Saturday" ? "text-red-500" : ""}>
            {hours.saturday}
          </p>
          <p className={today() == "Sunday" ? "text-red-500" : ""}>
            {hours.sunday}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hours;
