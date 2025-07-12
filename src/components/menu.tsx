import { Link } from "react-router-dom";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-16 left-0 z-50 w-full bg-white shadow-lg">
      <div className="flex flex-col items-center">
        <Link
          className="w-full py-2 text-center transition-all hover:bg-gray-100 active:bg-gray-100"
          to={"/"}
          onClick={onClose}
        >
          Home
        </Link>
        <Link
          className="w-full py-2 text-center transition-all hover:bg-gray-100 active:bg-gray-100"
          to={"/about"}
          onClick={onClose}
        >
          Sleep Doctors
        </Link>
        <Link
          className="w-full py-2 text-center transition-all hover:bg-gray-100 active:bg-gray-100"
          to={"/projects"}
          onClick={onClose}
        >
          Services
        </Link>
        <Link
          className="w-full py-2 text-center transition-all hover:bg-gray-100 active:bg-gray-100"
          to={"/experiences"}
          onClick={onClose}
        >
          Sleep Disorders
        </Link>
        <Link
          className="w-full py-2 text-center transition-all hover:bg-gray-100 active:bg-gray-100"
          to={"/contact"}
          onClick={onClose}
        >
          Patient Portal
        </Link>
        <Link
          className="w-full py-2 text-center transition-all hover:bg-gray-100 active:bg-gray-100"
          to={"/contact"}
          onClick={onClose}
        >
          Forms
        </Link>
        <Link
          className="w-full py-2 text-center transition-all hover:bg-gray-100 active:bg-gray-100"
          to={"/contact"}
          onClick={onClose}
        >
          Contact
        </Link>
        <Link
          className="w-full py-2 text-center transition-all hover:bg-gray-100 active:bg-gray-100"
          to={"/contact"}
          onClick={onClose}
        >
          Directions
        </Link>
      </div>
    </div>
  );
};

export default Menu;
