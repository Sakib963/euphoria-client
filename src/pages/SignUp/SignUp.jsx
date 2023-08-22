import { useState } from "react";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import HideIcon from "../../assets/icons/HIdeIcon";
import TwitterIcon from "../../assets/icons/TwitterIcon";
import ShowIcon from "../../assets/icons/ShowIcon";
import { Link } from "react-router-dom";
import SignUpVector from "../../assets/vectors/SignUpVector";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleForm = (event) => {
      event.preventDefault();
      const username = event.target.username.value;
      const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(username, email, password);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;

    const hasMinLength = newPassword.length >= 8;
    const hasNumber = /[0-9]/.test(newPassword);
    const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/\-="']/.test(
      newPassword
    );
    const hasUpperCase = /[A-Z]/.test(newPassword);

    setIsPasswordValid(
      hasMinLength && hasNumber && hasSpecialChar && hasUpperCase
    );
    setPassword(newPassword);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1440px] mx-auto">
      <div className="order-2 lg:order-1 flex flex-col items-center justify-center w-full pl-5 lg:pl-10">
        <SignUpVector width="100%" />
      </div>
      <div className="order-1 lg:order-2 w-full p-5 lg:p-16">
        <h1 className="text-3xl font-semibold text-[#333] mb-2">Sign Up</h1>
        <p className="text-sm text-[#33333380] mb-12">
          Sign Up for free access to our products
        </p>
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
          <label className="mb-1" htmlFor="username">
            Username
          </label>
          <input
            className="border-[1px] rounded-lg border-[#3C4242] p-5 mb-7"
            type="text"
            name="username"
            required
          />
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
            <div
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="flex gap-1 items-center cursor-pointer"
            >
              {showPassword ? (
                <HideIcon width={"20px"} />
              ) : (
                <ShowIcon width={"20px"} />
              )}

              <p className="w-10 text-right select-none text-sm">
                {showPassword ? "Hide" : "Show"}
              </p>
            </div>
          </div>
          <input
            className={`border-[1px] rounded-lg border-[#3C4242] p-5 mb-1 ${
              isPasswordValid ? "" : "border-red-500"
            }`}
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {password.length === 0 ? (
            <p className="mt-2 mb-7 text-xs">
              Password must contain 8 characters including at least 1 special
              character, 1 number, 1 capital letter, and 1 small letter.
            </p>
          ) : (
            <p
              className={`mt-2 mb-7 text-xs ${
                isPasswordValid ? "text-[green]" : "text-[red]"
              }`}
            >
              {isPasswordValid
                ? "Password meets the criteria."
                : "Password must have at least 8 characters, including 1 number, 1 special character, and 1 capital letter."}
            </p>
          )}

          <p className="text-sm">
            <input
              className="mr-2 mb-4"
              required
              type="checkbox"
              name="terms_policy"
            />
            Agree to our <span className="underline">Terms</span> of use and{" "}
            <span className="underline">Privacy Policy</span>
          </p>
          <p className="text-sm">
            <input className="mr-2 mb-8" type="checkbox" name="terms_policy" />
            Subscribe to our monthly newsletter
          </p>
          <button
            className="bg-purple p-3 px-10 rounded-lg w-max text-[#fff] mb-3"
            type="submit"
          >
            Sign In
          </button>
          <p className="mb-7 cursor-pointer">
            Already have an account?
            <Link to="/login" className="ml-2 underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
