import { FaAngleRight } from "react-icons/fa6";
import {NavLink} from "react-router-dom";

const OurService = () => {
    const services = [
      {
        id: 1,
        subject: "আমাদের বিষয়ে",
        details: [
          {
            id: 1,
            title: "ভিশন ও মিশন",
          },
          {
            id: 2,
            title: "সাংগঠনিক কাঠামো",
          },
          {
            id: 3,
            title: "কর্মকর্তা-কর্মচারী",
          },
        ],
      },
      {
        id: 2,
        subject: "বিজ্ঞপ্তি/আদেশ/পরিপত্র",
        details: [
          {
            id: 1,
            title: "প্রজ্ঞাপন-পরিপত্র",
          },
          {
            id: 2,
            title: "অফিস আদেশ-বিদেশ ভ্রমণের জিও-পাসপোর্ট অনাপত্তিপত্র",
          },
          {
            id: 3,
            title: "সংবাদ বিজ্ঞপ্তি",
          },
        ],
      },
      {
        id: 3,
        subject: "নীতিমালা ও প্রকাশনা",
        details: [
          {
            id: 1,
            title: "নীতিমালা",
          },
          {
            id: 2,
            title: "আইন ও বিধি-নির্দেশিকা ও কৌশলপত্র",
          },
          {
            id: 3,
            title: "প্রকাশনা ও বার্ষিক প্রতিবেদন",
          },
          {
            id: 4,
            title: "বিভিন্ন প্রতিবেদন",
          },
        ],
      },
      {
        id: 4,
        subject: "নাগরিক ই-সেবাসমূহ",
        details: [
          {
            id: 1,
            title: "উদ্ভাবনীমুলক কাজে অনুদান",
          },
          {
            id: 2,
            title: "ফেলোশিপ ও বৃত্তি",
          },
          {
            id: 3,
            title: "হাইটেক পার্ক ওয়ান স্টপ সার্ভিস",
          },
          {
            id: 4,
            title: "অন্যান্য ই-সেবা",
          },
        ],
      },
      {
        id: 5,
        subject: "সেবা প্রদান প্রতিশ্রুতি (সিটিজেন্‌স চার্টার)",
        details: [
          {
            id: 1,
            title: "সেবা প্রদান প্রতিশ্রুতি",
          },
          {
            id: 2,
            title: "ফোকাল পয়েন্ট-পরিবীক্ষণ কমিটি",
          },
        ],
      },
      {
        id: 6,
        subject: "বার্ষিক কর্মসম্পাদন চুক্তি",
        details: [
          {
            id: 1,
            title: "বার্ষিক কর্মসম্পাদন চুক্তি ও ফলাফল",
          },
          {
            id: 2,
            title: "পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
          },
          {
            id: 3,
            title: "এপিএএমএস সফটওয়্যার লিংক",
          },
        ],
      },
      {
        id: 7,
        subject: "জাতীয় শুদ্ধাচার কৌশল",
        details: [
          {
            id: 1,
            title: "উত্তম চর্চা কর্মপরিকল্পনা সফটওয়্যার লিংক",
          },
          {
            id: 2,
            title: "নৈতিকতা কমিটি ও ফোকাল পয়েন্ট",
          },
          {
            id: 3,
            title: "পরিবীক্ষণ-মূল্যায়ন প্রতিবেদন",
          },
        ],
      },
      {
        id: 8,
        subject: "উদ্ভাবনী কার্যক্রম",
        details: [
          {
            id: 1,
            title: "ইনোভেশন টিম",
          },
          {
            id: 2,
            title: "ইনোভেশন কর্মপরিকল্পনা-প্রকাশনা",
          },
          {
            id: 3,
            title: "পাইলটিং প্রকল্পের তালিকা",
          },
        ],
      },
    ];
    return (
      <div
        id="serviceSection"
        data-aos="fade-up"
        className="py-10 bg-gradient-to-r from-blue-50 to-gray-100"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {services?.map((service) => (
              <div
                key={service.id}
                className="relative bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#213D61] to-[#00a751f3] opacity-10 rounded-lg -z-10"></div>
                <h4 className="text-xl font-semibold text-[#213D61] mb-4">
                  {service.subject}
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  {service.details?.map((detail) => (
                    <NavLink to={`/${detail.title}`}>
                      <li
                        key={detail.title}
                        className="flex items-center hover:underline"
                      >
                        <FaAngleRight className="text-[#00a751f3] text-xl mr-3" />
                        {detail.title}
                      </li>
                    </NavLink>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default OurService;