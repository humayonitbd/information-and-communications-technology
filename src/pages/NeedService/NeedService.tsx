import { FaCheckCircle } from "react-icons/fa";
const NeedService = () => {
  return (
    <div className="py-12 bg-gray-50 ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#213D61] mb-8 text-center">
          অভ্যন্তরীণ গুরুত্বপূর্ণ সেবা সমূহ
        </h2>
        <div
          data-aos="fade-left"
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div className="bg-white shadow-xl rounded-lg p-6 border border-[#e0e0e0] hover:border-[#00a751f3] transition-all duration-300">
            <h4 className="text-xl font-semibold text-[#213D61] mb-4 border-b-2 border-[#00a751f3] pb-2">
              অভ্যন্তরীণ ই-সেবাসমূহ
            </h4>
            <ul className="space-y-4">
              {[
                { text: "ওয়েব মেইল", url: "https://mail.bcc.net.bd/" },
                {
                  text: "বৃত্তি ও আইসিটি উদ্ভাবনী অনুদান",
                  url: "https://nea.bcc.gov.bd/",
                },
                {
                  text: "ন্যাশনাল এন্টারপ্রাইজ আর্কিটেকচার",
                  url: "https://www.cirt.gov.bd/",
                },
                { text: "সিআইআরটি", url: "https://www.cirt.gov.bd/" },
                {
                  text: "অনলাইন নিয়োগ সিস্টেম",
                  url: "https://erecruitment.bcc.gov.bd/exam/?lang=bn",
                },
                {
                  text: "ওয়ান স্টপ সার্ভিস (বাংলাদেশ হাইটেক পার্ক কর্তৃপক্ষ)",
                  url: "https://ossbhtpa.gov.bd/",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center hover:bg-[#f0f4f8] p-2 rounded-lg transition-colors duration-300"
                >
                  <FaCheckCircle className="text-[#00a751f3] text-lg" />
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <p className="ml-3 text-[#213D61] text-base hover:text-[#00a751f3] transition-colors duration-300">
                      {item.text}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links Section */}
          <div className="bg-white shadow-xl rounded-lg p-6 border border-[#e0e0e0] hover:border-[#00a751f3] transition-all duration-300">
            <h4 className="text-xl font-semibold text-[#213D61] mb-4 border-b-2 border-[#00a751f3] pb-2">
              গুরুত্বপূর্ণ লিংক সমূহ
            </h4>
            <ul className="space-y-4">
              {[
                {
                  text: "রাষ্ট্রপতির কার্যালয়",
                  url: "https://bangabhaban.gov.bd/",
                },
                {
                  text: "প্রধানমন্ত্রীর কার্যালয়",
                  url: "http://www.pmo.gov.bd/",
                },
                { text: "মন্ত্রিপরিষদ বিভাগ", url: "https://cabinet.gov.bd/" },
                {
                  text: "বাংলাদেশ কর্মচারী কল্যাণ বোর্ড",
                  url: "https://bkkb.gov.bd/",
                },
                {
                  text: "জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ",
                  url: "https://nsda.gov.bd/",
                },
                {
                  text: "প্রাথমিক ডিজিটাল কন্টেন্ট",
                  url: "http://digitalcontent.ictd.gov.bd/",
                },
                {
                  text: "জাতীয় পোর্টাল",
                  url: "https://bangladesh.gov.bd/index.php",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center hover:bg-[#f0f4f8] p-2 rounded-lg transition-colors duration-300"
                >
                  <FaCheckCircle className="text-[#00a751f3] text-lg" />
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <p className="ml-3 text-[#213D61] text-base hover:text-[#00a751f3] transition-colors duration-300">
                      {item.text}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedService;
