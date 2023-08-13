import CartIcon from "../../../assets/icons/CartIcon";
import CloseIcon from "../../../assets/icons/CloseIcon";
import HamburgerIcon from "../../../assets/icons/HamburgerIcon";
import HeartIcon from "../../../assets/icons/HeartIcon";
import LoginIcon from "../../../assets/icons/LoginIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";
import logo from "../../../assets/images/euphoria-logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const searchKey = (event) =>{
    event.preventDefault();
    console.log(event.target.search.value);
  }
  const navOptions = (
    <>
      <li className="hover:text-black">
        <a>Shop</a>
      </li>
      <li className="hover:text-black">
        <a>Men</a>
      </li>
      <li className="hover:text-black">
        <a>Women</a>
      </li>
      <li className="hover:text-black">
        <a>Combos</a>
      </li>
      <li className="hover:text-black">
        <a>Jaggers</a>
      </li>
    </>
  );

  const navButtons = (
    <>
      <div className="p-2 lg:p-3 bg-[#F6F6F6] hover:bg-[#F1F1F1] rounded-lg cursor-pointer">
        <HeartIcon></HeartIcon>
      </div>
      <div className="p-2 lg:p-3 bg-[#F6F6F6] hover:bg-[#F1F1F1] rounded-lg cursor-pointer">
        <LoginIcon></LoginIcon>
      </div>
      <div className="p-2 lg:p-3 bg-[#F6F6F6] hover:bg-[#F1F1F1] rounded-lg cursor-pointer">
        <CartIcon></CartIcon>
      </div>
    </>
  );
  return (
    <div className="flex items-center justify-between px-4 py-2 lg:px-20 lg:py-4 bg-[#FFFFFF] text-black fixed left-0 right-0">
      <img className="w-16 lg:w-[90px] mr-4" src={logo} alt="logo" />
      <ul className="hidden md:flex gap-4 text-gray cursor-pointer text-xs lg:text-sm">
        {navOptions}
      </ul>
      <div className="flex justify-between items-center gap-8">
        <form onSubmit={searchKey} className="flex items-center flex-row-reverse bg-[#F6F6F6] gap-3 py-2 px-2 lg:px-5 rounded-lg">
          <input
            className="bg-[#F6F6F6] w-32 lg:w-48 outline-none"
            type="text"
            name="search"
          />
          <button type="submit">
            <SearchIcon></SearchIcon>
          </button>
        </form>
        <div className="hidden lg:flex items-center gap-2">{navButtons}</div>
        <div
          onClick={() => {
            setMenu(!menu);
          }}
          className="block lg:hidden p-2 bg-[#F6F6F6] hover:bg-[#F1F1F1] rounded-lg cursor-pointer"
        >
          {menu ? <CloseIcon></CloseIcon> : <HamburgerIcon></HamburgerIcon>}
          {/* hamburger expand */}
          <div
            className={`${
              menu ? "fixed" : "hidden"
            } right-4 top-[60px] bg-[#F6F6F6] p-4 rounded-lg shadow-lg`}
          >
            <ul className="flex md:hidden flex-col gap-4 text-gray cursor-pointer text-xs lg:text-sm text-center mb-4">
              {navOptions}
            </ul>
            <div className="flex gap-2">{navButtons}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
