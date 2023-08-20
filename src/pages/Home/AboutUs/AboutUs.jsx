import Heading from "../../Shared/Heading/Heading";
import logo from "../../../assets/images/euphoria-logo.svg";
import GmailIcon from "../../../assets/icons/GmailIcon";
import CellIcon from "../../../assets/icons/CellIcon";
const AboutUs = () => {
  return (
    <div className="py-10 px-4 lg:px-10">
      <Heading title={"About Us"} />
      <div className="flex flex-col-reverse lg:flex-row gap-8 py-10 items-center">
        <div className="w-full lg:w-1/2">
          <img className="mb-4 w-40" src={logo} alt="logo" />
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel
            morbi cursus sed sodales molestie proin dictum gravida. Porttitor
            maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet
            convallis eu sed. Sapien et montes, duis tempor euismod augue cras
            eu eget. Risus suspendisse mauris ullamcorper felis a, quam. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi
            cursus sed sodales molestie proin dictum gravida. Porttitor maecenas
            tincidunt ipsum semper malesuada. In sapien feugiat laoreet
            convallis eu sed. Sapien et montes, duis tempor euismod augue cras
            eu eget. Risus suspendisse mauris ullamcorper felis a, quam.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi
            cursus sed sodales molestie proin dictum gravida. Porttitor maecenas
          </p>
          <p className="mt-4 font-bold mb-4">Contact Information</p>
          <p className="flex items-center gap-2 mb-2"><span><CellIcon/></span> +880 1700 000 000</p>
          <p className="flex items-center gap-2"><span><GmailIcon/></span> xyz@gmail.com</p>
        </div>
        <div className="w-full lg:w-1/2">
            <img className="w-full mt-auto" src="https://i.ibb.co/WynmcrK/shop-pic.png" alt="shop_pic" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
