import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h4 className="text-sm text-center">
        Developed By {user.name} - {user.email}
      </h4>
    </div>
  );
};

export default Footer;
