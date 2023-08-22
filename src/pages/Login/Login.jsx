import { useState } from "react";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import HideIcon from "../../assets/icons/HIdeIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import LoginVector from "../../assets/vectors/LoginVector";
import ShowIcon from "../../assets/icons/ShowIcon";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1440px] mx-auto">
      <div className="order-2 lg:order-1 flex flex-col items-center justify-center w-full">
        <LoginVector width="100%"></LoginVector>
      </div>
      <div className="order-1 lg:order-2 w-full p-5 lg:p-16">
        <h1 className="text-3xl font-semibold text-[#333] mb-12">
          Sign In
        </h1>
        <button className="flex items-center justify-center gap-2 w-full md:w-1/2 mx-auto lg:w-full py-4 text-lg border-[1px] rounded-lg border-[#3C4242] mb-5">
          <GoogleIcon width={"24px"} />
          <p>Continue With Google</p>
        </button>
        <button className="flex items-center justify-center gap-2 w-full md:w-1/2 mx-auto lg:w-full py-4 text-lg border-[1px] rounded-lg border-[#3C4242] mb-12">
          <TwitterIcon width={"24px"} />
          <p>Continue With Twitter</p>
        </button>

        <div className="flex flex-nowrap items-center gap-6 mb-12">
          <div className="h-[2px] w-full bg-[#00000025]"></div>
          <p>OR</p>
          <div className="h-[2px] w-full bg-[#00000025]"></div>
        </div>

        <form onSubmit={handleForm} className="flex flex-col">
          <label className="mb-1" htmlFor="email">
            Email Address
          </label>
          <input
            className="border-[1px] rounded-lg border-[#3C4242] p-5 mb-7"
            type="email"
            name="email"
            required
          />

          <div className="flex items-center w-full justify-between mb-1">
            <label htmlFor="password">Password</label>
            <div onClick={()=>{setShowPassword(!showPassword)}} className="flex gap-1 items-center cursor-pointer">
            {showPassword ? (<HideIcon width={"20px"} />) : (<ShowIcon width={"20px"} />)}
              
              <p className="w-10 text-right select-none text-sm">{showPassword ? "Hide" : "Show"}</p>
            </div>
          </div>
          <input
            className="border-[1px] rounded-lg border-[#3C4242] p-5 mb-1"
            type={showPassword ? "text" : "password"}
            name="password"
            required
          />
          <p className="ml-auto mb-7 underline cursor-pointer">
            Forgot password?
          </p>

          <button
            className="bg-purple p-3 px-10 rounded-lg w-max text-[#fff] mb-3"
            type="submit"
          >
            Sign In
          </button>
          <p className="mb-7 cursor-pointer">
            Don&apos;t have an account?
            <Link to="/signup" className="ml-2 underline">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
