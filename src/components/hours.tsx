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

const Hours: React.FC<HoursProps> = ({ hours }) => {
  return (
    <div>
      <p className="text-xl font-semibold">Business Hours:</p>
      <div className="grid grid-cols-2 max-w-96">
        {/* Days */}
        <div className="flex flex-col">
          <p>Monday</p>
          <p>Tuesday</p>
          <p>Wednesday</p>
          <p>Thursday</p>
          <p>Friday</p>
          <p>Saturday</p>
          <p>Sunday</p>
        </div>
        {/* Hours */}
        <div className="flex flex-col justify-self-end">
          <p>{hours.monday}</p>
          <p>{hours.tuesday}</p>
          <p>{hours.wednesday}</p>
          <p>{hours.thursday}</p>
          <p>{hours.friday}</p>
          <p>{hours.saturday}</p>
          <p>{hours.sunday}</p>
        </div>
      </div>
    </div>
  );
};

export default Hours;
