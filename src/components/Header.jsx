import Location from "./Location";
import Search from "./Search";
import Settings from "./Settings";
import "../style.css";

export default function Header() {
  return (
    <div id="header" className="bg-dark text-light">
      <div className="container position-relative d-flex justify-content-between align-items-center py-3">
        <Location />
        <div className="search-center">
          <Search />
        </div>
        <Settings />
      </div>
    </div>
  );
}
