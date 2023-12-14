import { Logo } from "./Icons";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="block w-full justify-between items-center px-10 bg-gray-800">
      <div className="flex flex-wrap items-center justify-between p-2 ">
        <Logo className="mr-4 ml-2 sm:px-6 lg:px-8" />
        <SearchBar />
      </div>
    </nav>
  );
};

export default NavBar;
