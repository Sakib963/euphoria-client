import CartIcon from "../../../assets/icons/CartIcon";
import HeartIcon from "../../../assets/icons/HeartIcon";
import LoginIcon from "../../../assets/icons/LoginIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";
import logo from "../../../assets/images/euphoria-logo.svg";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <a>Shop</a>
      </li>
      <li>
        <a>Men</a>
      </li>
      <li>
        <a>Women</a>
      </li>
      <li>
        <a>Combos</a>
      </li>
      <li>
        <a>Jaggers</a>
      </li>
    </>
  );
  return (
    <div className="flex items-center justify-between lg:px-20 lg:py-8 bg-[#FFFFFF] text-black">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex gap-4 text-base">{navOptions}</ul>
      </div>
      <div className="flex justify-between items-center gap-14">
        <form className="flex items-center flex-row-reverse bg-[#F6F6F6] gap-3 py-2 px-5 rounded-lg">
          <input className="bg-[#F6F6F6] outline-none" type="text" name="search" />
          <button type="submit">
            <SearchIcon></SearchIcon>
          </button>
        </form>
        <div className="flex items-center gap-2">
          <div className="p-3 bg-[#F6F6F6] rounded-lg cursor-pointer">
            <HeartIcon></HeartIcon>
          </div>
          <div className="p-3 bg-[#F6F6F6] rounded-lg cursor-pointer">
            <LoginIcon></LoginIcon>
          </div>
          <div className="p-3 bg-[#F6F6F6] rounded-lg cursor-pointer">
            <CartIcon></CartIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
