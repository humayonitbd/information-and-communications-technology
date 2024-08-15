import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo/logo.png";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";


const Navbar = () => {

  return (
    <div className="w-11/12 mx-auto sticky top-0 z-50">
      <div className="bg-[#298f5a] flex justify-between items-center p-2">
        <div className="text-slate-100 text-xs">
          বাংলাদেশ জাতীয় তথ্য বাতায়ন
        </div>
        <div className="text-slate-100">
          {" "}
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-50 hover:text-[#fff]"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-50 hover:text-[#fff]"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-50 hover:text-[#fff]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-50 hover:text-[#fff]"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="navbar  border-b-2 bg-[#213D61] text-slate-50">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 bg-[#00a751f3] hover:bg-[#00a751b0] text-white rounded  transition-colors duration-300"
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
              className="menu menu-sm dropdown-content bg-[#213D61] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="mr-1 relative group">
                <span className="text-center cursor-pointer">
                  আমাদের সম্পর্কে
                </span>
                <ul className="bg-base-100 text-[#213D61] border  rounded z-20 p-2 absolute left-0 mt-8 hidden group-hover:block">
                  <div className="flex justify-between gap-5">
                    <div className="ml-1">
                      <p className="text-sm font-semibold">বিভাগ পরিচিতি</p>

                      <NavLink to={`/লিংক-পেজ/ইতিহাস`}>
                        <li className=" border-b-2 p-2">ইতিহাস</li>
                      </NavLink>
                      <NavLink to={`/লিংক-পেজ/মাননীয় উপদেষ্টা`}>
                        <li className=" border-b-2 p-2">মাননীয় উপদেষ্টা</li>
                      </NavLink>
                      <NavLink to={`/লিংক-পেজ/প্রধান কার্যাবলী`}>
                        <li className=" border-b-2 p-2"> প্রধান কার্যাবলী</li>
                      </NavLink>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">জনবল</p>
                      <NavLink to={`/লিংক-পেজ/কর্মকর্তাবৃন্দ`}>
                        <li className=" border-b-2 p-2"> কর্মকর্তাবৃন্দ</li>
                      </NavLink>
                      <NavLink to={`/লিংক-পেজ/কর্মবণ্টন`}>
                        <li className=" border-b-2 p-2"> কর্মবণ্টন</li>
                      </NavLink>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="mr-1 relative group">
                <span className="text-center cursor-pointer">
                  অধীনস্থ দপ্তর
                </span>
                <ul className="bg-base-100 z-20 text-[#213D61] border rounded  p-2 absolute left-0 mt-8 hidden group-hover:block">
                  <NavLink to={`/লিংক-পেজ/দপ্তর-অফিস-সংস্থার-তালিকা`}>
                    <li className=" border-b-2 p-2">
                      দপ্তর/অফিস/সংস্থার তালিকা
                    </li>
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
                      <p className="text-sm font-semibold">
                        উন্নয়ন প্রকল্পসমূহ
                      </p>

                      <NavLink to={`/লিংক-পেজ/চলমান প্রকল্প`}>
                        <li className=" border-b-2 p-2">চলমান প্রকল্প</li>
                      </NavLink>
                      <NavLink to={`/লিংক-পেজ/ক্রয় পরিকল্পনা`}>
                        <li className=" border-b-2 p-2">ক্রয় পরিকল্পনা</li>
                      </NavLink>
                      <NavLink to={`/লিংক-পেজ/সমাপ্ত প্রকল্পসমূহ`}>
                        <li className=" border-b-2 p-2"> সমাপ্ত প্রকল্পসমূহ</li>
                      </NavLink>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">কর্মসূচিসমূহ</p>
                      <NavLink to={`/লিংক-পেজ/সমাপ্ত কর্মসূচিসমূহ`}>
                        <li className=" border-b-2 p-2">
                          {" "}
                          সমাপ্ত কর্মসূচিসমূহ
                        </li>
                      </NavLink>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="mr-1 relative group">
                <span className="text-center cursor-pointer">গ্যালারি</span>
                <ul className="bg-base-100 z-20 text-[#213D61] border rounded  p-2 absolute left-0 mt-8 hidden group-hover:block">
                  <NavLink to={`/লিংক-পেজ/ফটো গ্যালারি`}>
                    <li className=" border-b-2 p-2"> ফটো গ্যালারি </li>
                  </NavLink>
                  <NavLink to={`/লিংক-পেজ/ভিডিও গ্যালারি`}>
                    <li className=" border-b-2 p-2">ভিডিও গ্যালারি</li>
                  </NavLink>
                </ul>
              </li>
              <li className="mr-1 relative group">
                <span className="text-center cursor-pointer">আইন নীতিমালা</span>
                <ul className="bg-base-100 z-20 text-[#213D61] border rounded  p-2 absolute left-0 mt-8 hidden group-hover:block">
                  <NavLink to={`/লিংক-পেজ/আইন ও বিধি`}>
                    <li className=" border-b-2 p-2">আইন ও বিধি</li>
                  </NavLink>
                  <NavLink to={`/লিংক-পেজ/নীতিমালা`}>
                    <li className=" border-b-2 p-2">নীতিমালা</li>
                  </NavLink>
                  <NavLink to={`/লিংক-পেজ/নির্দেশিকা ও কৌশলপত্র`}>
                    <li className=" border-b-2 p-2">নির্দেশিকা ও কৌশলপত্র</li>
                  </NavLink>
                  <NavLink to={`/লিংক-পেজ/খসড়া আইন-বিধি এবং নীতিমালা`}>
                    <li className=" border-b-2 p-2">
                      খসড়া আইন, বিধি এবং নীতিমালা
                    </li>
                  </NavLink>
                </ul>
              </li>
              <li className="mr-1 relative group">
                <span className="text-center cursor-pointer"> ই-সেবা</span>
                <ul className="bg-base-100 z-20 text-[#213D61] border rounded  p-2 absolute left-0 mt-8 hidden group-hover:block">
                  <NavLink to={`/লিংক-পেজ/ইনোভেশন ইনফরমেশন`}>
                    <li className=" border-b-2 p-2">ইনোভেশন ইনফরমেশন</li>
                  </NavLink>
                  <NavLink to={`/লিংক-পেজ/নৈমিত্তিক ছুটি ব্যবস্থাপনা`}>
                    <li className=" border-b-2 p-2">
                      নৈমিত্তিক ছুটি ব্যবস্থাপনা
                    </li>
                  </NavLink>
                  <NavLink to={`/লিংক-পেজ/স্মার্ট ড্যাশবোর্ড`}>
                    <li className=" border-b-2 p-2">স্মার্ট ড্যাশবোর্ড</li>
                  </NavLink>
                  <NavLink to={`/লিংক-পেজ/ফ্রিল্যান্সার আইডি`}>
                    <li className=" border-b-2 p-2">ফ্রিল্যান্সার আইডি</li>
                  </NavLink>
                  <NavLink to={`/লিংক-পেজ/ফেলোশিপ ও বৃত্তি`}>
                    <li className=" border-b-2 p-2">ফেলোশিপ ও বৃত্তি</li>
                  </NavLink>
                  <NavLink to={`/লিংক-পেজ/ই-নথি`}>
                    <li className=" border-b-2 p-2">ই-নথি</li>
                  </NavLink>
                  <NavLink to={`/লিংক-পেজ/ওয়েব মেইল`}>
                    <li className=" border-b-2 p-2">ওয়েব মেইল</li>
                  </NavLink>
                  <NavLink to={`/লিংক-পেজ/অনলাইনে বেতন দাখিল`}>
                    <li className=" border-b-2 p-2">অনলাইনে বেতন দাখিল</li>
                  </NavLink>
                  <NavLink to={`/লিংক-পেজ/আমার সরকার`}>
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

                      <NavLink to={`/লিংক-পেজ/অফিসের ঠিকানা`}>
                        <li className=" border-b-2 p-2">অফিসের ঠিকানা</li>
                      </NavLink>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">মতামত</p>
                      <NavLink to={`/লিংক-পেজ/আপনার জিজ্ঞাসা ও মতামত`}>
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
          <div className="mr-10">
            <NavLink to="/">
              <div className="flex justify-start items-center">
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

                    <NavLink to={`/লিংক-পেজ/ইতিহাস`}>
                      <li className=" border-b-2 p-2">ইতিহাস</li>
                    </NavLink>
                    <NavLink to={`/লিংক-পেজ/মাননীয় উপদেষ্টা`}>
                      <li className=" border-b-2 p-2">মাননীয় উপদেষ্টা</li>
                    </NavLink>
                    <NavLink to={`/লিংক-পেজ/প্রধান কার্যাবলী`}>
                      <li className=" border-b-2 p-2"> প্রধান কার্যাবলী</li>
                    </NavLink>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">জনবল</p>
                    <NavLink to={`/লিংক-পেজ/কর্মকর্তাবৃন্দ`}>
                      <li className=" border-b-2 p-2"> কর্মকর্তাবৃন্দ</li>
                    </NavLink>
                    <NavLink to={`/লিংক-পেজ/কর্মবণ্টন`}>
                      <li className=" border-b-2 p-2"> কর্মবণ্টন</li>
                    </NavLink>
                  </div>
                </div>
              </ul>
            </li>
            <li className="mr-1 relative group">
              <span className="text-center cursor-pointer">অধীনস্থ দপ্তর</span>
              <ul className="bg-base-100 z-20 text-[#213D61] border rounded  p-2 absolute left-0 mt-8 hidden group-hover:block">
                <NavLink to={`/লিংক-পেজ/দপ্তর-অফিস-সংস্থার-তালিকা`}>
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

                    <NavLink to={`/লিংক-পেজ/চলমান প্রকল্প`}>
                      <li className=" border-b-2 p-2">চলমান প্রকল্প</li>
                    </NavLink>
                    <NavLink to={`/লিংক-পেজ/ক্রয় পরিকল্পনা`}>
                      <li className=" border-b-2 p-2">ক্রয় পরিকল্পনা</li>
                    </NavLink>
                    <NavLink to={`/লিংক-পেজ/সমাপ্ত প্রকল্পসমূহ`}>
                      <li className=" border-b-2 p-2"> সমাপ্ত প্রকল্পসমূহ</li>
                    </NavLink>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">কর্মসূচিসমূহ</p>
                    <NavLink to={`/লিংক-পেজ/সমাপ্ত কর্মসূচিসমূহ`}>
                      <li className=" border-b-2 p-2"> সমাপ্ত কর্মসূচিসমূহ</li>
                    </NavLink>
                  </div>
                </div>
              </ul>
            </li>
            <li className="mr-1 relative group">
              <span className="text-center cursor-pointer">গ্যালারি</span>
              <ul className="bg-base-100 z-20 text-[#213D61] border rounded  p-2 absolute left-0 mt-8 hidden group-hover:block">
                <NavLink to={`/লিংক-পেজ/ফটো গ্যালারি`}>
                  <li className=" border-b-2 p-2"> ফটো গ্যালারি </li>
                </NavLink>
                <NavLink to={`/লিংক-পেজ/ভিডিও গ্যালারি`}>
                  <li className=" border-b-2 p-2">ভিডিও গ্যালারি</li>
                </NavLink>
              </ul>
            </li>
            <li className="mr-1 relative group">
              <span className="text-center cursor-pointer">আইন নীতিমালা</span>
              <ul className="bg-base-100 z-20 text-[#213D61] border rounded  p-2 absolute left-0 mt-8 hidden group-hover:block">
                <NavLink to={`/লিংক-পেজ/আইন ও বিধি`}>
                  <li className=" border-b-2 p-2">আইন ও বিধি</li>
                </NavLink>
                <NavLink to={`/লিংক-পেজ/নীতিমালা`}>
                  <li className=" border-b-2 p-2">নীতিমালা</li>
                </NavLink>
                <NavLink to={`/লিংক-পেজ/নির্দেশিকা ও কৌশলপত্র`}>
                  <li className=" border-b-2 p-2">নির্দেশিকা ও কৌশলপত্র</li>
                </NavLink>
                <NavLink to={`/লিংক-পেজ/খসড়া আইন-বিধি এবং নীতিমালা`}>
                  <li className=" border-b-2 p-2">
                    খসড়া আইন, বিধি এবং নীতিমালা
                  </li>
                </NavLink>
              </ul>
            </li>
            <li className="mr-1 relative group">
              <span className="text-center cursor-pointer"> ই-সেবা</span>
              <ul className="bg-base-100 z-20 text-[#213D61] border rounded  p-2 absolute left-0 mt-8 hidden group-hover:block">
                <NavLink to={`/লিংক-পেজ/ইনোভেশন ইনফরমেশন`}>
                  <li className=" border-b-2 p-2">ইনোভেশন ইনফরমেশন</li>
                </NavLink>
                <NavLink to={`/লিংক-পেজ/নৈমিত্তিক ছুটি ব্যবস্থাপনা`}>
                  <li className=" border-b-2 p-2">
                    নৈমিত্তিক ছুটি ব্যবস্থাপনা
                  </li>
                </NavLink>
                <NavLink to={`/লিংক-পেজ/স্মার্ট ড্যাশবোর্ড`}>
                  <li className=" border-b-2 p-2">স্মার্ট ড্যাশবোর্ড</li>
                </NavLink>
                <NavLink to={`/লিংক-পেজ/ফ্রিল্যান্সার আইডি`}>
                  <li className=" border-b-2 p-2">ফ্রিল্যান্সার আইডি</li>
                </NavLink>
                <NavLink to={`/লিংক-পেজ/ফেলোশিপ ও বৃত্তি`}>
                  <li className=" border-b-2 p-2">ফেলোশিপ ও বৃত্তি</li>
                </NavLink>
                <NavLink to={`/লিংক-পেজ/ই-নথি`}>
                  <li className=" border-b-2 p-2">ই-নথি</li>
                </NavLink>
                <NavLink to={`/লিংক-পেজ/ওয়েব মেইল`}>
                  <li className=" border-b-2 p-2">ওয়েব মেইল</li>
                </NavLink>
                <NavLink to={`/লিংক-পেজ/অনলাইনে বেতন দাখিল`}>
                  <li className=" border-b-2 p-2">অনলাইনে বেতন দাখিল</li>
                </NavLink>
                <NavLink to={`/লিংক-পেজ/আমার সরকার`}>
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

                    <NavLink to={`/লিংক-পেজ/অফিসের ঠিকানা`}>
                      <li className=" border-b-2 p-2">অফিসের ঠিকানা</li>
                    </NavLink>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">মতামত</p>
                    <NavLink to={`/লিংক-পেজ/আপনার জিজ্ঞাসা ও মতামত`}>
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
      </div>
    </div>
  );
};

export default Navbar;
