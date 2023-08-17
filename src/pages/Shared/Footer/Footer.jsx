import AppStore from "../../../assets/icons/AppStore";
import FacebookIcon from "../../../assets/icons/FacebookIcon";
import GooglePlay from "../../../assets/icons/GooglePlay";
import InstagramIcon from "../../../assets/icons/InstagramIcon";
import LinkedinLogo from "../../../assets/icons/LinkedinLogo";
import TwitterLogo from "../../../assets/icons/TwitterLogo";

const Footer = () => {
  return (
    <div className="bg-[#3C4242] py-10 px-10 lg:px-0 text-[#F6F6F6] text-sm space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:w-3/4 mx-auto">
        {/* Need Help Footer Section */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold">Need Help</h3>
          <ul className="space-y-2">
            <li className="hover:cursor-pointer hover:underline">Contact Us</li>
            <li className="hover:cursor-pointer hover:underline">
              Track Order
            </li>
            <li className="hover:cursor-pointer hover:underline">
              Returns & Refunds
            </li>
            <li className="hover:cursor-pointer hover:underline">Faq&apos;s</li>
            <li className="hover:cursor-pointer hover:underline">Career</li>
          </ul>
        </div>
        {/* Company Footer Section */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold">Company</h3>
          <ul className="space-y-2">
            <li className="hover:cursor-pointer hover:underline">About Us</li>
            <li className="hover:cursor-pointer hover:underline">
              Euphoria Blog
            </li>
            <li className="hover:cursor-pointer hover:underline">
              euphoriastan
            </li>
            <li className="hover:cursor-pointer hover:underline">
              Collaboration
            </li>
            <li className="hover:cursor-pointer hover:underline">Media</li>
          </ul>
        </div>
        {/* Need Help Footer Section */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold">More Info</h3>
          <ul className="space-y-2">
            <li className="hover:cursor-pointer hover:underline">
              Terms & Conditions
            </li>
            <li className="hover:cursor-pointer hover:underline">
              Privacy Policy
            </li>
            <li className="hover:cursor-pointer hover:underline">
              Shipping Policy
            </li>
            <li className="hover:cursor-pointer hover:underline">Sitemap</li>
          </ul>
        </div>
        {/* Need Help Footer Section */}
        <div className="space-y-3 lg:col-span-2">
          <h3 className="text-xl font-bold">Location</h3>
          <ul className="space-y-2">
            <li className="hover:cursor-pointer hover:underline">
              support@euphoria.in
            </li>
            <li>Eklingpura Chouraha, Ahmedabad Main Road</li>
            <li>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</li>
          </ul>
        </div>
      </div>

      <div className="lg:w-3/4 mx-auto pt-10 lg:flex justify-between items-center space-y-4">
        <div className="flex gap-3">
          <FacebookIcon/>
          <InstagramIcon />
          <TwitterLogo />
          <LinkedinLogo />
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Download The App</h2>
          <div className="flex gap-3">
          <GooglePlay/>
          <AppStore/>
          </div>
        </div>
      </div>

      {/* CopyRight Message */}
      <p className="text-center pt-10 text-base">
        Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
