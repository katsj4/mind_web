import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
}

const initialFaqs: FAQItem[] = [
  {
    question: "How does Mindset improve my daily mental wellness?",
    answer:
      "Mindset uses scientifically-backed techniques to improve focus, reduce stress, and build emotional resilience. Daily check-ins and guided sessions help users develop consistent wellness habits. All features are tailored to your unique mental health goals.",
  },
  {
    question: "What types of meditation sessions are available on Mindset?",
    answer:
      "Our meditation sessions include guided, unguided, and themed tracks covering sleep, anxiety, focus, and relaxation. They're crafted by licensed mindfulness practitioners. New sessions are added regularly to keep your routine fresh.",
  },
  {
    question: "Can I share my progress with a therapist or coach?",
    answer:
      "You can share your progress with a therapist or coach via encrypted reports. This helps them understand your mood patterns and suggest better coping strategies. You control what data is shared and when.",
  },
  {
    question: "What’s included in the Ultimate subscription plan?",
    answer:
      "The Ultimate plan offers unlimited access to all sessions, expert consultations, mood tracking, and offline features. It includes personalized recommendations and priority support. You’ll also receive early access to new content and challenges.",
  },
  {
    question: "Does Mindset support reminders or notifications?",
    answer:
      "Yes, Mindset allows you to schedule reminders for meditation, journaling, and breathing exercises. You can customize the time and frequency in your profile settings. Notifications are non-intrusive and designed to support your goals.",
  },
];

const extraFaqs: FAQItem[] = [
  {
    question: "How secure are expert video consultations?",
    answer:
      "All consultations are encrypted and conducted via secure video calls. You choose your therapist based on available slots and preferences. Only premium users have access to this feature.",
  },
  {
    question: "Can Mindset help reduce stress and anxiety?",
    answer:
      "Yes, Mindset is ideal for managing daily stress and anxiety. Our short mindfulness exercises are designed to reset your focus and calm your mind. Over time, you’ll develop better stress responses.",
  },
  {
    question: "Are there group meditation features?",
    answer:
      "At the moment, group meditation is not supported. However, we’re working on community features for shared sessions. You can still share your journey via journals and progress summaries.",
  },
  {
    question: "Can I pause my subscription temporarily?",
    answer:
      "You can pause your subscription from your account settings. During the pause, you retain access to limited features. Your data remains safe and resumes when you reactivate.",
  },
  {
    question: "Do I need prior experience to start using Mindset?",
    answer:
      "No experience is needed to use Mindset. We guide you step-by-step through meditations, journaling, and breathing. Beginner paths are designed to be simple and encouraging.",
  },
  // ... add 45 more detailed FAQ items here in the same format
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const faqRef = useRef<HTMLDivElement | null>(null);
  const extraRef = useRef<HTMLDivElement | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (showAll && extraRef.current) {
      extraRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (!showAll && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showAll]);

  const displayedFaqs = showAll ? [...initialFaqs, ...extraFaqs] : initialFaqs;

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-28 bg-white/90 dark:bg-gray-900"
    >
      <div className="mx-auto w-[90%] max-w-6xl px-4 sm:px-6 lg:px-8">
        <header ref={faqRef} className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-3 tracking-tight">
            Frequently Asked <span className="text-teal-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about Mindset and how our wellness platform can support your mental health journey.
          </p>
        </header>

        <div ref={extraRef}>
          {displayedFaqs.map((faq, idx) => (
            <div
              key={idx}
              className={`border-b border-gray-200 dark:border-gray-700 py-6`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-teal-600 transform transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-block border border-teal-600 text-teal-600 px-10 py-3 rounded-full font-semibold hover:bg-teal-600 hover:text-white transition"
          >
            {showAll ? 'Show Less Questions' : 'View More Questions'}
          </button>
        </div>
      </div>
    </section>
  );
}
