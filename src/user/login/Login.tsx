import React, { useState } from "react";
import onboard from "../../assets/Onboarding 2 4.png";
import onboard2 from "../../assets/Continue with 1.png";
import { ChevronLeft, Mail, Facebook, Apple } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  password: string;
  otp: string;
  acceptPrivacy: boolean;
  acceptNewsletter: boolean;
}

interface PageProps {
  setCurrentPage: (page: string) => void;
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const WelcomePage: React.FC<PageProps> = ({ setCurrentPage }) => (
  <div className="min-h-screen  flex flex-col md:flex-col lg:flex-row animate-fadeIn max-w-[1400px] lg:gap-[2rem] h-[400px] mx-auto lg:p-[50px]">
    <img
      src={onboard2}
      alt=""
      className="lg:w-[700px] height-[700px] object-fit"
    />

    <div className="bg-white rounded-t-3xl px-6 py-8 space-y-6 animate-slideUp lg:mt-[14rem]">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
        Let's Get That Onboard
        <br />
        Feeling!
      </h1>

      <div className="space-y-3">
        <button className="w-full bg-white border-2 border-gray-200 rounded-2xl py-4 px-6 flex items-center justify-center gap-3 hover:border-[#1CB5C5] transition-all duration-300 transform hover:scale-105 active:scale-95">
          <Facebook className="w-6 h-6 text-[#1877F2]" fill="#1877F2" />
          <span className="font-semibold text-gray-700">
            Continue with Facebook
          </span>
        </button>

        <button className="w-full bg-white border-2 border-gray-200 rounded-2xl py-4 px-6 flex items-center justify-center gap-3 hover:border-[#1CB5C5] transition-all duration-300 transform hover:scale-105 active:scale-95">
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="font-semibold text-gray-700">
            Continue with Google
          </span>
        </button>

        <button className="w-full bg-white border-2 border-gray-200 rounded-2xl py-4 px-6 flex items-center justify-center gap-3 hover:border-[#1CB5C5] transition-all duration-300 transform hover:scale-105 active:scale-95">
          <Apple className="w-6 h-6" />
          <span className="font-semibold text-gray-700">
            Continue with Apple
          </span>
        </button>

        <button
          onClick={() => setCurrentPage("signin")}
          className="w-full bg-[#1CB5C5] rounded-2xl py-4 px-6 flex items-center justify-center gap-3 hover:bg-[#0EA5B5] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
        >
          <Mail className="w-6 h-6 text-white" />
          <span className="font-semibold text-white">Continue with Email</span>
        </button>
      </div>

      <p className="text-center text-sm text-gray-600">
        By continuing you agree to our{" "}
        <span className="text-[#1CB5C5] font-medium">Terms</span> and{" "}
        <span className="text-[#1CB5C5] font-medium">Conditions</span>
      </p>
    </div>
  </div>
);

const ServiceAgreement: React.FC<PageProps> = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-gray-50 animate-fadeIn">
    <div className="bg-white border-b">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
        <button
          onClick={() => setCurrentPage("adventure")}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-semibold">Service Agreement</h2>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 animate-slideUp">
      <div>
        <h1 className="text-2xl font-bold text-[#1CB5C5] mb-2">
          Triluxy service agreement
        </h1>
        <p className="text-gray-600">
          Kindly read through and accept the service agreement.
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            <div className="w-6 h-6 rounded-full border-2 border-yellow-600 flex items-center justify-center">
              <span className="text-yellow-600 font-bold text-sm">!</span>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Important</h3>
            <p className="text-sm text-gray-700">
              Please ensure that the information you provide DO NOT ACCEPT THIS
              AGREEMENT IF YOUR DETAILS ARE INCORRECT.
            </p>
            <p className="text-sm text-gray-700 mt-2">
              If you have already signed a Service Agreement, you can ignore
              this screen.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
        <div>
          <h3 className="font-bold text-lg mb-3">Service Agreement</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Accept Agreement</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?
          </p>
          <p className="text-sm text-gray-900 font-medium">
            By signing this agreement, I am accepting this agreement on behalf
            of TRILUXY, which I represent and warrant that
          </p>
          <p className="text-sm text-gray-700 mt-2">
            (a) I have the full authority to bind the entity to this Agreement,
          </p>
          <p className="text-sm text-gray-700 mt-1">
            (b) I have read and understand this Agreement, and (c) I agree to
            all the terms and conditions of this Agreement on behalf of the
            entity that I represent.
          </p>
        </div>
      </div>

