import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What's Mindset?",
    answer:
      "Mindset is a comprehensive mental wellness app designed to help you build healthy mental habits through guided meditation, breathing exercises, journaling, and expert support.",
  },
  {
    question: "Is my personal information and journal data secure?",
    answer:
      "Absolutely. All data is encrypted and stored securely. Your personal journal and sensitive info are never shared with third parties.",
  },
  {
    question: "How do I cancel my premium subscription?",
    answer:
      "You can cancel anytime via your account settings. Your premium access will remain valid until the end of your current billing cycle.",
  },
  {
    question: "How do expert consultations work?",
    answer:
      "Available to Premium and Ultimate users. You can book a secure video session with licensed therapists based on availability.",
  },
  {
    question: "Can I use Mindset offline?",
    answer:
      "Yes! Meditation sessions and journaling work offline. Only features like expert consultations or syncing require the internet.",
  },
];

export default function FAQ() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-28 bg-white/70 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Frequently Asked <span className="text-teal-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Mindset and how our wellness platform can support your mental health journey.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`bg-blue-50 border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                openIndices.includes(index) ? 'ring-2 ring-teal-600' : ''
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-100 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-teal-600 transform transition-transform duration-200 ${
                    openIndices.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-8 text-gray-600 text-base leading-relaxed transition-all duration-300 ease-in-out ${
                  openIndices.includes(index) ? 'py-6 block' : 'py-0 hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-block border border-teal-600 text-teal-600 px-8 py-3 rounded-full font-medium hover:bg-teal-600 hover:text-white transition"
          >
            View More Questions
          </Link>
        </div>
      </div>
    </section>
  );
}