import { useContext } from "react";
import AlertContext from "../../../context/Alert/AlertContext";

const Alert = () => {
  const { alert: state } = useContext(AlertContext);

  if (state) {
    return (
      <div>
        <p className="flex items-start mb-4 space-x-2">
          {state.type}: {state.msg}
        </p>
      </div>
    );
  }
};

export default Alert;
