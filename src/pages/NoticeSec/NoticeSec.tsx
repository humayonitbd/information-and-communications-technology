import { FaAngleRight } from "react-icons/fa";
import noticeImage from "../../assets/notice image/Honorable Adviser (1).jpg";
import NoticeModal, { TNoticDetails } from "../../components/ui/NoticeModal";
import {useState} from 'react'



const NoticeSec = () => {
   const [noticeDel, setNoticeDel] = useState<TNoticDetails | undefined>(
     undefined
   );

  const noticeInfos = [
    {
      id: 1,
      title:
        "প্রজ্ঞাপন (স্মারক-৬৮, চাকরি স্থায়ীকরণ, প্রোগ্রামার ও সহকারী প্রোগ্রামার, তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ)",
      details:
        "প্রজ্ঞাপনটি তথ্য ও যোগাযোগ প্রযুক্তি বিভাগের অধীনে প্রোগ্রামার এবং সহকারী প্রোগ্রামারদের চাকরি স্থায়ীকরণের জন্য জারি করা হয়েছে। এটি সাধারণত সরকারি চাকরির স্থায়ীত্বের নিশ্চয়তা প্রদান করে এবং কর্মচারীদের দক্ষতা ও প্রয়োজনীয়তার ভিত্তিতে স্থায়ী নিয়োগ প্রদান করে থাকে। প্রজ্ঞাপনের মাধ্যমে কর্মচারীদের সেবাকালীন অবস্থান, সুবিধাদি, এবং বিভিন্ন কর্মপরিকল্পনার বিস্তারিত বিবরণ প্রদান করা হয়।চাকরি স্থায়ীকরণের পর কর্মচারীদের জন্য নিয়মিত প্রশিক্ষণ এবং উন্নয়নমূলক সুযোগ প্রদান করা হয়, যা তাদের দক্ষতা বৃদ্ধি এবং ক্যারিয়ার উন্নয়নের জন্য সহায়ক। চাকরি স্থায়ীকরণের সাথে সাথে নতুন পদ ও দায়িত্বের বিষয়ে প্রয়োজনীয় তথ্যও প্রদান করা হয়",
    },
    {
      id: 2,
      title: "অফিস আদেশ (দায়িত্ব বণ্টন)",
      details:
        "অফিস আদেশ (দায়িত্ব বণ্টন) হল একটি প্রশাসনিক নির্দেশ যা কর্মচারীদের মধ্যে দায়িত্ব ভাগ করে দেয়। এটি সাধারণত অফিস বা প্রতিষ্ঠানের বিভিন্ন বিভাগ বা কর্মচারীদের মধ্যে দায়িত্বের স্পষ্ট বিভাজন ও বণ্টন নিশ্চিত করতে ব্যবহৃত হয়। এই আদেশের অধীনে, বিভিন্ন কর্মচারীর কাজের ক্ষেত্র ও দায়িত্ব স্পষ্টভাবে নির্ধারণ করা হয়। এর মাধ্যমে কর্মচারীরা তাদের কাজের জন্য প্রয়োজনীয় দিকনির্দেশনা এবং দায়িত্ব বুঝতে পারে, যা তাদের কার্যক্ষমতা এবং কর্মদক্ষতা বৃদ্ধি করতে সহায়তা করে। অফিস আদেশের মাধ্যমে দায়িত্ব ভাগ করা হয় যাতে কাজের প্রক্রিয়া আরও সুসংগঠিত হয় এবং অফিসের সামগ্রিক কার্যক্রমে কোনো ধরনের বিভ্রান্তি বা দ্বন্দ্ব সৃষ্টি না হয়। এর ফলে অফিসের কার্যক্রম আরও কার্যকরী ও সুশৃঙ্খলভাবে পরিচালিত হয়।",
    },
    {
      id: 3,
      title: "২০২৪-২০২৫ অর্থবছরের বিজ্ঞপ্তি",
      details:
        "২০২৪-২০২৫ অর্থবছরের বিজ্ঞপ্তি একটি গুরুত্বপূর্ণ নথি যা নতুন অর্থবছরের জন্য পরিকল্পনা, বাজেট, এবং অন্যান্য অর্থনৈতিক নির্দেশনার বিস্তারিত বিবরণ প্রদান করে। এই বিজ্ঞপ্তিতে উল্লেখ করা হয় নতুন অর্থবছরের জন্য নির্ধারিত বাজেটের পরিমাণ, এবং কীভাবে এই বাজেট বিভিন্ন খাতে বরাদ্দ করা হবে। এতে বিনিয়োগ পরিকল্পনা, অর্থনৈতিক লক্ষ্য, এবং নতুন আর্থিক নীতির তথ্য অন্তর্ভুক্ত থাকে। বিজ্ঞপ্তিটি পূর্ববর্তী অর্থবছরের অর্জন এবং চ্যালেঞ্জের পর্যালোচনার ভিত্তিতে নতুন অর্থনৈতিক কৌশল এবং পরিকল্পনা নির্ধারণের প্রস্তাবনা প্রদান করে। এটি সংশ্লিষ্ট কর্মকর্তাদের এবং প্রতিষ্ঠানের কর্মচারীদের জন্য নতুন অর্থবছরের জন্য প্রস্তুত থাকতে সাহায্য করে এবং কাজের পরিকল্পনা ও লক্ষ্য সমন্বয়ের জন্য নির্দেশনা প্রদান করে।",
    },
    {
      id: 4,
      title:
        "২০২৪-২০২৫ অর্থবছরের বিজ্ঞপ্তি একটি গুরুত্বপূর্ণ নথি যা নতুন অর্থবছরের জন্য পরিকল্পনা, বাজেট, এবং",
      details:
        "এই e-Tender প্রক্রিয়া প্রোগ্রামের জন্য খাদ্য এবং রিফ্রেশমেন্টের সরবরাহের জন্য ঘোষণা করা হয়েছে। e-Tender প্রক্রিয়ার মাধ্যমে এই প্রোগ্রামের জন্য প্রয়োজনীয় খাদ্যপণ্য এবং পানীয়ের সরবরাহকারী প্রতিষ্ঠানের নির্বাচন করা হবে। এতে অংশগ্রহণকারী প্রার্থীদের একটি নির্দিষ্ট সময়ের মধ্যে তাদের দরপত্র জমা দিতে হবে, যা বিস্তারিতভাবে প্রোগ্রামের চাহিদা ও শর্তাবলী অনুসরণ করে। এই প্রক্রিয়ায় প্রাপ্ত দরপত্রের মূল্যায়ন করা হবে এবং যোগ্য প্রার্থীকে চূড়ান্তভাবে নির্বাচিত করা হবে। এতে নির্বাচিত প্রতিষ্ঠানের সাথে চুক্তি স্বাক্ষরিত হবে, যা খাদ্য এবং পানীয়ের সরবরাহ নিশ্চিত করবে।",
    },
    {
      id: 5,
      title: "অফিস আদেশ (অবমুক্তি, জনাব মির্জা মুরাদ হাসান বেগ, উপ-পরিচালক)",
      details:
        "এই অফিস আদেশটি জনাব মির্জা মুরাদ হাসান বেগের অবমুক্তির বিষয়ে নির্দেশ প্রদান করে। আদেশের মাধ্যমে জনাব মির্জা মুরাদ হাসান বেগ, যিনি উপ-পরিচালক পদে কর্মরত ছিলেন, তার চাকরির শেষের তারিখ ঘোষণা করা হয়েছে। এই প্রক্রিয়ার মাধ্যমে তার কর্মজীবনের বিভিন্ন দিক যেমন পদোন্নতি, অবসর অথবা অন্যান্য কারিগরি বা প্রশাসনিক সিদ্ধান্তের বিস্তারিত বিবরণ প্রদান করা হয়। এছাড়া, তার অবমুক্তির পরবর্তী পদক্ষেপ, বকেয়া সুবিধাদি, এবং অফিসের অন্যান্য সংশ্লিষ্ট কার্যক্রমের বিস্তারিত বিবরণও উল্লেখ করা হয়ে থাকে।",
    },
  ];

   const handleSeeMore = (notice: TNoticDetails) => {
     setNoticeDel(notice);
     const modal = document.getElementById("my_modal_5") as HTMLDialogElement;
     if (modal) {
       modal.showModal(); 
     }
   };
  return (
    <div className="py-10">
      <section className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#00a751f3]">
        <h2 className="text-2xl font-semibold text-[#213D61] mb-6 border-b pb-2 border-gray-300">
          নোটিশ বোর্ড
        </h2>
        <div className="md:flex justify-start gap-10">
          <div className="w-2/3">
            <ul className="space-y-3">
              {noticeInfos.map((notice) => (
                <div
                  key={notice.id}
                  className="flex justify-between items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300 border-l-4 border-[#00a751f3]"
                >
                  <li className="flex items-center ">
                    <FaAngleRight className="text-[#00a751f3] text-lg" />
                    <span className="text-gray-700">
                      {notice.details.slice(0, 80)}...
                    </span>
                  </li>
                  <button
                    className="underline text-[#00a751f3] "
                    onClick={() => handleSeeMore(notice)}
                  >
                    see more
                  </button>
                </div>
              ))}
            </ul>
          </div>
          <div className="flex items-start h-full ">
            <div className="text-center ml-20">
              <div>
                <img className="h-56 w-56" src={noticeImage} alt="" />
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-lg">জনাব মোঃ নাহিদ ইসলাম</h4>
                <p className="text-gray-600">মাননীয় উপদেষ্টা</p>
                <a
                  href="https://en.wikipedia.org/wiki/Nahid_Islam"
                  target="_blank"
                >
                  <button className="bg-[#00a751f3] text-slate-100  py-1 px-2 rounded ">
                    See more
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NoticeModal noticeDetails={noticeDel} />
    </div>
  );
};

export default NoticeSec;