      <button
        onClick={() => setCurrentPage("signup")}
        className="w-full bg-[#1CB5C5] text-white font-semibold py-4 rounded-2xl hover:bg-[#0EA5B5] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
      >
        Next
      </button>
    </div>
  </div>
);

const SignUpPage: React.FC<PageProps> = ({
  setCurrentPage,
  formData,
  handleInputChange,
}) => (
  <div className="min-h-screen  flex flex-col lg:flex-row animate-fadeIn max-w-[1400px]  mx-auto h-[400px] gap-[2rem] lg:p-[50px]">
    <img src={onboard2} alt="" className="w-[600px] h-[700px] mx-auto" />

    <div className="bg-white rounded-t-3xl px-6 py-8 space-y-6 animate-slideUp">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Sign Up</h1>
        <p className="text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => setCurrentPage("signin")}
            className="text-[#1CB5C5] font-semibold hover:underline"
          >
            Login
          </button>
        </p>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name ex: Stella Nova"
          className="w-full border-2 border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#1CB5C5] transition-colors"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email ex: stellanova@gmail.com"
          className="w-full border-2 border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#1CB5C5] transition-colors"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password ex: Qwerty 123"
          className="w-full border-2 border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#1CB5C5] transition-colors"
        />

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="acceptPrivacy"
            checked={formData.acceptPrivacy}
            onChange={handleInputChange}
            className="mt-1 w-5 h-5 rounded border-2 border-gray-300 text-[#1CB5C5] focus:ring-[#1CB5C5]"
          />
          <span className="text-sm text-gray-700">
            I agree and accept Triluxy's Privacy Policy
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="acceptNewsletter"
            checked={formData.acceptNewsletter}
            onChange={handleInputChange}
            className="mt-1 w-5 h-5 rounded border-2 border-gray-300 text-[#1CB5C5] focus:ring-[#1CB5C5]"
          />
          <span className="text-sm text-gray-700">
            I would love to receive newsletters and other promotional materials.
          </span>
        </label>
      </div>

      <button
        onClick={() => setCurrentPage("confirmation")}
        className="w-full bg-[#1CB5C5] text-white font-semibold py-4 rounded-2xl hover:bg-[#0EA5B5] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
      >
        Sign Up
      </button>

      <button className="w-full text-gray-600 font-medium hover:text-gray-800 transition-colors">
        Forget your password?
      </button>
    </div>
  </div>
);

const ConfirmationPage: React.FC<PageProps> = ({
  setCurrentPage,
  formData,
  handleInputChange,
}) => (
  <div className="min-h-screen  flex flex-col lg:flex-row animate-fadeIn max-w-[1400px]  mx-auto h-[400px] gap-[2rem] lg:p-[50px]">
    <img
      src={onboard2}
      alt=""
      className="max-w-[600px] max-h-[700px] w-full mx-auto "
    />

    <div className="bg-white rounded-t-3xl px-6 py-8 space-y-6 animate-slideUp lg:mt-[12rem]">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Confirmation Code
        </h1>
        <p className="text-[#1CB5C5] font-medium">Enter Verification code</p>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          name="otp"
          value={formData.otp}
          onChange={handleInputChange}
          placeholder="OTP ex: 123456"
          className="w-full border-2 border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#1CB5C5] transition-colors text-center text-xl tracking-widest"
          maxLength={6}
        />
      </div>

      <button
        onClick={() => setCurrentPage("signin")}
        className="w-full bg-[#1CB5C5] text-white font-semibold py-4 rounded-2xl hover:bg-[#0EA5B5] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
      >
        Verify confirmation code
      </button>
    </div>
  </div>
);

