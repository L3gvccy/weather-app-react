import { PuffLoader } from "react-spinners";
import "../style.css";

export default function Loader() {
  return (
    <div className="loader-container">
      <PuffLoader size={100} color="#0cf7e1" />
    </div>
  );
}
