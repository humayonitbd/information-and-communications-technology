import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar w-11/12 mx-auto border-b-2 bg-[#213D61] text-slate-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 bg-gradient-to-r from-[#76AE42] to-[#AFD136] text-white rounded hover:from-[#AFD136] hover:to-[#76AE42] transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="mr-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium text-base text-slate-700  rounded-none border-b-2 border-[#76AE42]"
                      : "font-medium text-base text-slate-700 btn-none "
                  }
                  to="/"
                >
                  আমাদের সম্পর্কে
                </NavLink>
              </li>
              <li className="mr-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium text-base text-slate-700 rounded-none border-b-2 border-[#76AE42]"
                      : "font-medium text-base text-slate-700 btn-none"
                  }
                  to="/product-category-management"
                >
                  Product Management
                </NavLink>
              </li>
              <li className="mr-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-medium text-base text-slate-700 rounded-none border-b-2 border-[#76AE42]"
                      : "font-medium text-base text-slate-700 btn-none"
                  }
                  to="/all-product-list"
                >
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/">
            <div className="flex justify-start">
              <img className="w-10 h-10" src={logo} alt="logo" />
              <div className="ml-2">
                <h3 className="text-sm font-semibold">
                  তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ
                </h3>
                <p className="text-sm">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</p>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            
            <li className="mr-1 relative group">
              <span className="text-center cursor-pointer">
                আমাদের সম্পর্কে
              </span>
              <ul className="bg-base-100 text-[#213D61] border  rounded z-20 p-2 absolute left-0 mt-8 hidden group-hover:block">
                <div className="flex justify-between gap-5">
                  <div className="ml-1">
                    <p className="text-sm font-semibold">বিভাগ পরিচিতি</p>

                    <NavLink to="">
                      <li className=" border-b-2 p-2">ইতিহাস</li>
                    </NavLink>
                    <NavLink to="">
                      <li className=" border-b-2 p-2">মাননীয় উপদেষ্টা</li>
                    </NavLink>
                    <NavLink to="">
                      <li className=" border-b-2 p-2"> প্রধান কার্যাবলী</li>
                    </NavLink>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">জনবল</p>
                    <NavLink to="">
                      <li className=" border-b-2 p-2"> কর্মকর্তাবৃন্দ</li>
                    </NavLink>
                    <NavLink to="">
                      <li className=" border-b-2 p-2"> কর্মবণ্টন</li>
                    </NavLink>
                  </div>
                </div>
              </ul>
            </li>
            <li className="mr-1 relative group">
              <span className="text-center cursor-pointer">অধীনস্থ দপ্তর</span>
              <ul className="bg-base-100 z-20 text-[#213D61] border rounded  p-2 absolute left-0 mt-8 hidden group-hover:block">
                <NavLink to="">
                  <li className=" border-b-2 p-2">দপ্তর/অফিস/সংস্থার তালিকা</li>
                </NavLink>
              </ul>
            </li>
            <li className="mr-1 relative group">
              <span className="text-center cursor-pointer">
                প্রকল্প কর্মসূচি
              </span>
              <ul className="bg-base-100 z-20  text-[#213D61] border rounded  p-2 absolute left-0 mt-8 hidden group-hover:block">
                <div className="flex justify-between gap-5">
                  <div className="ml-1">
                    <p className="text-sm font-semibold">উন্নয়ন প্রকল্পসমূহ</p>

                    <NavLink to="">
                      <li className=" border-b-2 p-2">চলমান প্রকল্প</li>
                    </NavLink>
                    <NavLink to="">
                      <li className=" border-b-2 p-2">ক্রয় পরিকল্পনা</li>
                    </NavLink>
                    <NavLink to="">
                      <li className=" border-b-2 p-2"> সমাপ্ত প্রকল্পসমূহ</li>
                    </NavLink>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">কর্মসূচিসমূহ</p>
                    <NavLink to="">
                      <li className=" border-b-2 p-2"> সমাপ্ত কর্মসূচিসমূহ</li>
                    </NavLink>
                  </div>
                </div>
              </ul>
            </li>
            <li className="mr-1 relative group">
              <span className="text-center cursor-pointer">গ্যালারি</span>
              <ul className="bg-base-100 z-20 text-[#213D61] border rounded  p-2 absolute left-0 mt-8 hidden group-hover:block">
                <NavLink to="">
                  <li className=" border-b-2 p-2"> ফটো গ্যালারি </li>
                </NavLink>
                <NavLink to="">
                  <li className=" border-b-2 p-2">ভিডিও গ্যালারি</li>
                </NavLink>
              </ul>
            </li>
            <li className="mr-1 relative group">
              <span className="text-center cursor-pointer">আইন নীতিমালা</span>
              <ul className="bg-base-100 z-20 text-[#213D61] border rounded  p-2 absolute left-0 mt-8 hidden group-hover:block">
                <NavLink to="">
                  <li className=" border-b-2 p-2">আইন ও বিধি</li>
                </NavLink>
                <NavLink to="">
                  <li className=" border-b-2 p-2">নীতিমালা</li>
                </NavLink>
                <NavLink to="">
                  <li className=" border-b-2 p-2">নির্দেশিকা ও কৌশলপত্র</li>
                </NavLink>
                <NavLink to="">
                  <li className=" border-b-2 p-2">
                    খসড়া আইন, বিধি এবং নীতিমালা
                  </li>
                </NavLink>
              </ul>
            </li>
            <li className="mr-1 relative group">
              <span className="text-center cursor-pointer"> ই-সেবা</span>
              <ul className="bg-base-100 z-20 text-[#213D61] border rounded  p-2 absolute left-0 mt-8 hidden group-hover:block">
                <NavLink to="">
                  <li className=" border-b-2 p-2">ইনোভেশন ইনফরমেশন</li>
                </NavLink>
                <NavLink to="">
                  <li className=" border-b-2 p-2">
                    নৈমিত্তিক ছুটি ব্যবস্থাপনা
                  </li>
                </NavLink>
                <NavLink to="">
                  <li className=" border-b-2 p-2">স্মার্ট ড্যাশবোর্ড</li>
                </NavLink>
                <NavLink to="">
                  <li className=" border-b-2 p-2">ফ্রিল্যান্সার আইডি</li>
                </NavLink>
                <NavLink to="">
                  <li className=" border-b-2 p-2">ফেলোশিপ ও বৃত্তি</li>
                </NavLink>
                <NavLink to="">
                  <li className=" border-b-2 p-2">ই-নথি</li>
                </NavLink>
                <NavLink to="">
                  <li className=" border-b-2 p-2">ওয়েব মেইল</li>
                </NavLink>
                <NavLink to="">
                  <li className=" border-b-2 p-2">অনলাইনে বেতন দাখিল</li>
                </NavLink>
                <NavLink to="">
                  <li className=" border-b-2 p-2">আমার সরকার</li>
                </NavLink>
              </ul>
            </li>

            <li className="mr-1 relative group">
              <span className="text-center cursor-pointer">
                যোগাযোগ ও মতামত
              </span>
              <ul className="bg-base-100 z-20 text-[#213D61] border rounded  p-2 absolute left-0 mt-8 hidden group-hover:block">
                <div className="flex justify-between gap-5">
                  <div className="ml-1">
                    <p className="text-sm font-semibold">যোগাযোগ</p>

                    <NavLink to="">
                      <li className=" border-b-2 p-2">অফিসের ঠিকানা</li>
                    </NavLink>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">মতামত</p>
                    <NavLink to="">
                      <li className=" border-b-2 p-2">
                        আপনার জিজ্ঞাসা ও মতামত
                      </li>
                    </NavLink>
                  </div>
                </div>
              </ul>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="indicator">
            <NavLink to="">
              <button className="text-base btn bg-[#00a751f3] hover:bg-[#00a751b0] border-none text-slate-100">
                Login
              </button>
            </NavLink>
          </div>

          <label htmlFor="my-drawer-2" className=" lg:hidden ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 bg-gradient-to-r from-[#76AE42] to-[#AFD136] text-white rounded hover:from-[#AFD136] hover:to-[#76AE42] transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
