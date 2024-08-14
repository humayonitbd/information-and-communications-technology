import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#162B45] text-slate-50 py-8 w-full md:w-11/12 mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* About Section */}
        <div className="mb-6 md:mb-0 w-full md:w-2/4 md:pr-5">
          <h3 className="text-2xl font-bold mb-4">আমাদের সম্পর্কে</h3>
          <p className="text-sm">
            আমরা একটি উদ্ভাবনী প্রতিষ্ঠান যা প্রযুক্তির সর্বশেষ প্রবণতাগুলি
            ব্যবহার করে আপনার ডিজিটাল অভিজ্ঞতাকে আরও উন্নত করতে প্রতিশ্রুতিবদ্ধ।
            আমাদের বিশেষজ্ঞ দল গবেষণা এবং উন্নয়ন, ডিজাইন এবং প্রযুক্তি
            সংক্রান্ত সেবা প্রদান করে, যাতে আমরা আপনার ব্যবসায়িক চাহিদা পূরণে
            সহায়ক হতে পারি।
          </p>
          <p className="text-sm mt-2">
            আমাদের মিশন হল গুণগত মানসম্পন্ন সেবা এবং সমাধান প্রদান করা যা আপনার
            প্রয়োজনীয়তাকে পূরণ করবে এবং আপনার লক্ষ্য অর্জনে সহায়তা করবে। আমরা
            প্রযুক্তির নতুন নতুন ক্ষেত্র যেমন কৃত্রিম বুদ্ধিমত্তা, মেশিন
            লার্নিং, এবং ক্লাউড কম্পিউটিং এ বিশেষজ্ঞ এবং আমাদের ক্লায়েন্টদের
            সর্বোত্তম সেবা প্রদানের জন্য প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mb-6 md:mb-0 w-full md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">অন্যান্য লিঙ্ক</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://cabinet.gov.bd/"
                target="_blank"
                className="hover:underline"
              >
                মন্ত্রিপরিষদ বিভাগ
              </a>
            </li>
            <li>
              <a
                href="https://a2i.gov.bd/"
                target="_blank"
                className="hover:underline"
              >
                এটুআই
              </a>
            </li>
            <li>
              <a
                href="https://www.bcc.gov.bd/"
                target="_blank"
                className="hover:underline"
              >
                বিসিসি
              </a>
            </li>
            <li>
              <a
                href="https://doict.gov.bd/"
                target="_blank"
                className="hover:underline"
              >
                ডিওআইসিটি ও বেসিস
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="mb-6 md:mb-0 w-full md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">যোগাযোগ</h3>
          <p className="text-sm">১২৩৪ স্ট্রীট নাম, শহর, দেশ</p>
          <p className="text-sm">
            ইমেইল:{" "}
            <a href="mailto:info@example.com" className="hover:underline">
              info@example.com
            </a>
          </p>
          <p className="text-sm">ফোন: +১ (২৩৪) ৫৬৭-৮৯০</p>
        </div>

        {/* Social Media Links */}
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">আমাদের অনুসরণ করুন</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-50 hover:text-blue-600"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-50 hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-50 hover:text-pink-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-50 hover:text-blue-700"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t border-slate-600 mt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} আপনার কোম্পানি। সমস্ত অধিকার
          সংরক্ষিত।
        </p>
      </div>
    </footer>
  );
};

export default Footer;
