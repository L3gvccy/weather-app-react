import Location from "./Location";
import Search from "./Search";
import Settings from "./settings";

export default function Header() {
  return (
    <div id="header" className="bg-dark text-light">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <Location />
        <Search />
        <Settings />
      </div>
    </div>
  );
}
