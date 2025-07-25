import React, { useState } from "react";

const faqs = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy. Please ensure items are unused and in original packaging.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping takes 3-5 business days within India, and 7-10 days internationally.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, our support team is available 24/7 via chat and email to assist you.",
  },
  {
    question: "Is there a membership fee?",
    answer: "No, our platform is completely free to use without any membership charges.",
  },
  {
    question: "Can I cancel my order?",
    answer: "Yes, orders can be cancelled before dispatch. Contact support for assistance.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, our support team is available 24/7 via chat and email to assist you.",
  },
  {
    question: "Are my details secure?",
    answer: "Yes, we use encryption and follow strict security protocols to protect your data.",
  },
];

const QuickConnectSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
      {/* Left: FAQ */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-5 py-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-5 py-4 bg-white text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right: Quick Connect Form */}
      <div className="bg-white p-6 rounded-xl shadow-lg border">
        <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Enter Your Name*</label>
            <input
              type="text"
              required
              className="mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Your Email Address*</label>
            <input
              type="email"
              required
              className="mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Enter Your Phone No*</label>
            <input
              type="tel"
              required
              className="mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>          
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea name="message" id="message" className="mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4}></textarea>
          </div>
          
          {/* <div>
            <label className="block text-sm font-medium">Select Your Language</label>
            <select
              className="mt-1 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="bengali">Bengali</option>
              <option value="telugu">Telugu</option>
            </select>
          </div> */}
          <div className="flex items-center">
            <input type="checkbox" id="whatsapp" className="mr-2" />
            <label htmlFor="whatsapp" className="text-sm">
              Get updates on WhatsApp
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="terms" required className="mr-2" />
            <label htmlFor="terms" className="text-sm">
              I Agree To All Terms And Conditions*
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-brand hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuickConnectSection;