const SignInPage: React.FC<PageProps> = ({
  setCurrentPage,
  formData,
  handleInputChange,
}) => (
  <div className="min-h-screen  flex flex-col lg:flex-row animate-fadeIn max-w-[1400px]  mx-auto h-[400px] gap-[2rem] lg:p-[50px]">
    <img src={onboard2} alt="" className="w-[700px] h-[700px]" />

    <div className="">
      <button
        onClick={() => setCurrentPage("welcome")}
        className="p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
    </div>

    <div className="bg-white rounded-t-3xl px-6 py-8 space-y-6 animate-slideUp max-w-[700px] lg:w-[600px] lg:mt-[7rem]">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Sign In</h1>
        <p className="text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => setCurrentPage("signup")}
            className="text-[#1CB5C5] font-semibold hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>

      <div className="space-y-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email ex: stellanova@gmail.com"
          className="w-full border-2 border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#1CB5C5] transition-colors"
        />

        <div className="relative">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password ex: Qwerty 123"
            className="w-full border-2 border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#1CB5C5] transition-colors"
          />
        </div>
      </div>

      <button
        onClick={() => alert("Sign In Successful!")}
        className="w-full bg-[#1CB5C5] text-white font-semibold py-4 rounded-2xl hover:bg-[#0EA5B5] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
      >
        Sign In
      </button>
      <button className=" text-gray-400 hover:text-gray-600 text-sm">
        Forgot Password?
      </button>
      <button className="w-full text-gray-600 font-medium hover:text-gray-800 transition-colors">
        Skip for now
      </button>
    </div>
  </div>
);

const AdventurePage: React.FC<PageProps> = ({ setCurrentPage }) => (
  <div className="min-h-screen  flex flex-col lg:flex-row animate-fadeIn max-w-[1400px] h-[400px] mx-auto lg:p-[50px]">
    <img src={onboard} alt="" className="" />
    <div className="flex-1 flex items-center justify-center px-4 pt-8">
      <div className="relative w-full max-w-sm"></div>
    </div>

    <div className="bg-white rounded-t-3xl  px-6 py-8 space-y-6 animate-slideUp lg:mt-[18rem]">
      <div className="text-center space-y-3">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#002D3C]">
          Exciting Adventures
          <br />
          Waiting for you
        </h1>
        <p className="text-[#002D3C] font-semibold ">
          Lots of flights to various destinations and experience around the
          world.
        </p>
      </div>

      <button
        onClick={() => setCurrentPage("terms")}
        className="w-full bg-[#1BC1DC] text-[#FFFFFF] font-semibold py-4 rounded-2xl hover:bg-[#0EA5B5] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
      >
        Get Started
      </button>

      <p className="text-center text-[#000000] font-medium">
        Already have an account?{" "}
        <button
          onClick={() => setCurrentPage("welcome")}
          className="text-[#002D3C] font-bold hover:underline"
        >
          Login
        </button>
      </p>
    </div>
  </div>
);

const Login: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("adventure");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    otp: "",
    acceptPrivacy: false,
    acceptNewsletter: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const pageProps: PageProps = {
    setCurrentPage,
    formData,
    handleInputChange,
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {currentPage === "welcome" && <WelcomePage {...pageProps} />}
      {currentPage === "terms" && <ServiceAgreement {...pageProps} />}
      {currentPage === "signup" && <SignUpPage {...pageProps} />}
      {currentPage === "confirmation" && <ConfirmationPage {...pageProps} />}
      {currentPage === "signin" && <SignInPage {...pageProps} />}
      {currentPage === "adventure" && <AdventurePage {...pageProps} />}
    </>
  );
};

export default Login;
